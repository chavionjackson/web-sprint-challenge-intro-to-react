// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
    border: tan 5px solid;
    font-size: 1.3vw;
    display:flex;
    justify-content: space-around;
`

const Space = styled.div`
    padding: 2vw;
`

const StarWars = (props) => {
    const {data} = props;

    return (
        <div>
            <Space>
            <h1>{data.name}</h1>
            <Card>
            <p>Height: {data.height}</p>
            <p>Mass: {data.mass}</p>
            <p>Hair Color: {data.hair_color}</p>
            <p>Skin Color: {data.skin_color}</p>
            </Card>
            </Space>
        </div>
    )
}

export default StarWars;