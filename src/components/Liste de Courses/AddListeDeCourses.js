import React, {useState} from 'react';

import firebase from 'firebase';

import "./CSS/AddListeDeCourses.css";

export default function AddListeDeCourses({rendre}) {
    const [nomElement, setNomElement] = useState("");
    const [quantiteElement, setQuantiteElement] = useState("");

    const [nomErreur, setNomErreur] = useState(false);
    const [quantiteErreur, setQuantiteErreur] = useState(false);

    const addElement = (event) => {
        if (nomElement !== '' && quantiteElement !== '') {
            firebase.firestore().collection("listeDeCourses").add({
                nom: nomElement,
                quantite: quantiteElement
            })
            .then(function() {
                setNomElement('');
                setQuantiteElement('');
    
                rendre();
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });

            setNomErreur(false);
            setQuantiteErreur(false);
        } else {
            messageErreur();
        }
    }

    const handleKeyPressed = (event) => {
        if (event.key === 'Enter') {
            addElement();
        }
    }

    const messageErreur = () => {
        if (nomElement === '') {
            setNomErreur(true);
        }

        if (quantiteElement === '') {
            setQuantiteErreur(true);
        }
    }

    return (
        <div>
            <div id='inputDiv'>
                <label htmlFor="inputNomElement">Element : </label>
                &nbsp;
                <input type="text" id="inputNomElement" className="inputNomElement" value={nomElement} onChange={(e) => {setNomElement(e.target.value)}} />
                &nbsp;
                {
                    nomErreur ?
                        <p style={{color: 'red'}}>Mauvaise entrée</p>
                    :
                        null
                }
            </div>
            <br/>
            <div id='inputDiv'>
                <label htmlFor="inputQuantiteElement">Quantité : </label>
                &nbsp;
                <input onKeyPress={handleKeyPressed} type="text" id="inputQuantiteElement" className="inputQuantiteElement" value={quantiteElement} onChange={(e) => {setQuantiteElement(e.target.value)}} />
                &nbsp;
                {
                    quantiteErreur ?
                        <p style={{color: 'red'}}>Mauvaise entrée</p>
                    :
                        null
                }
            </div>
            <br/>
            <button onClick={addElement}>Ajouter</button>
        </div>
    )
}