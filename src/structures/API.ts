import { FactsCategory } from './FactsCategory';
import { ImagesCategory } from './ImagesCategory';
import { PokemonCategory } from './PokemonCategory';
import { AnimuCategory } from './AnimuCategory';
import { OtherCategory } from './OtherCategory';
import { WelcomeCategory } from './WelcomeCategory';

/**
 * Main API
 */
export const api = {
	/**
	 * facts endpoints
	 */
	facts: new FactsCategory(),

	/**
	 * images endpoints
	 */
	img: new ImagesCategory(),

	/**
	 * pokemon endpoints
	 */
	pokemon: new PokemonCategory(),

	/**
	 * animu endpoints
	 */
	animu: new AnimuCategory(),

	/**
	 * other endpoints
	 */
	other: new OtherCategory(),

	/**
	 * welcome endpoints
	 */
	welcome: new WelcomeCategory()
};
