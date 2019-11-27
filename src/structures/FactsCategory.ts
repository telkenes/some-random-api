import { Category, BaseResponse } from './Category';

export interface FactResponse extends BaseResponse {
	fact: string;
}

export class FactsCategory extends Category {
	public constructor() {
		super('/facts');
	}

	public dog(): Promise<FactResponse> {
		return this.request('/dog');
	}

	public cat(): Promise<FactResponse> {
		return this.request('/cat');
	}

	public panda(): Promise<FactResponse> {
		return this.request('/panda');
	}

	public bird(): Promise<FactResponse> {
		return this.request('/bird');
	}

	public fox(): Promise<FactResponse> {
		return this.request('/fox');
	}

	public koala(): Promise<FactResponse> {
		return this.request('/koala');
	}
}
