import React, { useState } from "react";
import axios from "axios";
import RecipeForm from "../components/Recipes/RecipesForm";
import RecipeList from "../components/Recipes/RecipesList";

interface Props {}

const Recipes = (props: Props) => {
  const [recipes, setRecipes] = useState([]);

  const HandleInputForm = (query: string) => {
    const APIKEY = "42e984727d3a4a70a8bb66a089443c57";

    axios
      .get(
        `https://api.spoonacular.com/recipes/search?apiKey=${APIKEY}&number=15&query=${encodeURI(
          query
        )}`
      )
      .then((response) => {
        setRecipes(response.data.results);
      });
  };

  return (
    <div>
      <h1>Recipes</h1>
      <RecipeForm onInputChange={HandleInputForm} />
      {console.log(recipes)}
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Recipes;
