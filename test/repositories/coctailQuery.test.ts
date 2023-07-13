import { mock } from "jest-mock-extended";
import { CocktailRepository } from "../../src/repositories/cocktailRepository";
import { Cocktail } from "../../src/model/Cocktail";
import { cocktailQuery } from "../../src/queries/cocktailQuery";

const SOME_ID = 1;

describe("CocktailQuery", () => {
  const mockCocktailRepository = mock<CocktailRepository>();

  it("should return the full JSON of the cocktail 'Margarita'", () => {
    const margarita: Promise<Cocktail> = Promise.resolve({
      id: SOME_ID,
      name: "margarita"
    });
    mockCocktailRepository.getByName.mockReturnValue(margarita);

    const cocktail = cocktailQuery(mockCocktailRepository).getCocktail(
      "margarita"
    );
    expect(cocktail).toEqual(margarita);
  });

  it("should return an error when the cocktail can't be found", () => {
    mockCocktailRepository.getByName;
  });
});
