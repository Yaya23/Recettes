import React from 'react'

import firebase from 'firebase';

export default function Recette() {
    const getRecette = () => {
        firebase.firestore().collection('recettes').doc('Pates').get().then(function(doc) {
            console.log(doc.data().pates);
        })
    }

    return (
        <div>
            Recette

            <button onClick={getRecette}>Get recette</button>
        </div>
    )
}
