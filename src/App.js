// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from 'react'; 
import { recipes } from './data/recipes'; 
import RecipeCard from './components/RecipeCard'; 
import FilterBar from './components/FilterBar'; 
import './App.css'; 
function App() { 
  const today = new Date().toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
const [searchTerm, setSearchTerm] = useState('');
const [selectedCuisine, setSelectedCuisine] = useState(''); 
const [favorites, setFavorites] = useState([]); 
const [showFavoritesOnly, setShowFavoritesOnly] = useState(false); 
// Obtenir les cuisines uniques 
const cuisines = [...new Set(recipes.map(recipe => recipe.cuisine))]; 
// Filtrer les recettes 
const filteredRecipes = recipes.filter(recipe => { 
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) 
|| 
                         recipe.ingredients.some(ingredient =>  
                           ingredient.toLowerCase().includes(searchTerm.toLowerCase()) 
                         ); 
    const matchesCuisine = selectedCuisine === '' || recipe.cuisine === selectedCuisine; 
    const matchesFavorites = !showFavoritesOnly || favorites.includes(recipe.id); 
    
     
    return matchesSearch && matchesCuisine && matchesFavorites; 
  }); 
 
  // Basculer favori 
  const toggleFavorite = (recipeId) => { 
    setFavorites(prev =>  
      prev.includes(recipeId)  
        ? prev.filter(id => id !== recipeId) 
        : [...prev, recipeId] 
    ); 
  }; 
 
  // Mettre à jour le titre du document 
  useEffect(() => { 
    document.title = `Ma Collection de Recettes (${filteredRecipes.length} recettes)`; 
  }, [filteredRecipes.length]); 
 
  return ( 
    <div className="App"> 
      <header> 
        <h1>
 🍳
 Ma Collection de Recettes</h1> 
        <p>Des recettes de ma cuisine à la vôtre !</p> 
      </header> 
 
      <div className="controls"> 
        <FilterBar  
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          selectedCuisine={selectedCuisine} 
          setSelectedCuisine={setSelectedCuisine} 
          cuisines={cuisines} 
        /> 
         
        <button  id='bt'
          onClick={() => setShowFavoritesOnly(!showFavoritesOnly)} 
          className={showFavoritesOnly ? 'active' : ''} 
        > 
          {showFavoritesOnly ? 'Voir Tout' : 'Favoris Seulement'} 
        </button> 
      </div> 
 
      <div className="recipe-grid"> 
        {filteredRecipes.map(recipe => ( 
          <RecipeCard  
            key={recipe.id} 
            recipe={recipe} 
            onToggleFavorite={toggleFavorite} 
            isFavorite={favorites.includes(recipe.id)} 
          /> 
        ))} 
      </div> 
 
      {filteredRecipes.length === 0 && ( 
        <p className="no-results">Aucune recette trouvée. Essayez d'ajuster votre recherche 
!</p> 
      )} 

       <footer className="footer">
        <p>Créé le {today}</p>
      </footer>
    </div> 

  
);
} 

 
export default App; 