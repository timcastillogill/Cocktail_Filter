interface IGetCocktail {
  getByName(cocktailName: string): Promise<object>;
}
