import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CharactersPage(props) {
        let {index} = useParams()
        const [character, setCharacter] = useState('')

        useEffect(() => {
            let selectedCharacter = props.characters[index]
            setCharacter(selectedCharacter)

        },[props.character, index])
    
    return(
        <div>
            <h1>{character.name}</h1>
        </div>

        )

}