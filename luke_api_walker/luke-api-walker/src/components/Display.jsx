import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import axios from 'axios';


const Display = () => {
    const { category, id } = useParams();

    const [info, setInfo] = useState({})

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(res=>{
            setInfo(res.data)

            })
            .catch(err=>{
                console.log(err) 
            })
    },[category,id])

    return (

        <div>
            {category === "planets"?
                <>
                    <h1>Info</h1>
                    <h2>Name: {info.name}</h2>
                    <h3>Diameter: {info.diameter}</h3>
                    <h3>Rotational Period(Day): {info.rotation_period} Hours</h3>
                    <h3>Orbital Period(Year): {info.orbital_period} Days</h3> 
                    <h3>Climate: {info.climate}</h3>
                </>:
                category === "people"?
                <>
                    <h1>Info</h1>
                    <h2>Name: {info.name}</h2>
                    <h3>Height: {info.height}</h3>
                    <h3>Mass: {info.mass}</h3>
                    <h3>Hair Color: {info.hair_color}</h3>
                    <h3>Skin Color: {info.skin_color}</h3>
                </>:
                category === "vehicles"?
                <>
                    <h1>Info</h1>
                    <h2>Name: {info.name}</h2>
                    <h3>Model: {info.model}</h3>
                    <h3>Length: {info.length}</h3>
                    <h3>Capacity: {info.cargo_capacity}</h3>
                    <h3>Speed: {info.max_atmosphering_speed}</h3>
                </>:
                category === "films"?
                <>
                    <h1>Info</h1>
                    <h2>Title: {info.title}</h2>
                    <h3>Episode: {info.episode_id}</h3>
                    <h3>Director: {info.director}</h3>
                    <h3>Release Date: {info.release_date}</h3>
                    <h3>Opening Text: {info.opening_crawl}</h3>
                </>:
                category === "species"?
                <>
                    <h1>Info</h1>
                    <h2>Name: {info.name}</h2>
                    <h3>Classification: {info.classification}</h3>
                    <h3>Daesignation: {info.designation}</h3>
                    <h3>Average Height: {info.average_height}cm</h3>
                    <h3>Language: {info.language}</h3>
                </>:
                category === "starships"?
                <>
                    <h1>Info</h1>
                    <h2>Name: {info.name}</h2>
                    <h3>Model: {info.model}</h3>
                    <h3>Class: {info.starship_class}</h3>
                    <h3>Length: {info.length}</h3>
                    <h3>In Atmosphere Speed: {info.max_atmosphering_speed}</h3>
                    <h3>Hyperdrive Rating: {info.hyperdrive_rating}</h3>
                </>:

                <>
                <h1>These are not the droids you're looking for.</h1>
                <img src="https://th.bing.com/th/id/R.5b84b8e118f2caf9cc692acaafd5bc01?rik=iA1Cwmb3yieSHQ&pid=ImgRaw&r=0" alt="" />
                </>
            }

        </div>
    );
}
export default Display