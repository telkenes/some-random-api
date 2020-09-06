import fetch from 'node-fetch';
import { MissingParameter } from './Errors';
import { Endpoint } from '../structures/Endpoint';

export async function toBuffer(link: string): Promise<Buffer> {
	if (!link) throw new MissingParameter('link');

	const res = await fetch(link);
	const buffer = await res.buffer();
	return buffer;
}

export function loadEndpoints(endpoints: Map<string, Endpoint>) {
	// Facts
	endpoints.set('/facts/dog', new Endpoint('/facts/dog'));
	endpoints.set('/facts/cat', new Endpoint('/facts/cat'));
	endpoints.set('/facts/panda', new Endpoint('/facts/panda'));
	endpoints.set('/facts/fox', new Endpoint('/facts/birb'));
	endpoints.set('/facts/birb', new Endpoint('/facts/birb'));
	endpoints.set('/facts/koala', new Endpoint('/facts/koala'));
	endpoints.set('/facts/racoon', new Endpoint('/facts/racoon'));
	endpoints.set('/facts/kangaroo', new Endpoint('/facts/kangaroo'));
	endpoints.set('/facts/elephant', new Endpoint('/facts/elephant'));
	endpoints.set('/facts/giraffe', new Endpoint('/facts/giraffe'));
	endpoints.set('/facts/whale', new Endpoint('/facts/whale'));

	// Images
	endpoints.set('/img/dog', new Endpoint('/img/dog'));
	endpoints.set('/img/cat', new Endpoint('/img/cat'));
	endpoints.set('/img/panda', new Endpoint('/img/panda'));
	endpoints.set('/img/fox', new Endpoint('/img/birb'));
	endpoints.set('/img/birb', new Endpoint('/img/birb'));
	endpoints.set('/img/koala', new Endpoint('/img/koala'));
	endpoints.set('/img/racoon', new Endpoint('/img/racoon'));
	endpoints.set('/img/kangaroo', new Endpoint('/img/kangaroo'));
	endpoints.set('/img/elephant', new Endpoint('/img/elephant'));
	endpoints.set('/img/giraffe', new Endpoint('/img/giraffe'));
	endpoints.set('/img/whale', new Endpoint('/img/whale'));

	// Animals
	endpoints.set('/animal/dog', new Endpoint('/animal/dog'));
	endpoints.set('/animal/cat', new Endpoint('/animal/cat'));
	endpoints.set('/animal/panda', new Endpoint('/animal/panda'));
	endpoints.set('/animal/fox', new Endpoint('/animal/birb'));
	endpoints.set('/animal/birb', new Endpoint('/animal/birb'));
	endpoints.set('/animal/koala', new Endpoint('/animal/koala'));
	endpoints.set('/animal/racoon', new Endpoint('/animal/racoon'));
	endpoints.set('/animal/kangaroo', new Endpoint('/animal/kangaroo'));
	endpoints.set('/animal/elephant', new Endpoint('/animal/elephant'));
	endpoints.set('/animal/giraffe', new Endpoint('/animal/giraffe'));
	endpoints.set('/animal/whale', new Endpoint('/animal/whale'));

	// Gif
	endpoints.set('/animu/wink', new Endpoint('/animu/wink'));
	endpoints.set('/animu/pat', new Endpoint('/animu/pat'));
	endpoints.set('/animu/hug', new Endpoint('/animu/hug'));

	// Canvas
	endpoints.set('/canvas/gay', new Endpoint('/canvas/gay', { query: {
		avatar: { key: 'avatar', required: true }
	}}));
	endpoints.set('/canvas/glass', new Endpoint('/canvas/glass', { query: {
		avatar: { key: 'avatar', required: true }
	}}));
	endpoints.set('/canvas/wasted', new Endpoint('/canvas/wasted', { query: {
		avatar: { key: 'avatar', required: true }
	}}));
	endpoints.set('/canvas/triggered', new Endpoint('/canvas/triggered', { query: {
		avatar: { key: 'avatar', required: true }
	}}));
	endpoints.set('/canvas/greyscale', new Endpoint('/canvas/invert', { query: {
		avatar: { key: 'avatar', required: true }
	}}));
	endpoints.set('/canvas/invert', new Endpoint('/canvas/invert', { query: {
		avatar: { key: 'avatar', required: true }
	}}));
	endpoints.set('/canvas/invertgreyscale', new Endpoint('/canvas/invertgreyscale', { query: {
		avatar: { key: 'avatar', required: true }
	}}));
	endpoints.set('/canvas/brightness', new Endpoint('/canvas/brightness', { query: {
		avatar: { key: 'avatar', required: true }
	}}));
	endpoints.set('/canvas/threshold', new Endpoint('/canvas/threshold', { query: {
		avatar: { key: 'avatar', required: true }
	}}));
	endpoints.set('/canvas/sepia', new Endpoint('/canvas/sepia', { query: {
		avatar: { key: 'avatar', required: true }
	}}));
	endpoints.set('/canvas/red', new Endpoint('/canvas/red', { query: {
		avatar: { key: 'avatar', required: true }
	}}));
	endpoints.set('/canvas/green', new Endpoint('/canvas/green', { query: {
		avatar: { key: 'avatar', required: true }
	}}));
	endpoints.set('/canvas/blue', new Endpoint('/canvas/blue', { query: {
		avatar: { key: 'avatar', required: true }
	}}));
	endpoints.set('/canvas/color', new Endpoint('/canvas/color', { query: {
		avatar: { key: 'avatar', required: true },
		color: { key: 'color', required: true }
	}}));
	endpoints.set('/canvas/pixelate', new Endpoint('/canvas/pixelate', { query: {
		avatar: { key: 'avatar', required: true }
	}}));
	endpoints.set('/canvas/youtube-comment', new Endpoint('/canvas/youtube-comment', { query: {
		avatar: { key: 'avatar', required: true }
	}}));
	endpoints.set('/canvas/color-viewer', new Endpoint('/canvas/color-viewer', { query: {
		hex: { key: 'hex', required: true }
	}}));
	endpoints.set('/canvas/hex', new Endpoint('/canvas/hex', { query: {
		rgb: { key: 'rgb', required: true }
	}}));
	endpoints.set('/canvas/rgb', new Endpoint('/canvas/rgb', { query: {
		hex: { key: 'hex', required: true }
	}}));

	// Other
	endpoints.set('/pokedex', new Endpoint('/pokedex', { query: {
		pokemon: { key: 'pokemon', required: true }
	}}));
	endpoints.set('/chatbot', new Endpoint('/chatbot', { cooldown: 4250, query: {
		message: { key: 'message', required: true }
	}}));
	endpoints.set('/mc', new Endpoint('/mc', { query: {
		username: { key: 'username', required: true }
	}}));
	endpoints.set('/lyrics', new Endpoint('/lyrics', { query: {
		title: { key: 'title', required: true }
	}}));
	endpoints.set('/binary', new Endpoint('/binary', { query: {
		text: { key: 'text' }, decode: { key: 'decode' }
	}}));
	endpoints.set('/base64', new Endpoint('/base64', { query: {
		encode: { key: 'encode' }, decode: { key: 'decode' }
	}}));
	endpoints.set('/meme', new Endpoint('/meme'));
	endpoints.set('/bottoken', new Endpoint('/bottoken'));
}