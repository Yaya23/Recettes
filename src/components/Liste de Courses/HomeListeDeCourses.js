import React, {useState} from 'react';

import AddListeDeCourses from './AddListeDeCourses';
import ListeDeCourses from './ListeDeCourses';

export default function HomeListeDeCourses() {
    const [rendreCondition, setRendreCondition] = useState(false);

    const rendre = () => {
        if (rendreCondition)
            setRendreCondition(false);
        else
            setRendreCondition(true);
    }

    return (
        <div>
            <h1>Liste de courses</h1>
            <AddListeDeCourses rendre={rendre}/>
            &nbsp;
            <ListeDeCourses rendre={rendreCondition}/>
        </div>
    )
}
