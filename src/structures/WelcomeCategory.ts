import { Category } from './Category';

export interface WelcomeOptions {
	template: 1 | 2 | 3 | 4;
	background: 'stars' | 'stars2' | 'rainbow-gradient' | 'rainbow' | 'sunset' | 'night' | 'blobday' | 'blobnight' | 'space';
	tag: string;
	guildName: string;
	memberCount: number;
	avatar: string;
	textcolor: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink' | 'black' | 'white';
}

/**
 * Welcome Category - includes welcome images endpoints
 */
export class WelcomeCategory extends Category {
	/**
	 * Create new WelcomeCategory
	 */
	public constructor() {
		super('', 'https://welcome-imgs.some-random-api.ml');
	}

	/**
	 * Get join image
	 * @param options {WelcomeOptions} options for image generation
	 * @see https://welcome-imgs.some-random-api.ml/documentation
	 */
	public join(options: WelcomeOptions): Promise<Buffer> {
		return this.requestBuffer(`/img/${options.template}/${options.background}`, {
			type: 'join',
			username: options.tag.split('#')[0],
			discriminator: options.tag.split('#')[1],
			guildName: options.guildName,
			memberCount: options.memberCount,
			avatar: options.avatar,
			textcolor: options.textcolor
		});
	}

	/**
	 * Get leave image
	 * @param options {WelcomeOptions} options for image generation
	 * @see https://welcome-imgs.some-random-api.ml/documentation
	 */
	public leave(options: WelcomeOptions): Promise<Buffer> {
		return this.requestBuffer(`/img/${options.template}/${options.background}`, {
			type: 'leave',
			username: options.tag.split('#')[0],
			discriminator: options.tag.split('#')[1],
			guildName: options.guildName,
			memberCount: options.memberCount,
			avatar: options.avatar,
			textcolor: options.textcolor
		});
	}
}
