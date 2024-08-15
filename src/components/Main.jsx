import React, { useEffect, useState } from "react";
import RecipeCart from "./RecipeCart";





function Main(props) {
   
    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const response = await (await fetch("https://dummyjson.com/recipes")).json()
            setRecipes(response.recipes);
        }
        fetchData();

    },[]);
    
    console.log(recipes)

  return (
    < >
    <div className="cart-container">
        {recipes.map((recipe)=>(
            <RecipeCart key={recipe.id} name={recipe.name} image={recipe.image} />
        ))}
    </div>
    </>
  )  
}

export default Main;