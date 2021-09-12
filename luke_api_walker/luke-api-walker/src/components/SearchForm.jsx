import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";

const SearchForm = () => {

    const [categories, setCategories] = useState([])

    const [formInfo, setFormInfo] = useState({
        category:"people",
        id:""
    })

    const history = useHistory();

    useEffect(() => {
        axios.get("https://swapi.dev/api/")
        .then(res=>{
            console.log("res -->", res)
            setCategories(Object.keys(res.data))
        })
        .catch(err=> console.log(err))
    },[])

    const changeHandler = (eve) =>{
        console.log(eve.target.value)
        setFormInfo ({
            ...formInfo,
            [eve.target.name]:eve.target.value
        })
    }

    const submitHandler = (eve) =>{
        eve.preventDefault();
        console.log("form submitted")
        history.push(`/${formInfo.category}/${formInfo.id}`)

    }

    return (
        <div>
            <form onSubmit= {submitHandler} action="">
                <div>
                    <select onChange = {changeHandler} name="category" id="">
                        {
                            categories.map((cat, i)=>
                                <option key={i} value={cat}>{cat}</option>
                            )
                        }
                    </select>
                </div>
                <div>
                    <input onChange = {changeHandler} type="number" name="id" id="" />
                </div>
                <div>
                    <input className = "btn btn-success" type="submit" value="Search" />
                </div>
            </form>
        </div>
    )
}


export default SearchForm
