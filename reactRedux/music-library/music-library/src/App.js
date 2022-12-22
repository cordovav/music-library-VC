import './App.css';
import Gallery from './Components/Gallery';
import SearchBar from './Components/SearchBar';
import { useEffect, useState } from 'react'

function App() {
  let [data, setData] = useState([]);
  let [message, setMessage] = useState("Search for Music!");
  useEffect(()=>{
    const fetchDate = async () => {
      const response = await fetch(
        `https://itunes.apple.com/search?term=the%20grateful%20dead
        `);
        const resData = await response.json();
        if (resData.results.length > 0) {
          setData(resData.results);
        } else {
          setMessage("Not Found");
        }


    }
  })
  return (
    <div className="App">
      <h1>Music App</h1>
      <SearchBar />
      <Gallery />
    </div>
  );
}

export default App;
