import { useNavigate } from 'react-router-dom'
export default function Species (props) {

    let navigate = useNavigate()

    const getSpecies = (index) => {
        navigate(`${index}`)

    }

    return(
        <div>
        <h3>Species</h3>
        {props.species.map((speciesS, index) => 
            <div key={speciesS.id} onClick={() => getSpecies(index)}>
                <h4>{speciesS.name}</h4>
            </div>

        )}
        
        </div>
    )
}