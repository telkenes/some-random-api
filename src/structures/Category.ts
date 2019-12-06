import fetch from 'node-fetch';
import { URLSearchParams } from 'url';

export interface BaseResponse {
	error?: string;
	message?: string;
}

export interface LinkResponse extends BaseResponse {
	link: string;
}

/**
 * Base Category
 */
export abstract class Category {
	/** Base URL */
	public baseURL: string;
	/** Base endpoint */
	public baseEndpoint: string;

	/**
	 * Create new category class
	 * @param baseEndpoint {string} base endpoint for sub-endpoints (default '')
	 * @param baseURL {string} base URL for requests (default 'https://some-random-api.ml')
	 */
	public constructor(baseEndpoint = '', baseURL = 'https://some-random-api.ml') {
		this.baseURL = baseURL;
		this.baseEndpoint = baseEndpoint;
	}

	/**
	 * Perform new request
	 * @param endpoint {string} endpoint to request
	 * @param query {object} query to attach
	 * @returns {Promise<any>} response of API
	 */
	public async request(endpoint: string, query?: object): Promise<any> {
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

	/**
	 * Perform new buffer request
	 * @param endpoint {string} endpoint to request
	 * @param query {object} query to attach
	 * @returns {Promise<Buffer>} response of API
	 */
	public async requestBuffer(endpoint: string, query?: object): Promise<Buffer> {
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
