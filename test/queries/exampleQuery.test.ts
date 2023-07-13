import { mock } from "jest-mock-extended";
import { CocktailRepository } from "../../src/repositories/cocktailRepository";
import { Cocktail } from "../../src/model/Cocktail";
import { cocktailQuery } from "../../src/queries/cocktailQuery";

const SOME_ID = 1;

describe("ExampleQuery", () => {
  const mockCocktailRepository = mock<CocktailRepository>();

  it("should return the mocked customer using jest-mock-extended", () => {
    const expectedCocktail: Cocktail = { id: SOME_ID, name: "Michael" };
    mockCocktailRepository.getById.mockReturnValue(expectedCocktail);

    const cocktail = cocktailQuery(mockCocktailRepository).getCocktail(SOME_ID);
    expect(cocktail).toEqual(expectedCocktail);
  });
});
