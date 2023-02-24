import Nav from "./Nav";
import { Link } from "react-router-dom";
export default function Header() {
    return(
        <div className="Header">
            <Link to="/"><img width="300px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png"/></Link>
            <Nav />
        </div>

    )
}