export class MissingParameter extends TypeError {
	constructor(message: string) {
		super(`missing "${message}" parameter`);
	}
}

export class EndpointNotExist extends TypeError {
	constructor(path: string) {
		super(`Endpoint "${path}" does not exist`);
	}
}

export class PremiumNeeded extends Error {
	constructor(path: string) {
		super(`Premium needed for path: ${path}`);
	}
}
