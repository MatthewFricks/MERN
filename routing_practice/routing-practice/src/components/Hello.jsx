import React from 'react'
import {useParams} from 'react-router'

const Hello = () => {
    const {word, color, backgroundColor} = useParams();

    return (
        <div>
            The word is: {word}
        </div>
    )
}
export default Hello