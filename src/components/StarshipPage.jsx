import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function StarshipPage(props){
    
    const [starship, setStarship] = useState('')

    let {index} = useParams()

    useEffect(() => {
        let selectedShip = props.starships[index]
        setStarship(selectedShip)
    },[props.starship, index])
   
    return(
        <div>
            <h1>{starship.name}</h1>
            <h3>model: {starship.model}</h3>
            <h3>manufacturer: {starship.manufracturer}</h3>
            <h3>${starship.cost_in_credits}</h3>
            <h3>class: {starship.starship_class}</h3>
        </div>
    )

}