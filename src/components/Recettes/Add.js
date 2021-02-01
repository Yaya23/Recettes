import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import firebase from 'firebase';

import ListeIngredients from './ListeIngredients';
import NomRecette from './NomRecette';

export default function Add() {
    const dispatch = useDispatch();
    const listeIngredients = useSelector(state => state.listeIngredients);

    const [nomRecetteIsGood, setNomRecetteIsGood] = useState(false);
    const [nomRecette, setNomRecette] = useState();
    const [showButtonAddIngredient, setShowButtonAddIngredient] = useState(true);
    const [nouvelIngredient, setNouvelIngredient] = useState();

    const envoyerIngredient = () => {
        let nouvelleListeIngredients = listeIngredients;

        nouvelleListeIngredients.push(nouvelIngredient);

        dispatch({
            type: "ajouterIngredient", value: nouvelleListeIngredients
        })

        setShowButtonAddIngredient(true);
    }

    const ajouterRecette = () => {
        firebase.firestore().collection("recettes").doc(nomRecette).update(
            listeIngredients.reduce((acc, element) => ({
                ...acc,
                [element]: element
            }), {})
        )
    }

    return (
        <>
            { 
                nomRecetteIsGood ?
                    <>
                        <h1>{nomRecette}</h1>
                        {
                            showButtonAddIngredient ?
                                <>
                                    <button onClick={() => {setShowButtonAddIngredient(false)}}>Ajouter un ingrédient</button>
                                    <br/>
                                </>
                            :
                                <>
                                    <label htmlFor="inputAddIngredient">Ingredient : </label>
                                    <input type="text" id="inputAddIngredient" className="inputAddIngredient" onChange={(e) => {setNouvelIngredient(e.target.value)}}></input>
                                    &nbsp;
                                    <button onClick={envoyerIngredient}>Ajouter</button>
                                    <br/>
                                </>
                        }
                        
                        <>
                            Liste ingredients: 
                            <ListeIngredients />
                            {
                                listeIngredients.length !== 0 ?
                                    <>
                                        <button onClick={ajouterRecette}>Ajouter recette</button>
                                    </>
                                :
                                    <>
                                    </>
                            }
                        </>
                    </>
                :
                    <>
                        <NomRecette click={setNomRecette} isGood={setNomRecetteIsGood}/>
                    </>
            }
        </>
    )
}
