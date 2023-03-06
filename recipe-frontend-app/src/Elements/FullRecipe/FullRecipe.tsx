import { useState } from "react";
import { Recipe } from "../../Recipe";
import s from "./FullRecipe.styles";

interface Props {
  recipe: Recipe;
}

export const FullRecipe: React.FC<Props> = ({ recipe }) => {
  const [showIngredients, setShowIngredients] = useState<boolean>(true);

  const handleIngredientsShown = () => {
    if (!showIngredients) {
      setShowIngredients(true);
    }
  };
  const handleInstructionsShown = () => {
    if (showIngredients) {
      setShowIngredients(false);
    }
  };

  return (
    <s.RecipeWrapper>
      <s.InfoAndImageWrapper>
        <s.ImageWrapper>
          <s.Image src={recipe.imgURL} alt={recipe.name} />
        </s.ImageWrapper>
        <s.InfoWrapper>
          <s.RecipeTitle>{recipe.name}</s.RecipeTitle>
          <s.TimeWrapper>
            <s.ClockIcon className="material-symbols-outlined">
              schedule
            </s.ClockIcon>
            <s.TimeToCook>
              {recipe.timeToCook > 1
                ? `${Math.round(recipe.timeToCook)} hours`
                : `${Math.round(recipe.timeToCook * 60)} mins`}
            </s.TimeToCook>
          </s.TimeWrapper>
          <s.DietaryWrapper>
            {recipe.dietary.map((dietary) => {
              return <s.DietaryInfo key={dietary}>{dietary}</s.DietaryInfo>;
            })}
          </s.DietaryWrapper>
        </s.InfoWrapper>
      </s.InfoAndImageWrapper>

      <s.NavBar>
        <s.NavBarButton onClick={handleIngredientsShown}>
          Ingredients
        </s.NavBarButton>
        <s.NavBarButton onClick={handleInstructionsShown}>
          Method
        </s.NavBarButton>
      </s.NavBar>
      {showIngredients ? (
        <s.ListWrapper>
          {recipe.ingredientsAndQuantites.map((ingredient) => {
            return <s.Ingredient key={ingredient}>{ingredient}</s.Ingredient>;
          })}
        </s.ListWrapper>
      ) : (
        <s.ListWrapper>
          {recipe.instructions.map((instruction) => {
            return (
              <s.Step key={instruction}>
                <s.StepNumber>
                  Step {recipe.instructions.indexOf(instruction) + 1}
                </s.StepNumber>
                <s.Instruction>{instruction}</s.Instruction>
              </s.Step>
            );
          })}
        </s.ListWrapper>
      )}
    </s.RecipeWrapper>
  );
};
