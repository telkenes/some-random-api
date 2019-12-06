import { Category, LinkResponse } from './Category';

/**
 * Animu Category - includes animu endpoints
 */
export class AnimuCategory extends Category {
	/**
	 * Create new AnimuCategory
	 */
	public constructor() {
		super('/animu');
	}

	/**
	 * Get wink GIF
	 * @see https://some-random-api.ml/docs/animu/wink
	 */
	public wink(): Promise<LinkResponse> {
		return this.request('/wink');
	}

	/**
	 * Get pat GIF
	 * @see https://some-random-api.ml/docs/animu/pat
	 */
	public pat(): Promise<LinkResponse> {
		return this.request('/pat');
	}

	/**
	 * Get hug GIF
	 * @see https://some-random-api.ml/docs/animu/hug
	 */
	public hug(): Promise<LinkResponse> {
		return this.request('/hug');
	}
}
