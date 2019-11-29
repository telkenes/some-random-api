import { Category, BaseResponse } from './Category';

export interface FactResponse extends BaseResponse {
	fact: string;
}

/**
 * Facts Category - includes facts endpoints
 */
export class FactsCategory extends Category {
	/**
	 * Create new FactsCategory
	 */
	public constructor() {
		super('/facts');
	}

	/**
	 * Get dog fact
	 * @see https://some-random-api.ml/docs/facts/dog
	 */
	public dog(): Promise<FactResponse> {
		return this.request('/dog');
	}

	/**
	 * Get cat fact
	 * @see https://some-random-api.ml/docs/facts/cat
	 */
	public cat(): Promise<FactResponse> {
		return this.request('/cat');
	}

	/**
	 * Get panda fact
	 * @see https://some-random-api.ml/docs/facts/panda
	 */
	public panda(): Promise<FactResponse> {
		return this.request('/panda');
	}

	/**
	 * Get bird fact
	 * @see https://some-random-api.ml/docs/facts/bird
	 */
	public bird(): Promise<FactResponse> {
		return this.request('/bird');
	}

	/**
	 * Get fox fact
	 * @see https://some-random-api.ml/docs/facts/fox
	 */
	public fox(): Promise<FactResponse> {
		return this.request('/fox');
	}

	/**
	 * Get koala fact
	 * @see https://some-random-api.ml/docs/facts/koala
	 */
	public koala(): Promise<FactResponse> {
		return this.request('/koala');
	}
}
