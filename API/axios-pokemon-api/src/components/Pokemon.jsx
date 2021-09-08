
import React, { useState } from 'react';
import axios from 'axios';


const Pokemon = () => {


    const [allPokemon, setAllPokemon] = useState([])


    const click = () => {
        console.log("clicked!")

        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=200")
            .then(res => {
                console.log(res)

                setAllPokemon([res.data])
            })
            .catch(err => {
                console.log(err)
            }) 

    }
    return (
        <div>
            <button onClick={click} className="btn btn-success">Show Pokemon!</button>
            {
                allPokemon.map((poke, index) => {
                    return <div style={{ backgroundColor: "gray" }} key={index} className="card">
                        <div className="card-body">
                            <h4 className="card-title">{poke.name}</h4>
                            {/* <img src={coin.image} alt="" /> */}
                            {/* <p className="card-text">Current Price: ${coin.current_price}</p> */}
                            {/* <a href="#!" className="btn btn-primary mb-3">Go somewhere</a> */}
                        </div>
                    </div>
                })
            }
        </div>
    );
};



export default Pokemon;

