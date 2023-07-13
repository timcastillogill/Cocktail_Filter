import { Cocktail } from "../model/Cocktail";

export class CocktailRepository {
  getById = (id: number): Cocktail => {
    return { id, name: "James" };
  };
}
