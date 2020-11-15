import React from 'react'
import {Route,Redirect} from "react-router-dom";
import Layout from './Layout/layout'
import './App.css';
import Login from "./pages/login"
export default class App extends React.Component {
   state = {

  }

  render = () => {
    return (
      <>
        <Redirect  from="/"  to="/Login" />
        <Route path="/Login" component={Login}  />
        <Route path="/Layout" component={Layout}  />
      </>
    )
  }
}


