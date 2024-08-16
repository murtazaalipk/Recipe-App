import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function ReciepDetail() {
    const { id } = useParams();
    const [recipe,setRecipe] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const response = await (
              await fetch(`https://dummyjson.com/recipes/${id}`)
            ).json();
            setRecipe(response);
          }
          fetchData();
    },[])
    if (!recipe) {
        return <p>Loading...</p>;
      }
   return (
    <div className="recipe-detail">
      <div className="recipe-header">
        <img src={recipe.image} alt={recipe.name} className="recipe-image" />
        <div className="recipe-info">
          <h1>{recipe.name}</h1>
          <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
          <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
          <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins</p>
          <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins</p>
          <p><strong>Servings:</strong> {recipe.servings}</p>
          <p><strong>Calories Per Serving:</strong> {recipe.caloriesPerServing}</p>
          <p><strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>
        </div>
      </div>

      <div className="recipe-tags">
        {recipe.tags && recipe.tags.map((tag, index) => (
          <span key={index} className="recipe-tag">{tag}</span>
        ))}
      </div>

      <div className="recipe-ingredients">
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="recipe-instructions">
        <h2>Instructions</h2>
        <ol>
          {recipe.instructions && recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ReciepDetail;