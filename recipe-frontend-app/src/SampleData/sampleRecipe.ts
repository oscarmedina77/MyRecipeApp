import { Recipe } from "../Recipe";

export const recipes: Recipe[] = [
  {
    id: 0,
    name: "Homemade Beef Burger",
    ingredients: ["Beef", "Bread Bun"],
    timeToCook: 0.5,
    dietary: [],
    imgURL: "https://illustoon.com/photo/4728.png",
  },
  {
    id: 1,
    name: "Cooked Mushrooms",
    ingredients: ["Mushroom"],
    timeToCook: 0.1,
    dietary: ["vegan", "vegetarian"],
    imgURL:
      "https://static.vecteezy.com/system/resources/previews/013/789/428/original/mushroom-cartoon-drawing-on-white-two-brown-cute-mushrooms-icon-for-design-vector.jpg",
  },
  {
    id: 2,
    name: "Lamb Curry",
    ingredients: ["Lamb", "Onion", "Curry Paste"],
    timeToCook: 6,
    dietary: [],
    imgURL:
      "https://media.istockphoto.com/id/1174317692/vector/vindaloo-indian-food-icon.jpg?s=612x612&w=0&k=20&c=8ZQpKGP3JjCNSOS2hTdfWnzWB8K1eZPy99c7ckeKJ0g=",
  },
];

export default recipes;
