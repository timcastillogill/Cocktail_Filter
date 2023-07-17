import { mock } from "jest-mock-extended";
import { CocktailRepository } from "../../src/repositories/cocktailRepository";
import CocktailQuery from "../../src/queries/cocktailQuery";
import { Cocktail } from "../../src/model/Cocktail";

const SOME_ID = 1;

describe("CocktailQuery", () => {
  const mockCocktailRepository = mock<CocktailRepository>();
  let cocktailQuery: CocktailQuery;

  beforeEach(() => {
    cocktailQuery = new CocktailQuery(mockCocktailRepository);
  });

  describe("getAllMatchingCocktails", () => {
    it("should return the full JSON of the cocktail 'Margarita'", () => {
      const margarita: Promise<object> = Promise.resolve({
        drinks: [
          {
            id: SOME_ID,
            name: "margarita"
          }
        ]
      });
      mockCocktailRepository.getByName.mockReturnValue(margarita);

      expect(cocktailQuery.getAllCocktails("margarita")).toEqual(margarita);
    });
  });

  describe("getOneCocktail", () => {
    it("return the JSON for the first cocktail in the array", () => {
      const margarita: Promise<object> = Promise.resolve({
        drinks: [
          {
            idDrink: SOME_ID,
            strDrink: "Margarita",
            strCategory: "Ordinary Drink",
            strAlcoholic: "Alcoholic",
            strGlass: "Cocktail glass",
            strInstructions:
              "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
            strDrinkThumb:
              "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
            dateModified: "2015-08-18 14:42:59",
            strIngredient1: "Tequila",
            strIngredient2: "Blue Curacao",
            strIngredient3: "Lime juice",
            strIngredient4: "Salt",
            strIngredient5: null,
            strIngredient6: null,
            strIngredient7: null,
            strIngredient8: null,
            strIngredient9: null,
            strIngredient10: null,
            strIngredient11: null,
            strIngredient12: null,
            strIngredient13: null,
            strIngredient14: null,
            strIngredient15: null,
            strMeasure1: "1 1/2 oz ",
            strMeasure2: "1 oz ",
            strMeasure3: "1 oz ",
            strMeasure4: "Coarse ",
            strMeasure5: null,
            strMeasure6: null,
            strMeasure7: null,
            strMeasure8: null,
            strMeasure9: null,
            strMeasure10: null,
            strMeasure11: null,
            strMeasure12: null,
            strMeasure13: null,
            strMeasure14: null,
            strMeasure15: null
          }
        ]
      });

      mockCocktailRepository.getByName.mockReturnValue(margarita);

      const cocktail = cocktailQuery.getCocktail("margarita");
      expect(cocktail).toEqual(margarita);
    });

    test('should return "Cocktail not found" when drinks is null', async () => {
      const mockCocktailRepository = new CocktailRepository();
      jest
        .spyOn(mockCocktailRepository, "getByName")
        .mockResolvedValue({ drinks: null });

      const cocktailQuery = new CocktailQuery(mockCocktailRepository);

      const result = await cocktailQuery.getCocktail("margarita");

      expect(result).toBe("Cocktail not found");
    });
  });
});
