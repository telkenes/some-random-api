import { Category, BaseResponse } from './Category';
import { MissingParameter } from '../util/Errors';

export interface ChatbotResponse extends BaseResponse {
	response: string;
}

export interface McResponse extends BaseResponse {
	username: string;
	full_uuid: string;
	trimmed_uuid: string;
	name_history: { name: string; changedToAt: string }[];
}

export interface LyricsResponse extends BaseResponse {
	title: string;
	author: string;
	lyrics: string;
	thumbnail: object;
	links: object;
}

export interface BinaryResponse extends BaseResponse {
	binary: string;
}

export interface Base64Response extends BaseResponse {
	base64: string;
}

export interface MemeResponse extends BaseResponse {
	id: number;
	image: string;
	caption: string;
	category: string;
}

export class OtherCategory extends Category {
	public chatbot(message: string): Promise<ChatbotResponse> {
		if (!message) throw new MissingParameter('message');

		return this.request('/chatbot', { message });
	}

	public mc(username: string): Promise<McResponse> {
		if (!username) throw new MissingParameter('username');

		return this.request('/mc', { username });
	}

	public lyrics(title: string): Promise<LyricsResponse> {
		if (!title) throw new MissingParameter('title');

		return this.request('/lyrics', { title });
	}

	public binary(text: string): Promise<BinaryResponse> {
		if (!text) throw new MissingParameter('text');

		return this.request('/binary', { text });
	}

	public base64(encode: string): Promise<Base64Response> {
		if (!encode) throw new MissingParameter('encode');

		return this.request('/base64', { encode });
	}

	public meme(): Promise<MemeResponse> {
		return this.request('/meme');
	}
}
