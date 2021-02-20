import React, {useEffect, useState} from "react"; 
import './App.css';

const App = () => {
  const APP_ID = "156c89d6";
  const APP_KEY = "1888f37e9bf20b7c4496f1201eb4f73d";

  const [recipies, setRecipies] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipies(data.hits);

  }

  return (
    <div className="app">
      <form action="" className="search__form">
        <input type="text" className="search__bar"/>
        <button type="submit" className="search__btn">Search</button>
      </form>
    </div>
  );
};


export default App;
