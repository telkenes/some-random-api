export class MissingParameter extends TypeError {
	constructor(message: string) {
		super(`missing "${message}" parameter`);
	}
}
