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

// import { useState, useEffect } from 'react'; 
// import { recipes } from './data/recipes'; 
// import RecipeCard from './components/RecipeCard'; 
// import FilterBar from './components/FilterBar'; 
// import './App.css'; 
// function App() { 
//   const today = new Date().toLocaleDateString('fr-FR', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   });
// const [searchTerm, setSearchTerm] = useState('');
// const [selectedCuisine, setSelectedCuisine] = useState(''); 
// const [favorites, setFavorites] = useState([]); 
// const [showFavoritesOnly, setShowFavoritesOnly] = useState(false); 
// // Obtenir les cuisines uniques 
// const cuisines = [...new Set(recipes.map(recipe => recipe.cuisine))]; 
// // Filtrer les recettes 
// const filteredRecipes = recipes.filter(recipe => { 
//     const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) 
// || 
//                          recipe.ingredients.some(ingredient =>  
//                            ingredient.toLowerCase().includes(searchTerm.toLowerCase()) 
//                          ); 
//     const matchesCuisine = selectedCuisine === '' || recipe.cuisine === selectedCuisine; 
//     const matchesFavorites = !showFavoritesOnly || favorites.includes(recipe.id); 
    
     
//     return matchesSearch && matchesCuisine && matchesFavorites; 
//   }); 
 
//   // Basculer favori 
//   const toggleFavorite = (recipeId) => { 
//     setFavorites(prev =>  
//       prev.includes(recipeId)  
//         ? prev.filter(id => id !== recipeId) 
//         : [...prev, recipeId] 
//     ); 
//   }; 
 
//   // Mettre à jour le titre du document 
//   useEffect(() => { 
//     document.title = `Ma Collection de Recettes (${filteredRecipes.length} recettes)`; 
//   }, [filteredRecipes.length]); 
 
//   return ( 
//     <div className="App"> 
//       <header> 
//         <h1>
//  🍳
//  Ma Collection de Recettes</h1> 
//         <p>Des recettes de ma cuisine à la vôtre !</p> 
//       </header> 
 
//       <div className="controls"> 
//         <FilterBar  
//           searchTerm={searchTerm} 
//           setSearchTerm={setSearchTerm} 
//           selectedCuisine={selectedCuisine} 
//           setSelectedCuisine={setSelectedCuisine} 
//           cuisines={cuisines} 
//         /> 
         
//         <button  id='bt'
//           onClick={() => setShowFavoritesOnly(!showFavoritesOnly)} 
//           className={showFavoritesOnly ? 'active' : ''} 
//         > 
//           {showFavoritesOnly ? 'Voir Tout' : 'Favoris Seulement'} 
//         </button> 
//       </div> 
 
//       <div className="recipe-grid"> 
//         {filteredRecipes.map(recipe => ( 
//           <RecipeCard  
//             key={recipe.id} 
//             recipe={recipe} 
//             onToggleFavorite={toggleFavorite} 
//             isFavorite={favorites.includes(recipe.id)} 
//           /> 
//         ))} 
//       </div> 
 
//       {filteredRecipes.length === 0 && ( 
//         <p className="no-results">Aucune recette trouvée. Essayez d'ajuster votre recherche 
// !</p> 
//       )} 

//        <footer className="footer">
//         <p>Créé le {today}</p>
//       </footer>
//     </div> 

  
// );
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
  const [userRatings, setUserRatings] = useState({});
  const [sortBy, setSortBy] = useState('name'); // 'name', 'rating', 'difficulty', 'cookTime'
  
  // Obtenir les cuisines uniques  
  const cuisines = [...new Set(recipes.map(recipe => recipe.cuisine))];  
  
  // Filtrer les recettes  
  const filteredRecipes = recipes.filter(recipe => {      
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||                           
                         recipe.ingredients.some(ingredient =>                              
                           ingredient.toLowerCase().includes(searchTerm.toLowerCase())                           
                         );      
    const matchesCuisine = selectedCuisine === '' || recipe.cuisine === selectedCuisine;      
    const matchesFavorites = !showFavoritesOnly || favorites.includes(recipe.id);                 
    return matchesSearch && matchesCuisine && matchesFavorites;    
  });

  // Trier les recettes
  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    switch(sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'difficulty':
        const difficultyOrder = { 'Facile': 1, 'Moyen': 2, 'Difficile': 3 };
        return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
      case 'cookTime':
        // Extraire les minutes pour le tri
        const getMinutes = (time) => {
          const match = time.match(/(\d+)h?\s*(\d+)?/);
          if (match) {
            const hours = match[1] ? parseInt(match[1]) : 0;
            const minutes = match[2] ? parseInt(match[2]) : 0;
            return hours * 60 + minutes;
          }
          return parseInt(time) || 0;
        };
        return getMinutes(a.cookTime) - getMinutes(b.cookTime);
      default:
        return a.name.localeCompare(b.name);
    }
  });
      
  // Basculer favori    
  const toggleFavorite = (recipeId) => {      
    setFavorites(prev =>         
      prev.includes(recipeId)           
        ? prev.filter(id => id !== recipeId)          
        : [...prev, recipeId]      
    );    
  };

  // Gérer les notes utilisateur
  const handleRateRecipe = (recipeId, rating) => {
    setUserRatings(prev => ({
      ...prev,
      [recipeId]: rating
    }));
  };

  // Calculer les statistiques
  const stats = {
    total: recipes.length,
    favorites: favorites.length,
    averageRating: (recipes.reduce((sum, recipe) => sum + recipe.rating, 0) / recipes.length).toFixed(1),
    totalRatings: recipes.reduce((sum, recipe) => sum + recipe.totalRatings, 0)
  };
      
  // Mettre à jour le titre du document    
  useEffect(() => {      
    document.title = `Ma Collection de Recettes (${sortedRecipes.length} recettes)`;    
  }, [sortedRecipes.length]);      
      
  return (      
    <div className="App">        
      <header>          
        <h1>🍳 Ma Collection de Recettes</h1>          
        <p>Des recettes de ma cuisine à la vôtre !</p>
        
        {/* Statistiques */}
        <div className="stats">
          <div className="stat-item">
            <span className="stat-number">{stats.total}</span>
            <span className="stat-label">Recettes</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.favorites}</span>
            <span className="stat-label">Favoris</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.averageRating}★</span>
            <span className="stat-label">Note Moyenne</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{stats.totalRatings}</span>
            <span className="stat-label">Évaluations</span>
          </div>
        </div>
      </header>          
        
      <div className="controls">          
        <FilterBar             
          searchTerm={searchTerm}            
          setSearchTerm={setSearchTerm}            
          selectedCuisine={selectedCuisine}            
          setSelectedCuisine={setSelectedCuisine}            
          cuisines={cuisines}          
        />                    
        
        {/* Tri */}
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          className="sort-select"
        >
          <option value="name">Trier par Nom</option>
          <option value="rating">Trier par Note</option>
          <option value="difficulty">Trier par Difficulté</option>
          <option value="cookTime">Trier par Temps</option>
        </select>

        <button  
          id='bt'           
          onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}            
          className={showFavoritesOnly ? 'active' : ''}          
        >            
          {showFavoritesOnly ? 'Voir Tout' : 'Favoris Seulement'}          
        </button>        
      </div>          
        
      <div className="recipe-grid">          
        {sortedRecipes.map(recipe => (            
          <RecipeCard               
            key={recipe.id}              
            recipe={recipe}              
            onToggleFavorite={toggleFavorite}              
            isFavorite={favorites.includes(recipe.id)}
            onRateRecipe={handleRateRecipe}
            userRating={userRatings[recipe.id] || 0}
          />          
        ))}        
      </div>          
        
      {sortedRecipes.length === 0 && (          
        <div className="no-results">
          <p>Aucune recette trouvée. Essayez d'ajuster votre recherche !</p>
        </div>        
      )}          
        
      <footer className="footer">         
        <p>Créé le {today}</p>
        <p>Collection de {stats.total} recettes • {stats.totalRatings} évaluations</p>       
      </footer>     
    </div>      
  ); 
}     

export default App;