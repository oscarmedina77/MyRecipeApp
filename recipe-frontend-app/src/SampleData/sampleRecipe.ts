import { Recipe } from "../Recipe";

export const recipes: Recipe[] = [
  {
    id: 0,
    name: "Homemade Beef Burger",
    ingredients: ["Beef Mince", "Bread Bun", "Tomato", "Lettuce"],
    ingredientsAndQuantites: [
      "500g Beef Mince",
      "4 Bread Buns",
      "1 Tomato",
      "4 Lettuce Leaves",
    ],
    timeToCook: 0.5,
    dietary: [],
    imgURL: "https://illustoon.com/photo/4728.png",
    instructions: [
      "Press balls of mince into circular patties",
      "Place patty into frying pan and leave until browned",
      "Place patty into bread bun, placing lettuce and slice of tomato on top",
    ],
  },
  {
    id: 1,
    name: "Cooked Mushrooms",
    ingredients: ["Mushroom", "Oil"],
    ingredientsAndQuantites: ["150g Mushrooms", "1 tsp Oil"],
    timeToCook: 0.1,
    dietary: ["vegan", "vegetarian"],
    imgURL:
      "https://static.vecteezy.com/system/resources/previews/013/789/428/original/mushroom-cartoon-drawing-on-white-two-brown-cute-mushrooms-icon-for-design-vector.jpg",
    instructions: ["Cut mushrooms", "Fry"],
  },
  {
    id: 2,
    name: "Lamb Curry",
    ingredients: ["Lamb", "Onion", "Curry Paste"],
    ingredientsAndQuantites: [
      "thumb-sized piece ginger, ½ cut into matchsticks, the rest left whole",
      "2 onions, quartered",
      "4 garlic cloves",
      "2 tbsp rapeseed oil",
      " 1 cinnamon stick",
      "1 tsp ground coriander",
      "1 tsp ground cumin",
      "1 tsp ground tumeric",
      "1/2 tsp fennel seeds",
      "750g leg of lamb, diced",
      "400g can chopped tomatoes",
      "1 red chilli",
      "small bunch coriander, stalks finely chopped, leaves roughly chopped",
      "basmati rice and mango chutney or raita, to serve",
    ],
    timeToCook: 1.83333,
    dietary: ["gluten-free"],
    imgURL:
      "https://media.istockphoto.com/id/1174317692/vector/vindaloo-indian-food-icon.jpg?s=612x612&w=0&k=20&c=8ZQpKGP3JjCNSOS2hTdfWnzWB8K1eZPy99c7ckeKJ0g=",
    instructions: [
      "Put ½ the thumb-sized piece of ginger, 2 quartered onions and 4 garlic cloves in a food processor with 300ml water. Blitz to a smooth purée.",
      "Scrape down the sides with a spoon and blitz again to make it as smooth as you can. Tip into a deep sauté pan, cover with a lid and simmer for 15 mins.",
      "Remove the lid and cook for 5 mins more, stirring occasionally. By now the liquid should be all gone. If not, cook a little longer.",
      "Add 2 tbsp rapeseed oil to the pan with the remaining piece of ginger, cut into matchsticks. Turn up the heat and fry, stirring, for 3-5 mins until it starts to colour.",
      "Stir in 1 cinnamon stick, 1 tbsp ground coriander, 1 tsp ground cumin, 1 tsp ground turmeric and ½ tsp fennel seeds, then add 750g leg of lamb. Stir-fry until the lamb changes colour.",
      "Tip in 400g can chopped tomatoes with a can of water and 1 deseeded and sliced red or green chilli, season well, cover and leave to simmer for 1 hr.",
      "Stir in the finely chopped stalks from a small bunch coriander, re-cover and cook for a final 30 mins until the lamb is tender. Add a splash of water if necessary to loosen the consistency as it cooks.",
      "Stir in the roughly chopped coriander leaves and serve with basmati rice and mango chutney or raita.",
    ],
  },
];

export default recipes;
