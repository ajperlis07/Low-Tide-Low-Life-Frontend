import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import { Route, Switch } from "react-router-dom";
import { useEffect, useState} from 'react';
import RecipeList from "./RecipeList"
import FishList from "./FishList";
import RecipeForm from "./RecipeForm";
import FishSearch from "./FishSearch";
import FavoriteRecipe from "./FavoriteRecipe";
import RecipeSearch from "./RecipeSearch"

function App() {

  const [fish, setFish] = useState([]);
  const [fishSearchCon, setFishSearchCon] = useState("")
  const [favorites, setFavorites] = useState([]) 
  const [recipeSearchCon, setRecipeSearchCon] = useState("")

  useEffect(() => {
    fetch('http://localhost:3000/favorites')
    .then(res => res.json())
    .then(data => setFavorites(data))
}, []) 

function handleNewFavorite(newFavorite) {
  const updatedFavorites = [...favorites, newFavorite]
  setFavorites(updatedFavorites)
}

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
          <RecipeSearch setRecipeSearchCon={setRecipeSearchCon}/>
          <RecipeList recipeSearchCon={recipeSearchCon} recipes={recipes} setRecipes={setRecipes} handleNewFavorite={handleNewFavorite}/>
        </Route>
        <Route path="/favorites">
          <FavoriteRecipe favorites={favorites} setFavorites={setFavorites} />
        </Route>
        <Route path="/recipeform">
          <RecipeForm fish={fish}  recipes={recipes} handleNewRecipe={handleNewRecipe}/>
        </Route>
      </Switch>
    </section>
  );
}

export default App;
