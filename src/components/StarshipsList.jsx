import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function StarshipsList(props) {
    
    let navigate = useNavigate()

    const showShip = (index) => {

        navigate(`${index}`)
    }

    
    return(
        <div>
            <h3>Starships</h3>
            {
          props.starships.map((starship, index) => 
            <div key={starship.id} onClick={() => showShip(index)}>
                <h4>{starship.name}</h4>
                </div>)
        }
        </div>
        
    )
}