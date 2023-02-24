import Characters from "./Characters";
import CharactersPage from "./CharactersPage";
import Planets from "./Planets";
import PlanetsPage from "./PlanetsPage";
import StarshipsList from "./StarshipsList";
import Films from "./Films";
import FilmsPage from "./FilmsPage"
import Species from "./Species";
import SpeciesPage from "./SpeciesPage";
import Vehicles from "./Vehicles";
import VehiclesPage from "./VehiclesPage";
import Home from "./Home";
import StarshipPage from "./StarshipPage";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import { STARSHIPS_URL, CHARACTERS_URL, PLANETS_URL, FILMS_URL, VEHICLES_URL, SPECIES_URL } from "../globals"
import axios from 'axios';

export default function Main (){

    const [starships, setStarships] = useState([])
    const [characters, setCharacters] = useState([])
    const [planets, setPlanets] = useState([])
    const [vehicles, setVehicles] = useState([])
    const [species, setSpecies] = useState([])
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () =>{
            const response = await axios.get(`${FILMS_URL}`)
            console.log(response.data.results)
            setMovies(response.data.results)
        }
        getMovies()

    } ,[])

    useEffect(() => {  
        const getSpecies = async () =>{
            const response = await axios.get(`${SPECIES_URL}`)
            console.log(response.data.results)
            setSpecies(response.data.results)
        }
        getSpecies()

    } ,[])

    useEffect(() =>{
        const getVehicle = async () => {
            const response = await axios.get(`${VEHICLES_URL}`)
            console.log(response.data.results)
            setVehicles(response.data.results)
        }
        getVehicle()
    },[])

    useEffect(() =>{
        const getPlanet = async () => {
            const response = await axios.get(`${PLANETS_URL}`)
            console.log(response.data.results)
            setPlanets(response.data.results)
        }
        getPlanet()
    },[])

    useEffect(() => {
        const getCharacter = async () => {
            const response = await axios.get(`${CHARACTERS_URL}`)
            console.log(response.data.results)
            setCharacters(response.data.results)
        }
        getCharacter()
    },[])

    useEffect(() => {
      const getShips = async () => {
        const response = await axios.get(`${STARSHIPS_URL}`)
        console.log(response.data.results)
        setStarships(response.data.results)
      }
      
      getShips()
    }, [])
  

    return(
        <div className="Main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/films" element={<Films movies={movies}/>} />
                <Route path="/films/:index" element={<FilmsPage movies={movies}/>}/>
                <Route path="/vehicles" element={<Vehicles vehicles={vehicles}/>} />
                <Route path="/vehicles/:index" element={<VehiclesPage vehicles={vehicles} />} />
                <Route path="/starshipslist" element={<StarshipsList starships={starships}/>} />
                <Route path="/starshipslist/:index" element={<StarshipPage starships={starships}/>} />
                <Route path="/planets" element={<Planets planets={planets}/>}/>
                <Route path="/planets/:index" element={<PlanetsPage planets={planets}  />}/>
                <Route path="/species" element={<Species species={species} />} />
                <Route path="species/:index" element={<SpeciesPage species={species} />} />
                <Route path="/characters" element={<Characters
                characters={characters}/>}/>
                <Route path='/characters/:index' element={<CharactersPage characters={characters} />} />

            </Routes>
        </div>
    )
}
