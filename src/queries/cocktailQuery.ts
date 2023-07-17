import { CocktailRepository } from "../repositories/cocktailRepository";
import { Cocktail, ReturnCocktail } from "../model/Cocktail";

class CocktailQuery {
  cocktailRepository: CocktailRepository;
  allMatchingCocktails: Cocktail[] | object;

  constructor(cocktailRepository: CocktailRepository) {
    this.cocktailRepository = cocktailRepository;
    this.allMatchingCocktails = { drinks: [] };
  }

  async getAllCocktails(name: string) {
    this.allMatchingCocktails = await this.cocktailRepository.getByName(name);
  }

  async getCocktail(name: string) {
    await this.getAllCocktails(name);

    if (
      this.allMatchingCocktails === null ||
      !Array.isArray(this.allMatchingCocktails)
    ) {
      return "Cocktail not found";
    }

    const firstCocktail = (
      this.allMatchingCocktails as unknown as { drinks: Cocktail[] }
    ).drinks[0];

    const returnCocktailJSON: ReturnCocktail =
      this.createCocktailJSON(firstCocktail);
    return returnCocktailJSON;
  }

  private createCocktailJSON(firstCocktail: Cocktail) {
    const returnCocktailJSON: ReturnCocktail = {
      id: firstCocktail.idDrink,
      name: firstCocktail.strDrink,
      category: firstCocktail.strCategory,
      alcoholic: firstCocktail.strAlcoholic,
      glass: firstCocktail.strGlass,
      instructions: firstCocktail.strInstructions,
      thumbnail: firstCocktail.strDrinkThumb,
      ingredients: [],
      dateModified: firstCocktail.dateModified
    };

    for (let index = 1; index < 15; index++) {
      const ingredientKey = `strIngredient${index}`;
      const measureKey = `strMeasure${index}`;

      const ingredientName = firstCocktail[ingredientKey];
      const ingredientMeasure = firstCocktail[measureKey];

      if (ingredientName && ingredientMeasure) {
        returnCocktailJSON.ingredients.push({
          ingredientName: ingredientName,
          ingredientMeasure: ingredientMeasure
        });
      }
    }
    return returnCocktailJSON;
  }
}
export default CocktailQuery;
