export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  ingredientsAndQuantites: string[];
  timeToCook: number;
  dietary: string[];
  imgURL: string;
  instructions: string[];
}
