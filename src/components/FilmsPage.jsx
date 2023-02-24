import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom'

export default function FilmPage(props) {

    const [movie, setMovie] = useState('')

    let {index} = useParams()

    useEffect(() => {
        let selectedMovie = props.movies[index]
        setMovie(selectedMovie)
    },[props.movie, index] )

    return(
        <div>
            <h1>{movie.title}</h1>
            <h2>Episode {movie.episode_id}</h2>
            <h2>Released on {movie.release_date}</h2>
            <h2>{movie.opening_crawl}</h2>
        </div>
    )
}