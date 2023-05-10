import fetch from 'node-fetch';
import { posix } from 'path';
import { URL, URLSearchParams } from 'url';
import { Path, Endpoint } from './Endpoint';
import { loadEndpoints } from '../util';
import { EndpointNotExist, MissingParameter, PremiumNeeded } from '../util/Errors';
import { promisify } from 'util';

const wait = promisify(setTimeout);

interface Cooldown {
	path: Path;
	ends: number;
}

export class SRAClient {
	public baseURL = 'https://some-random-api.com';
	public baseEndpoint = '/';
	private endpoints!: Map<Path, Endpoint>;
	private cooldowns: Map<Path, Cooldown> = new Map();

	public constructor(public apiKey: string = '') {
		this.apiKey = apiKey;
		this.loadEndpoints();
	}

	private loadEndpoints(): void {
		this.endpoints = new Map();
		loadEndpoints(this.endpoints);
	}

	public async fetch(path: Path, query?: object): Promise<any> {
		if (!this.endpoints.has(path)) {
			throw new EndpointNotExist(path);
		}

		const endpoint = this.endpoints.get(path)!;

		if (this.cooldowns.has(path)) {
			let cooldown = this.cooldowns.get(path)!;
			if (cooldown.ends > Date.now())
				await wait(this.cooldowns.get(path)?.ends! - Date.now());
		}

		const url = new URL(posix.join(this.baseEndpoint, path), this.baseURL);
		const params = new URLSearchParams();

		if (this.apiKey) params?.append('key', this.apiKey);

		if (query) {
			for (const [k, v] of Object.entries(query)) {
				params.append(k, v);
			}
		}

		this.validateRequest(endpoint, query);

		try {
			const res = await fetch(params ? `${url}?${params}` : url);
			this.cooldowns.set(path, { path, ends: Date.now() + endpoint.cooldown || 100 });
			const type = res.headers.get('content-type');
			let output;
			if (type?.includes('application/json')) {
				output = await res.json();

				if (!res.ok || output.error) {
					throw new Error(output.error ? output.error : output);
				}
				return output;
			} else if (type?.includes('image')) {
				output = await res.buffer();
				return output;
			}
		} catch (error) {
			throw new Error(error);
		}
	}

	private validateRequest(endpoint: Endpoint, query: any = {}): void {
		if (endpoint.query) {
			const entries = Object.entries(endpoint.query);

			for (const [k, v] of entries) {
				if (v.required === true && !query[k]) {
					throw new MissingParameter(k);
				}
			}
		}

		if (endpoint.premium && !this.apiKey) {
			throw new PremiumNeeded(endpoint.path);
		}
	}
}
