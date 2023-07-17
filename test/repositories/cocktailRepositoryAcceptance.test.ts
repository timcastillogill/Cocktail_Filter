import { CocktailRepository } from "../../src/repositories/cocktailRepository";

describe("CocktailQuery", () => {
  it("should return complete json with information related to margarita", async () => {
    const cocktailRepository = new CocktailRepository();

    const data = await cocktailRepository.getByName("margarita");

    expect(hasStrDrinkProperty(data)).toBeTruthy;
  });

  function hasStrDrinkProperty(obj: any): boolean {
    return obj && typeof obj === "object" && "strDrink" in obj;
  }
});
