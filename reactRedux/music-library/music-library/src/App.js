import Gallery from './Components/Gallery';
import SearchBar from './Components/SearchBar';
import AlbumView from './Components/AlbumView';
import ArtistView from './Components/ArtistView';
import { useRef, useState, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DataContext from './Context/DataContext'
import { SearchContext } from './Context/SearchContext';
import './App.css'
import { createResource as fetchData } from './helper';
import Spinner from './Spinner';

function App() {
let searchInput = useRef('')
let [data, setData] = useState(null)
let [message, setMessage] = useState('Search For Music')

 // const API_URL = 'https://itunes.apple.com/search?term='

  
  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(fetchData(term, 'main'))
  }

  const renderGallery = () => {
    if(data){
        return (
            <Suspense fallback={<Spinner />} >
                <Gallery />
            </Suspense>
        )
    }
  }


  return (
    <div className='App'>      
      {message}
      <Router>
        
          <Route exact path={'/'}>
            <SearchContext.Provider value={{term: searchInput, handleSearch: handleSearch}}>
              <SearchBar/>
              </SearchContext.Provider>
              <DataContext.Provider value={data}>
              {renderGallery}
              </DataContext.Provider>                
            </Route>
          
          <Route path='/album/:id'>
          <AlbumView/>
            </Route> 
          <Route path='/artist/:id'>
          <ArtistView/>
          </Route>
      </Router>
    </div>
  );
}

export default App;
