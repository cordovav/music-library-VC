import Gallery from './Components/Gallery';
import SearchBar from './Components/SearchBar';
import { useEffect, useState, Suspense } from 'react'
//import { DataContext } from './Context/DataContext';
import './App.css'
import { createResource as fetchData } from './helper'
import Spinner from './Spinner';

function App() {
  let [data, setData] = useState(null);
  let [message] = useState("Search for Music!");
  let [searchTerm, setSearchTerm] = useState('');

//  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(()=>{
    if (searchTerm) {
      document.title=`${setSearchTerm} Music`
      console.log(fetchData(searchTerm))
      setData(fetchData(searchTerm))
    }
  }, [searchTerm]);

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearchTerm(term)
  }

  const renderGallery = () => {
    if(data){
        return (
            <Suspense fallback={<Spinner />} >
                <Gallery data={data} />
            </Suspense>
        )
    }
  }

  return (
    <div className='App'>
      <SearchBar handleSearch = {handleSearch} />
      {message}
      {renderGallery()}
    </div>
  );
}

export default App;
