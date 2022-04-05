import React from "react";
import styles from "./RecipesList.module.scss";

interface Props {
  recipes: { id: number; title: string; sourceUrl: string; image?: string }[];
}

const RecipesList = (props: Props) => {
  const { recipes } = props;

  return (
    <ul className={styles.recipe_list}>
      {recipes.map((recipe) => (
        <li className={styles.recipe_card} key={recipe.id}>
          <a key={recipe.id} href={recipe.sourceUrl} target="_blank">
            <h1>{recipe.title}</h1>
            <img
              className={styles.image}
              alt={recipe.title}
              src={`https://spoonacular.com/recipeImages/${recipe.image}`}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default RecipesList;
