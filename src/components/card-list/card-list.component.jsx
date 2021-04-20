import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component';

export const CardList = (props) => (
    <div className='card-list'>
        {
            props.recipes.map(recipe => (
                <Card key={recipe.id} recipe={recipe}/>
            ))
        }
    </div>
);