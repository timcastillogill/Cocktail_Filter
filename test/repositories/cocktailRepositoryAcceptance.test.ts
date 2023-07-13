import { CocktailRepository } from "../../src/repositories/cocktailRepository";

describe("CocktailQuery", () => {
  it("should return complete json with information related to margarita", async () => {
    const cocktailRepository = new CocktailRepository();

    const data = await cocktailRepository.getByName("margarita");
    expect(data).toHaveProperty("drinks");
  });
});
