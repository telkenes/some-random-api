import fetch from 'node-fetch';
import { URLSearchParams } from 'url';

export interface BaseResponse {
	error?: string;
	message?: string;
}

export interface LinkResponse extends BaseResponse {
	link: string;
}

export abstract class Category {
	public baseURL = 'https://some-random-api.ml';
	public baseEndpoint!: string;

	public constructor(baseEndpoint?: string) {
		this.baseEndpoint = baseEndpoint || '';
	}

	public async request(endpoint: string, query?: object) {
		const URL = this.baseURL + this.baseEndpoint + endpoint;
		let params;

		if (query) {
			params = new URLSearchParams();
			for (const [k, v] of Object.entries(query)) {
				params.append(k, v);
			}
		}

		const res = await fetch(params ? `${URL}?${params}` : URL);
		const json = await res.json();
		return json;
	}

	public async requestBuffer(endpoint: string, query?: object) {
		const URL = this.baseURL + this.baseEndpoint + endpoint;
		let params;

		if (query) {
			params = new URLSearchParams();
			for (const [k, v] of Object.entries(query)) {
				params.append(k, v);
			}
		}

		const res = await fetch(params ? `${URL}?${params}` : URL);
		const buffer = await res.buffer();
		return buffer;
	}
}
