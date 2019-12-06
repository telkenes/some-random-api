import { Category, LinkResponse } from './Category';

/**
 * Images Category - includes images endpoints
 */
export class ImagesCategory extends Category {
	/**
	 * Create new ImagesCategory
	 */
	public constructor() {
		super('/img');
	}

	/**
	 * Get dog image
	 * @see https://some-random-api.ml/docs/images/dog
	 */
	public dog(): Promise<LinkResponse> {
		return this.request('/dog');
	}

	/**
	 * Get cat image
	 * @see https://some-random-api.ml/docs/images/cat
	 */
	public cat(): Promise<LinkResponse> {
		return this.request('/cat');
	}

	/**
	 * Get panda image
	 * @see https://some-random-api.ml/docs/images/panda
	 */
	public panda(): Promise<LinkResponse> {
		return this.request('/panda');
	}

	/**
	 * Get red panda image (undocumented)
	 * @see https://some-random-api.ml/docs/images/red%20panda
	 */
	public redpanda(): Promise<LinkResponse> {
		return this.request('/red_panda');
	}

	/**
	 * Get birb (bird) image
	 * @see https://some-random-api.ml/docs/images/bird
	 */
	public birb(): Promise<LinkResponse> {
		return this.request('/birb');
	}

	/**
	 * Get dog image
	 * @see https://some-random-api.ml/docs/images/dog
	 */
	public fox(): Promise<LinkResponse> {
		return this.request('/fox');
	}

	/**
	 * Get koala image
	 * @see https://some-random-api.ml/docs/images/koala
	 */
	public koala(): Promise<LinkResponse> {
		return this.request('/koala');
	}

	/**
	 * Get racoon image (undocumented)
	 * @see https://some-random-api.ml/docs/images/racoon
	 */
	public racoon(): Promise<LinkResponse> {
		return this.request('/racoon');
	}
}
