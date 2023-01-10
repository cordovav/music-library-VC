//these compnents will be making seperate API calls from the app
// component to serve specific data about a given album
import Spinner from '../Spinner'
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

function AlbumView() {
    const history = useHistory()
    const { id } = useParams()
    const [ albumData, setAlbumData ] = useState([])

    useEffect(() => {
        const API_URL = `http://localhost:4000/song/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setAlbumData(resData.results)
        }
        fetchData()
    },[id])

    const allSongs = albumData.filter(entity => entity.kind === 'song').map((album, i ) => {
        return (
            <div key={i}>
                <p>{album.trackName}</p>
            </div>
        )
    })

    const navButtons = () => {
        return (
            <div>
                <button onClick={()=> {history.push('/')}}>Home</button>
                |
                <button onClick={()=> {history.goBack()}}>Back</button>
            </div>
        )
    }

    return (
        <div>
            {albumData.length > 0 ? <h2>{albumData[0].collectionName}</h2> : <Spinner />}
            {navButtons()}
            {allSongs}
        </div>
    )
}

export default AlbumView