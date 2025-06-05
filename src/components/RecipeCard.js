import { useState } from 'react'; 
 
function RecipeCard({ recipe, onToggleFavorite, isFavorite }) { 
  const [showDetails, setShowDetails] = useState(false); 
 
  return ( 
    <div className="recipe-card"> 
      <h3>{recipe.name}</h3> 
      <div className="recipe-meta"> 
        <span className="cuisine">{recipe.cuisine}</span> 
        <span className="difficulty">{recipe.difficulty}</span> 
        <span className="time">{recipe.cookTime}</span> 
      </div> 
       
      <button className="recette" onClick={() => setShowDetails(!showDetails)}> 
        {showDetails ? 'Masquer Détails' : 'Voir Recette'} 
      </button> 
       
      <button  id='c'
        onClick={() => onToggleFavorite(recipe.id)} 
        className={isFavorite ? 'favorited' : 'not-favorited'} 
      > 
        {isFavorite ? '❤ ' : '🤍'} 
      </button> 
 
      {showDetails && ( 
        <div className="recipe-details"> 
          <h4>Ingrédients :</h4> 
          <ul> 
            {recipe.ingredients.map((ingredient, index) => ( 
              <li key={index}>{ingredient}</li> 
            ))} 
          </ul> 
          <h4>Instructions :</h4> 
          <p>{recipe.instructions}</p> 
        </div> 
      )} 
    </div> 
  ); 
} 
 
export default RecipeCard; 