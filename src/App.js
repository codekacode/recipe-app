import React, {useEffect, useState} from "react"; 
import Recipie from './Recipie'
import './App.css';

const App = () => {
  const APP_ID = "156c89d6";
  const APP_KEY = "1888f37e9bf20b7c4496f1201eb4f73d";

  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipies(data.hits);
    console.log(data.hits);

  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="app">
      <form onSubmit={getSearch} action="" className="search__form">
        <input type="text" className="search__bar" value={search} onChange={updateSearch} />
        <button type="submit" className="search__btn">Search</button>
      </form>
      {recipies.map(recipie => (
        <Recipie 
          key={recipie.recipe.label}
          title={recipie.recipe.label} 
          calories={recipie.recipe.calories} 
          image={recipie.recipe.image}
          ingredients={recipie.recipe.ingredients}
        />
      ))}
    </div>
  );
};


export default App;
