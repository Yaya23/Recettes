import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <Link to="/homeRecettes">
                <button>Recettes</button>
            </Link>
            &nbsp;
            <Link to="/homeListeDeCourses">
                <button>Liste de courses</button>
            </Link>
        </div>
    )
}
