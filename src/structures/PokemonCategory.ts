import { Category, LinkResponse } from './Category';
import { MissingParameter } from '../util/Errors';

export interface PokedexResponse {
	id: string;
	name: string;
	type: string[];
	species: string[];
	abilities: string[];
	height: string;
	weight: string;
	base_experience: string;
	gender: string[];
	egg_groups: string[];
	stats: {
		hp: string;
		attack: string;
		defense: string;
		sp_atk: string;
		sp_def: string;
		speed: string;
		total: string;
	};
	family: {
		evolutionStage: number;
		evolutionLine: string[];
	};
	sprites: {
		normal: string;
		animated: string;
	};
	description: string;
	generation: string;
}

export class PokemonCategory extends Category {
	public pikachuimg(): Promise<LinkResponse> {
		return this.request('/pikachuimg');
	}

	public pokedex(pokemon: string): Promise<PokedexResponse> {
		if (!pokemon) throw new MissingParameter('pokemon');
		return this.request('/pokedex', { pokemon });
	}
}
