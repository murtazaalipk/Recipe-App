import React, { useEffect, useState } from "react";
import RecipeCart from "./RecipeCart";
import { Link } from "react-router-dom";
function Main(props) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await (
        await fetch("https://dummyjson.com/recipes")
      ).json();
      setRecipes(response.recipes);
    }
    fetchData();
  }, []);

  console.log(recipes);

  return (
    <>
      <div className="cart-container">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`}>
            <RecipeCart
              key={recipe.id}
              name={recipe.name}
              image={recipe.image}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Main;
