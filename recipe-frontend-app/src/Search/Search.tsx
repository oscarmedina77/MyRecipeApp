import s from "./Search.styles";
import {
  AutoComplete,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import React, { useState } from "react";

export const Search = () => {
  const ingredients = [
    "Butter",
    "Sugar",
    "Lemon",
    "Bread",
    "Milk",
    "Tea",
    "Bread Flour",
    "Self-raising Flour",
    "Plain Flour",
    "Broccoli",
    "Tomato",
    "Cheddar Cheese",
    "Beef",
    "Lamb",
    "Pork",
    "Onion",
    "Garlic",
  ];
  const [selectedIngredients, setSelectedIngredients] = useState<String[]>([]);
  const [ingredientSuggestions, setIngredientSuggestions] = useState<String[]>(
    []
  );

  const filterIngredients = function (e: AutoCompleteCompleteEvent) {
    let results = ingredients.filter((ingredient) => {
      return ingredient.toLowerCase().includes(e.query.toLowerCase());
    });
    setIngredientSuggestions(results);
  };

  return (
    <s.SearchBarWrapper>
      <AutoComplete
        multiple
        value={selectedIngredients}
        suggestions={ingredientSuggestions}
        onChange={(e) => setSelectedIngredients(e.value)}
        completeMethod={filterIngredients}
        placeholder={
          selectedIngredients.length === 0
            ? "Search by ingredient..."
            : "Add another ingredient..."
        }
        virtualScrollerOptions={{
          itemSize: 38,
          style: { maxHeight: "160px" },
        }}
      />
      <s.Button>
        <span className="material-symbols-outlined">search</span>
      </s.Button>
    </s.SearchBarWrapper>
  );
};
