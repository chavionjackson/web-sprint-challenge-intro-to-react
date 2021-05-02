// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const StyleNames = styled.div`
    color: white;
`

const StarWars = (props) => {
    const {data} = props;

    return (
        <div>
            <h1>{data.name}</h1>
            <p>Height: {data.height}</p>
            <p>Mass: {data.mass}</p>
            <p>Hair Color: {data.hair_color}</p>
            <p>Skin Color: {data.skin_color}</p>
        </div>
    )
}

export default StarWars;