export interface EndpointOptions {
	query: { [key: string]: EndpointQuery };
	cooldown: number;
	premium: boolean;
}

export interface EndpointQuery {
	key: string;
	required?: boolean;
	default?: any;
}

export type Path =

	// Facts
	'/facts/dog'     |
	'/facts/cat'      |
	'/facts/panda'    |
	'/facts/fox'      |
	'/facts/birb'     |
	'/facts/koala'    |
	'/facts/racoon'   |
	'/facts/kangaroo' |
	'/facts/elephant' |
	'/facts/giraffe'  |
	'/facts/whale'    |

	// Images
	'/img/dog'      |
	'/img/cat'      |
	'/img/panda'    |
	'/img/fox'      |
	'/img/birb'     |
	'/img/koala'    |
	'/img/racoon'   |
	'/img/kangaroo' |
	'/img/elephant' |
	'/img/giraffe'  |
	'/img/whale'    |
	'/img/pikachu'  |

	// Animal
	'/animal/dog'     |
	'/animal/cat'      |
	'/animal/panda'    |
	'/animal/fox'      |
	'/animal/birb'     |
	'/animal/koala'    |
	'/animal/racoon'   |
	'/animal/kangaroo' |
	'/animal/elephant' |
	'/animal/giraffe'  |
	'/animal/whale'    |

	// Gif
	'/animu/wink' |
	'/animu/pat'  |
	'/animu/hug'  |

	// Canvas
	'/canvas/gay'             |
	'/canvas/glass'           |
	'/canvas/wasted'          |
	'/canvas/triggered'       |
	'/canvas/greyscale'       |
	'/canvas/invert'          |
	'/canvas/invertgreyscale' |
	'/canvas/brightness'      |
	'/canvas/threshold'       |
	'/canvas/sepia'           |
	'/canvas/red'             |
	'/canvas/green'           |
	'/canvas/blue'            |
	'/canvas/color'           |
	'/canvas/pixelate'        |
	'/canvas/youtube-comment' |
	'/canvas/color-viewer'    |
	'/canvas/hex'             |
	'/canvas/rgb'             |

	// Other
	'/pokedex'  |
	'/chatbot'  |
	'/mc'       |
	'/lyrics'   |
	'/binary'   | // encode & decode
	'/base64'   | // encode & decode
	'/meme'     |
	'/bottoken';

	// Welcome API //TODO: Add support
	// '/welcome/join' |
	// '/welcome/leave';

export class Endpoint {
	public query?: EndpointOptions['query'];
	public cooldown: EndpointOptions['cooldown'];
	public premium: EndpointOptions['premium'];

	public constructor(
		public path: Path,
		options: Partial<EndpointOptions> = {},
	) {
		this.path = path;

		const { query, cooldown = 100, premium = false} = options;
		this.query = query;
		this.cooldown = cooldown;
		this.premium = premium;
	}
}