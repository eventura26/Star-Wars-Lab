import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SpeciesPage(props){
    let {index} = useParams()
    const [species1, setSpecies] = useState('') 
    
    useEffect(() => {
        let selectedSpecies = props.species[index]
        setSpecies(selectedSpecies)

    },[props.species1, index])

    
    return(
        <div>
            <h1>{species1.name}</h1>
        </div>
    )
}