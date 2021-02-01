import React from 'react';

import {useSelector} from 'react-redux';

import Ingredient from './Ingredient';

export default function ListeIngredients() {
    const listeIngredients = useSelector(state => state.listeIngredients);

    const onClick = (name) => {
    }

    return (
        <div>
            {
                listeIngredients.map(item => {
                    return (
                        <Ingredient 
                            key={item}
                            name={item}
                            click={() => {onClick()}}
                        />
                    )
                })
            }
        </div>
    )
}
