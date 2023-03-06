import "./App.css";
import { Header } from "./Header/Header";
import { Recipes } from "./Recipes/Recipes";
import { Search } from "./Search/Search";

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
