//There components will be making separate API calls from the app
// compnent to serve specific data about artist
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ArtistView() {
    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])

    return (
        <div>
            <h2>The id we passed was: {id}</h2>
            <p>Artist Data Goes Here!</p>
        </div>
    )
}

export default ArtistView