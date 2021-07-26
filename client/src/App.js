import React from 'react'
import './App.css';
import { Button } from 'semantic-ui-react'
import ContactList from './Components/ContactList';
import {Link, Switch,Route} from "react-router-dom"
import Add from "./Components/Add"
import Edit from "./Components/Edit"

function App() {
  return (
    <div className="App">
      <h2>workshop MERN</h2>
      <Button inverted color="blue">
        <Link to="/add"> Add Contact</Link>
      </Button>
      <Button inverted color="blue">
        <Link to="/"> Contact List</Link>
      </Button>
      <Switch>
        <Route exact path="/" component={ContactList}/>
     <Route path="/add" component={Add}/>
     <Route path="/edit/:id" component={Edit}/>
     </Switch>
    </div>
  );
}

export default App;
