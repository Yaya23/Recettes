import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home';
import Add from './components/Recettes/Add';
import Recettes from './components/Recettes/Recettes';
import HomeRecettes from './components/Recettes/HomeRecettes';

// Liste de courses
import HomeListeDeCourses from './components/Liste de Courses/HomeListeDeCourses';
import AddListeDeCourses from './components/Liste de Courses/AddListeDeCourses';
import ListeDeCourses from './components/Liste de Courses/ListeDeCourses';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/find" component={Recettes} />
        <Route exact path="/homeRecettes" component={HomeRecettes} />
        <Route exact path="/homeListeDeCourses" component={HomeListeDeCourses} />
        <Route exact path="/addListeDeCourses" component={AddListeDeCourses} />
        <Route exact path="/listeDeCourses" component={ListeDeCourses} />
      </Router>
    </div>
  );
}

export default App;
