import React from 'react';
import {Link} from 'react-router-dom';

export default function HomeRecettes() {
    return (
        <div>
            <Link to="/add">
                <button>Ajouter une recette</button>
            </Link>
            &nbsp;
            <Link to="/find">
                <button>Recettes</button>
            </Link>
        </div>
    )
}
