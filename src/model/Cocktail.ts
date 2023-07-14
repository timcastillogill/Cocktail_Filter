export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  dateModified: string;
  [key: string]: string;
}

export interface Ingredient {
  ingredientName: string;
  ingredientMeasure: string;
}

export interface ReturnCocktail {
  id: string;
  name: string;
  category: string;
  alcoholic: string;
  glass: string;
  instructions: string;
  thumbnail: string;
  ingredients: Ingredient[];
  dateModified: string;
}
