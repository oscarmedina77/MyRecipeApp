import s from "./Recipes.styles";
import data from "../../SampleData/sampleRecipe";
import { RecipeCard } from "./RecipeCard/RecipeCard";

export const Recipes = () => {
  const recipes = data;
  return (
    <>
      <s.Title>Recipes</s.Title>
      <s.RecipesWrapper>
        {recipes.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe} />;
        })}
      </s.RecipesWrapper>
    </>
  );
};
