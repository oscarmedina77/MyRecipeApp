export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  timeToCook: number;
  dietary: string[];
  imgURL: string;
}
