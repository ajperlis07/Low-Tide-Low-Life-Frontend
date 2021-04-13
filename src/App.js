import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import { Route, Switch } from "react-router-dom";
import { useEffect, useState} from 'react';
import RecipeList from "./RecipeList"
import FishList from "./FishList";
import RecipeForm from "./RecipeForm";
import FishSearch from "./FishSearch";

function App() {

  const [fish, setFish] = useState([]);
  const[fishSearchCon, setFishSearchCon] = useState("")

  useEffect(() => {
      fetch('http://localhost:3000/fish')
      .then(res => res.json())
      .then(data => setFish(data))
  },[])

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3000/recipes')
      .then(res => res.json())
      .then(data => setRecipes(data))
  },[])

  function handleNewRecipe(newRecipe) {
    const updatedRecipes = [...recipes, newRecipe]
    setRecipes(updatedRecipes)
  }

 

  return (
    <section className="App"> 
      <Header />
      <NavBar />
      <Switch>
        <Route path="/fish">
          <FishSearch setFishSearchCon={setFishSearchCon}/>
          <FishList fish={fish} fishSearchCon={fishSearchCon}/>
        </Route>
        <Route path="/recipes">
          <RecipeList recipes={recipes} setRecipes={setRecipes}/>
        </Route>
        <Route path="/recipeform">
          <RecipeForm fish={fish}  recipes={recipes} handleNewRecipe={handleNewRecipe}/>
        </Route>
      </Switch>
    </section>
  );
}

export default App;
