import { Cocktail } from "../model/Cocktail";

export class CocktailRepository {
  getByName = async (cocktailName: string): Promise<Cocktail> => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.drinks[0];
    } catch (error) {
      console.error(`Error capturing data for ${cocktailName}: ${error}`);
      throw error;
    }
  };
}
