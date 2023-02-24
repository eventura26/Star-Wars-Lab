import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Films(props) {

    let navigate = useNavigate()

    const showMovie = (index) => {
        navigate(`${index}`)
    }

    return(
        <div>
           <h3>Films</h3>
            {props.movies.map((movie, index) => 
            <div key={movie.id} onClick={() => showMovie(index)}>
                <h4>{movie.title}</h4>
            </div>)}
        </div>
    )
}
