import React, {useState, useEffect} from 'react';

import firebase from 'firebase';

import Element from './Element';
import './CSS/ListeDeCourses.css';

export default function ListeDeCourses({rendre}) {
    const [listeElements, setListeElements] = useState([]);
    const [listeElementsTmp, setListeElementsTmp] = useState([]);
    const [rendreCondition, setRendreCondition] = useState(false);

    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(true);

        if (setLoading) {
            firebase.firestore().collection("listeDeCourses").get().then(function(doc) {
                doc.forEach(element => {
                    listeElementsTmp.push([element.id, element.data().nom, element.data().quantite]);
                })

                setListeElements(listeElementsTmp);
                setListeElementsTmp([]);

                setLoading(false);
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        }
    }, [rendre, rendreCondition])

    const removedElement = () => {
        setLoading(true);
        setLoading(false);
        
        if (rendreCondition)
            setRendreCondition(false);
        else
            setRendreCondition(true);
    }

    return (
        <div id="mainDiv">
            <h2>Liste</h2>
            { loading ?
                <>
                </>
                
                :

                <div id="listeDiv">
                    {
                        listeElements.map(element => {
                            return (
                                <Element key={element[0]} id={element[0]} nom={element[1] } quantite={element[2]} onClick={removedElement} />
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}
