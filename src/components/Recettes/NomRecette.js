import React, {useState} from 'react'

export default function NomRecette({click, isGood}) {
    const [nomRecette, setNomRecette] = useState();

    const changedInput = (e) => {
        setNomRecette(e.target.value);
    }

    return (
        <div>
            <label htmlFor="nomRecette">Nom de la recette : </label>
            <input type="text" id="nomRecette" className="nomRecette" onChange={changedInput}/>
            <button onClick={() => {
                click(nomRecette);
                isGood(true);
            }}>Ajouter</button>
        </div>
    )
}
