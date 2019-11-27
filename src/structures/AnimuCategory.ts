import { Category, LinkResponse } from './Category';

export class AnimuCategory extends Category {
	public constructor() {
		super('/animu');
	}

	public wink(): Promise<LinkResponse> {
		return this.request('/wink');
	}

	public pat(): Promise<LinkResponse> {
		return this.request('/pat');
	}

	public hug(): Promise<LinkResponse> {
		return this.request('/hug');
	}
}
