import { CocktailRepository } from "../repositories/cocktailRepository";

export function cocktailQuery(cocktailRepository: CocktailRepository) {
  return {
    getCocktail: (name: string) => {
      const cocktailData = cocktailRepository.getByName(name);
      if (cocktailData === null) {
        return "Cocktail not found";
      }
      return cocktailData;
    }
  };
}
