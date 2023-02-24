import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <div className="nav-bar">
            <Link to="/"><h2>Home</h2></Link>
            <Link to="/films"><h2>Films</h2></Link>
            <Link to="/vehicles"><h2>Vehicles</h2></Link>
            <Link to="/starshipslist"><h2>Starships</h2></Link>
            <Link to="/planets"><h2>Planets</h2></Link>
            <Link to="/species"><h2>Species</h2></Link>
            <Link to="/characters"><h2>Characters</h2></Link>
        </div>
    )
}