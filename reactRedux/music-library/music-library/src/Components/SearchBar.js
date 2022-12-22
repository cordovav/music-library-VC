import { useState } from 'react';


function SearchBar(props) {
    let [searchTerm, setSearchTerm] = useState('')

    return (
        <from onSubmit={(e) => props.handleSearch(e, searchTerm)}>
            <input type="text" placeholder="Enter a search here" 
            onChange={(e) => setSearchTerm(e.target.value)}/>
            
            <input type="submit"/>

        </from>
    )
}

export default SearchBar;
