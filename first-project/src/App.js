import React, { Component } from 'react';
import Home from './components/home';
import Person from './components/person';
import Navbar from './components/navbar';
import { BrowserRouter ,Routes,Route, Link} from "react-router-dom";
import Login from './components/login';

class App extends Component {
render(){
    return(
      <Login/>
    //   <BrowserRouter>
    //   <Navbar />
    // <Routes>
    //   <Route path="/" element={<Home />}> </Route>
    //   <Route path="/Persons" element={<Person />}> </Route>
    // </Routes>
    // </BrowserRouter >
    )
}
}
export default App;
