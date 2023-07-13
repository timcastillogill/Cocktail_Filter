import { CocktailRepository } from "../repositories/cocktailRepository";

export function cocktailQuery(cocktailRepository: CocktailRepository) {
  return {
    getCocktail: (name: string) => {
      return cocktailRepository.getByName(name);
    }
  };
}
