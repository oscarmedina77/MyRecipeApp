import "./App.css";
import { Header } from "../../Elements/Header/Header";
import { Recipes } from "../../Elements/RecipesList/Recipes";
import { Search } from "../../Elements/Search/Search";

function App() {
  return (
    <>
      <Header />
      <Search />
      <Recipes />
    </>
  );
}

export default App;
