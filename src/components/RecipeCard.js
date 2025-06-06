// import { useState } from 'react'; 
 
// function RecipeCard({ recipe, onToggleFavorite, isFavorite }) { 
//   const [showDetails, setShowDetails] = useState(false); 
 
//   return ( 
//     <div className="recipe-card"> 
//       <h3>{recipe.name}</h3> 
//       <div className="recipe-meta"> 
//         <span className="cuisine">{recipe.cuisine}</span> 
//         <span className="difficulty">{recipe.difficulty}</span> 
//         <span className="time">{recipe.cookTime}</span> 
//       </div> 
       
//       <button className="recette" onClick={() => setShowDetails(!showDetails)}> 
//         {showDetails ? 'Masquer Détails' : 'Voir Recette'} 
//       </button> 
       
//       <button  id='c'
//         onClick={() => onToggleFavorite(recipe.id)} 
//         className={isFavorite ? 'favorited' : 'not-favorited'} 
//       > 
//         {isFavorite ? '❤ ' : '🤍'} 
//       </button> 
 
//       {showDetails && ( 
//         <div className="recipe-details"> 
//           <h4>Ingrédients :</h4> 
//           <ul> 
//             {recipe.ingredients.map((ingredient, index) => ( 
//               <li key={index}>{ingredient}</li> 
//             ))} 
//           </ul> 
//           <h4>Instructions :</h4> 
//           <p>{recipe.instructions}</p> 
//         </div> 
//       )} 
//     </div> 
//   ); 
// } 
 
// export default RecipeCard; 

import { useState } from 'react';

function RecipeCard({ recipe, onToggleFavorite, isFavorite, onRateRecipe }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showNutrition, setShowNutrition] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);

  // Fonction pour afficher les étoiles
  const renderStars = (rating, interactive = false) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${interactive ? 'interactive' : ''} ${
            i <= (interactive ? (hoveredStar || userRating) : rating) ? 'filled' : 'empty'
          }`}
          onClick={() => interactive && handleRating(i)}
          onMouseEnter={() => interactive && setHoveredStar(i)}
          onMouseLeave={() => interactive && setHoveredStar(0)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  const handleRating = (rating) => {
    setUserRating(rating);
    onRateRecipe(recipe.id, rating);
  };

  return (
    <div className="recipe-card">
      {/* Image de la recette */}
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.name} />
        <div className="rating-overlay">
          {renderStars(recipe.rating)}
          <span className="rating-text">
            {recipe.rating.toFixed(1)} ({recipe.totalRatings})
          </span>
        </div>
      </div>

      <div className="recipe-content">
        <h3>{recipe.name}</h3>
        
        <div className="recipe-meta">
          <span className="cuisine">{recipe.cuisine}</span>
          <span className="difficulty">{recipe.difficulty}</span>
          <span className="time">{recipe.cookTime}</span>
        </div>

        {/* Barre d'actions */}
        <div className="recipe-actions">
          <button className="recette" onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? 'Masquer Détails' : 'Voir Recette'}
          </button>
          
          <button onClick={() => setShowNutrition(!showNutrition)} className="nutrition-btn">
            🥗 Nutrition
          </button>
          
          <button onClick={() => setShowVideo(!showVideo)} className="video-btn">
            🎥 Vidéo
          </button>
          
          <button  
            id='c'
            onClick={() => onToggleFavorite(recipe.id)}
            className={isFavorite ? 'favorited' : 'not-favorited'}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>

        {/* Section notation utilisateur */}
        <div className="user-rating-section">
          <p>Votre note :</p>
          <div className="user-rating">
            {renderStars(userRating, true)}
          </div>
        </div>

        {/* Informations nutritionnelles */}
        {showNutrition && recipe.nutrition && (
          <div className="nutrition-info">
            <h4>🥗 Informations Nutritionnelles (par portion) :</h4>
            <div className="nutrition-grid">
              <div className="nutrition-item">
                <span className="nutrition-label">Calories:</span>
                <span className="nutrition-value">{recipe.nutrition.calories}</span>
              </div>
              <div className="nutrition-item">
                <span className="nutrition-label">Protéines:</span>
                <span className="nutrition-value">{recipe.nutrition.protein}</span>
              </div>
              <div className="nutrition-item">
                <span className="nutrition-label">Glucides:</span>
                <span className="nutrition-value">{recipe.nutrition.carbs}</span>
              </div>
              <div className="nutrition-item">
                <span className="nutrition-label">Lipides:</span>
                <span className="nutrition-value">{recipe.nutrition.fat}</span>
              </div>
              <div className="nutrition-item">
                <span className="nutrition-label">Fibres:</span>
                <span className="nutrition-value">{recipe.nutrition.fiber}</span>
              </div>
              <div className="nutrition-item">
                <span className="nutrition-label">Sucres:</span>
                <span className="nutrition-value">{recipe.nutrition.sugar}</span>
              </div>
            </div>
          </div>
        )}

        {/* Vidéo de cuisson */}
        {showVideo && recipe.video && (
          <div className="video-section">
            <h4>🎥 Vidéo de cuisson :</h4>
            <div className="video-container">
              <iframe
                src={recipe.video}
                title={`Vidéo de cuisson: ${recipe.name}`}
                frameBorder="0"
                allowFullScreen
                width="100%"
                height="200"
              ></iframe>
            </div>
          </div>
        )}

        {/* Détails de la recette */}
        {showDetails && (
          <div className="recipe-details">
            <h4>🛒 Ingrédients :</h4>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h4>👨‍🍳 Instructions :</h4>
            <p>{recipe.instructions}</p>
            
            <div className="recipe-tags">
              {recipe.tags.map((tag, index) => (
                <span key={index} className="tag">#{tag}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeCard;