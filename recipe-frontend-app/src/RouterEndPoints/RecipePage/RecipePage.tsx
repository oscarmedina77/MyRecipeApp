import { Header } from "../../Elements/Header/Header";
import { useParams } from "react-router-dom";

import sampleRecipe from "../../SampleData/sampleRecipe";
import { FullRecipe } from "../../Elements/FullRecipe/FullRecipe";

export const RecipePage = () => {
  const { name, id } = useParams();
  const recipeToDisplay = sampleRecipe.find(
    (recipe) =>
      recipe.id.toString() === id &&
      recipe.name.toLowerCase() === name?.replaceAll("_", " ")
  );
  if (!recipeToDisplay) {
    throw new Response("", { status: 404, statusText: "Not Found" });
  }

  return (
    <>
      <Header />
      <FullRecipe recipe={recipeToDisplay} />
    </>
  );
};
