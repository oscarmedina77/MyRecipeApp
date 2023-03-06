import { Recipe } from "../../../Recipe";
import s from "./RecipeCard.styles";

interface Props {
  recipe: Recipe;
}

export const RecipeCard: React.FC<Props> = ({ recipe }) => {
  const nameForLink = recipe.name.replaceAll(" ", "_").toLowerCase();
  return (
    <a href={`/recipe/${nameForLink}/${recipe.id}`}>
      <s.RecipeCardWrapper className="recipeCardWrapper">
        <s.ImageWrapper>
          <s.Image src={recipe.imgURL} alt={recipe.name} />
        </s.ImageWrapper>
        <s.RecipeName>{recipe.name}</s.RecipeName>
        <s.TimeWrapper>
          <s.ClockIcon className="material-symbols-outlined">
            schedule
          </s.ClockIcon>
          <s.TimeTaken>
            {recipe.timeToCook > 1
              ? `${Math.round(recipe.timeToCook)} hours`
              : `${Math.round(recipe.timeToCook * 60)} mins`}
          </s.TimeTaken>
        </s.TimeWrapper>
      </s.RecipeCardWrapper>
    </a>
  );
};
