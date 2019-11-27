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

export class WelcomeCategory extends Category {
	public constructor() {
		super();
		this.baseURL = 'https://welcome-imgs.some-random-api.ml';
	}

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
