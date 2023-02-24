import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function VehiclesPage(props){ 

    let [vehicle, setVehicle]= useState('')

    let {index} = useParams()

    useEffect(()=>{
        let selectedVehicle = props.vehicles[index]
        setVehicle(selectedVehicle)
    },[props.vehicle, index])

    return(
        <div>
            <h1>{vehicle.name}</h1>
            <h3>model: {vehicle.model}</h3>
            <h3>manufacturer: {vehicle.manufacturer}</h3>
            <h3>price: ${vehicle.cost_in_credits}</h3>
        </div>
        
    )
    

}