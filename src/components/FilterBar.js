function FilterBar({ searchTerm, setSearchTerm, selectedCuisine, setSelectedCuisine, 
cuisines }) { 
  return ( 
    <div className="filter-bar"> 
      <input 
        type="text" 
        placeholder="Rechercher des recettes..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      /> 
       
      <select value={selectedCuisine} onChange={(e) => setSelectedCuisine(e.target.value)}> 
        <option value="">Toutes les Cuisines</option> 
        {cuisines.map(cuisine => ( 
          <option key={cuisine} value={cuisine}>{cuisine}</option> 
        ))} 
</select> 
</div> 
); 
} 
export default FilterBar;