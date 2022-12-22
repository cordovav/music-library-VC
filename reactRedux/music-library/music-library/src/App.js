import './App.css';
import Gallery from './Components/Gallery';
import SearchBar from './Components/SearchBar';
import { useEffect, useState } from 'react'

function App() {
  let [data, setData] = useState([]);
  let [message, setMessage] = useState("Search for Music!");
  let [search, setSearch] = useState('');

  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(()=>{
    if(search) {
      const fetchData = async () => {
      const response = await fetch(API_URL + search)
      const resData = await response.json();
        if (resData.results.length > 0) {
          setData(resData.results);
        } else {
          setMessage("Not Found");
        }
      }
      fetchData();
    }
  },[search]);

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div>
      <SearchBar handleSearch = {handleSearch} />
      {message}
      <DataContext.Provider value = {data}>
      <Gallery />
      </DataContext.Provider>
    </div>
  );
}

export default App;
