import React, {useState} from 'react';

import firebase from 'firebase';

import Croix from '../../icons/croix.png';
import Checked from '../../icons/checked.png';
import Trash from '../../icons/trash.png';
import './CSS/Element.css';

export default function Element({id, nom, quantite, onClick}) {
    const clicked = () => {
        firebase.firestore().collection("listeDeCourses").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
            onClick();
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
    }

    const checked = () => {
        if (document.getElementById("myDiv").style.backgroundColor !== "rgb(108, 240, 5)") {
            document.getElementById("myDiv").style.backgroundColor = "#6cf005";
        } else {
            document.getElementById("myDiv").style.backgroundColor = "white";
        }
    }

    const croix = () => {
        if (document.getElementById("myDiv").style.backgroundColor !== "rgb(255, 72, 72)") {
            document.getElementById("myDiv").style.backgroundColor = "#FF4848";
        } else {
            document.getElementById("myDiv").style.backgroundColor = "white";
        }
    }

    return (
        <div id="myDiv" style={{backgroundColor: "white"}}>
            <div>
                {nom} :
            </div>

            <div>
                {quantite}
            </div>

            <div>
                <img src={Checked} alt="Checked" onClick={checked}/> &nbsp;
                <img src={Croix} alt="Checked" onClick={croix}/> &nbsp;
                <img src={Trash} alt="croix" onClick={clicked}/>
            </div>
        </div>
    )
}
