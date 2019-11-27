import { FactsCategory } from './FactsCategory';
import { ImagesCategory } from './ImagesCategory';
import { PokemonCategory } from './PokemonCategory';
import { AnimuCategory } from './AnimuCategory';
import { OtherCategory } from './OtherCategory';
import { WelcomeCategory } from './WelcomeCategory';

export const api = {
	facts: new FactsCategory(),
	img: new ImagesCategory(),
	pokemon: new PokemonCategory(),
	animu: new AnimuCategory(),
	other: new OtherCategory(),
	welcome: new WelcomeCategory()
};
