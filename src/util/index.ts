import fetch from 'node-fetch';
import { MissingParameter } from './Errors';

export async function toBuffer(link: string): Promise<Buffer> {
	if (!link) throw new MissingParameter('link');

	const res = await fetch(link);
	const buffer = await res.buffer();
	return buffer;
}
