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

export interface BinaryEncodeResponse extends BaseResponse {
	binary: string;
}

export interface BinaryDecodeResponse extends BaseResponse {
	text: string;
}

export interface Base64EncodeResponse extends BaseResponse {
	base64: string;
}

export interface Base64DecodeResponse extends BaseResponse {
	text: string;
}

export interface MemeResponse extends BaseResponse {
	id: number;
	image: string;
	caption: string;
	category: string;
}

/**
 * Other Category - includes other endpoints
 */
export class OtherCategory extends Category {
	/**
	 * Get message from chatbot
	 * @param message {string} message content to respond to
	 * @see https://some-random-api.ml/docs/other/chatbot
	 */
	public chatbot(message: string): Promise<ChatbotResponse> {
		if (!message) throw new MissingParameter('message');

		return this.request('/chatbot', { message });
	}

	/**
	 * Get data about Minecraft username
	 * @param username {string} Minecraft username
	 * @see https://some-random-api.ml/docs/other/minecraft
	 */
	public mc(username: string): Promise<McResponse> {
		if (!username) throw new MissingParameter('username');

		return this.request('/mc', { username });
	}

	/**
	 * Get lyrics of a song
	 * @param title {string} song title
	 * @see https://some-random-api.ml/docs/other/lyrics
	 */
	public lyrics(title: string): Promise<LyricsResponse> {
		if (!title) throw new MissingParameter('title');

		return this.request('/lyrics', { title });
	}

	/**
	 * Encode text to binary
	 * @param text {string} text to encode
	 * @see https://some-random-api.ml/docs/other/binary
	 */
	public binaryEncode(text: string): Promise<BinaryEncodeResponse> {
		if (!text) throw new MissingParameter('text');

		return this.request('/binary', { text });
	}

	/**
	 * Decode binary to text
	 * @param decode {string} binary to dencode
	 * @see https://some-random-api.ml/docs/other/binary
	 */
	public binaryDecode(decode: string): Promise<BinaryDecodeResponse> {
		if (!decode) throw new MissingParameter('decode');

		return this.request('/binary', { decode });
	}

	/**
	 * Encode text to base64
	 * @param encode {string} text to encode
	 * @see https://some-random-api.ml/docs/other/base64
	 */
	public base64Encode(encode: string): Promise<Base64EncodeResponse> {
		if (!encode) throw new MissingParameter('encode');

		return this.request('/base64', { encode });
	}

	/**
	 * Decode base64 to text
	 * @param decode {string} base64 to dencode
	 * @see https://some-random-api.ml/docs/other/base64
	 */
	public base64Decode(decode: string): Promise<Base64DecodeResponse> {
		if (!decode) throw new MissingParameter('decode');

		return this.request('/base64', { decode });
	}

	/**
	 * Get random meme (undocumented)
	 * @see https://some-random-api.ml/docs/other/meme
	 */
	public meme(): Promise<MemeResponse> {
		return this.request('/meme');
	}
}
