import React from 'react'
import {useSelector, useDispatch} from 'react-redux';

import Croix from '../../icons/croix.png';

export default function Ingredient({name}) {
    const dispatch = useDispatch();
    const listeIngredients = useSelector(state => state.listeIngredients);

    const onClick = () => {
        let newListeIngredients = [];

        listeIngredients.forEach(element => {
            if (element !== name) {
                newListeIngredients.push(element)
            }
        });

        dispatch({
            type: "supprimerIngredient", value: newListeIngredients
        })
    }

    return (
        <span>
            {name}
            &nbsp;
            <img src={Croix} alt="croix" style={{width:"15px", height:"15px"}} onClick={onClick}/>
            <br />
        </span>
    )
}
