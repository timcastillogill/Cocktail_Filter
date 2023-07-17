export class CocktailRepository implements IGetCocktail {
  getByName = async (cocktailName: string): Promise<object> => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      return data.drinks;
    } catch (error) {
      console.error(`Error capturing data for ${cocktailName}: ${error}`);
      throw Error;
    }
  };
}
