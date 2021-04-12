import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import { Route, Switch } from "react-router-dom";
import FishContainer from "./FishContainer";
import { useEffect, useState} from 'react';

function App() {

 

  return (
    <section className="App"> 
      <Header />
      <NavBar />
      <Switch>
        <Route path="/fish">
          <FishContainer />
        </Route>
        {/* <Route path="/">

        </Route>
        <Route path="/recipes">

        </Route> */}
      </Switch>
    </section>
  );
}

export default App;
