import { CocktailRepository } from "../repositories/cocktailRepository";

export function cocktailQuery(cocktailRepository: CocktailRepository) {
  return {
    getCocktail: (id: number) => {
      return cocktailRepository.getById(id);
    }
  };
}
