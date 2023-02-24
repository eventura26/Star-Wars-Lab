import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

export default function Vehicles (props) {
    
    let navigate = useNavigate()

    const showVehicle = (index) =>{
        navigate(`${index}`)
    }

    return(
        <div>
            <h3>Vehicles</h3>
            {props.vehicles.map((vehicle, index) => 
            <div key={vehicle.id} onClick={() => showVehicle(index)} >
                <h4>{vehicle.name}</h4>
            </div>)}
        </div>
    )
}

