import Gallery from './Components/Gallery';
import SearchBar from './Components/SearchBar';
import { Fragment, useEffect, useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { DataContext } from './Content/DataContext';
import AlbumView from './Components/AlbumView';
import ArtistView from './Components/ArtistView';
import './App.css'
import { createResource as fetchData } from './helper';

function App() {
  let [data, setData] = useState(null);
  let [message, setMessage] = useState("Search for Music!");
  let [search, setSearch] = useState('');

  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(()=>{
    if (search) {
      setData(fetchData(search))
    }
  }, [search])
  
  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
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
      {message}
      <Router>
        <Routes>
          <Route path='/' element= {
            <Fragment>
              <SearchBar handleSearch = {handleSearch} />
                {message}
                {renderGallery}
                
            </Fragment>
          }/>
          <Route path='/album/:id' element={<AlbumView/>} />
          <Route path='/artist/:id' element={<ArtistView/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
