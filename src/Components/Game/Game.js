import React from 'react';
import { Increment } from '../../actions'

const Game = ({dispatch}) =>(
    <div>
        <button onClick={dispatch(Increment(1))}>Increment One</button>
        <button onClick={dispatch(Increment(2))}> Increment Two</button>
        <h2></h2>
    </div>
)

export default Game