import React from 'react'
import {useParams} from 'react-router';

const Info = () => {
    const {id, color, backgroundColor} = useParams();

    return (
        <div>
            { isNaN(id)?
                <h1 style= {{color:color, backgroundColor:backgroundColor}}>The word is: {id}</h1>:
                <h1 style= {{color:color, backgroundColor:backgroundColor}}>The number is: {id}</h1>
        }
        </div>
    )
}


export default Info;