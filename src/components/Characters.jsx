import { useNavigate } from "react-router-dom"

export default function Characters(props) {

    let navigate = useNavigate()

    const getCharacter = (index) => {
        navigate(`${index}`)

    }

    return(
        <div>
            <h3>Characters</h3>
            {
          props.characters.map((character, index) => 
            <div key={character.id} onClick={() => getCharacter(index)}>
                <h4>{character.name}</h4>
                </div>)
        }
        </div>
        
    )
}