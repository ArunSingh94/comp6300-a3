import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    
    <div className='card-container' onClick={e => {
                alert(props.recipe.analyzedInstructions[0].steps.map((s,idx) => {
                    return s.step + '\r\n';
                }))
            }
        }>
        <img alt='recipe' src={props.recipe.image}/>
        <div className="centered">
            <h1>{props.recipe.title}</h1>
            <h2>{props.recipe.readyInMinutes} minutes</h2>
            <h3>Click for recipe</h3>
        </div>
    </div>
);