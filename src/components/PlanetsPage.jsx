import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PlanetsPage(props){

    let [planet, setPlanet] = useState('')
    let {index} = useParams()
   
    useEffect(()=>{
        let selectedPlanet = props.planets[index]
        setPlanet(selectedPlanet)

    },[props.planet, index])

    return(
        <div>
            <h1>{planet.name}</h1>
        </div>
    )

}