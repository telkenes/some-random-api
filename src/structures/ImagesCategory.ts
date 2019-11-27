import { Category, LinkResponse } from './Category';

export class ImagesCategory extends Category {
	public constructor() {
		super('/img');
	}

	public dog(): Promise<LinkResponse> {
		return this.request('/dog');
	}

	public cat(): Promise<LinkResponse> {
		return this.request('/cat');
	}

	public panda(): Promise<LinkResponse> {
		return this.request('/panda');
	}

	public redpanda(): Promise<LinkResponse> {
		return this.request('/red_panda');
	}

	public birb(): Promise<LinkResponse> {
		return this.request('/birb');
	}

	public fox(): Promise<LinkResponse> {
		return this.request('/fox');
	}

	public koala(): Promise<LinkResponse> {
		return this.request('/koala');
	}

	public racoon(): Promise<LinkResponse> {
		return this.request('/koala');
	}
}
