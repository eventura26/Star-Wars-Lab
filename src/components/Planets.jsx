import { useNavigate } from "react-router-dom"

export default function Planets(props) {
    let navigate = useNavigate()

    const showPlanets = (index) =>{
        navigate(`${index}`)
    }
    
    return(
        <div>
            <h3>Planets</h3>
            {props.planets.map((planet, index) =>
            <div key={planet.id} onClick={() => showPlanets(index)}>
                <h4>{planet.name}</h4>
            </div> )}
        </div>
        
    )
}