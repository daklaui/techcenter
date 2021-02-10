import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components_template/Footer'
import Header from './components_template/Header'
import MainContent from './components_template/MainContent'
import SideBar from './components_template/SideBar'
import Login from './components_template/Login'
import AjouterFormateur from './components_app/formateur/AjouterFormateur'
export default function App() {
  console.log(localStorage.getItem("login"));
  if (localStorage.getItem("login") == null || localStorage.getItem("login") == undefined) {
    return (
      <div class="hold-transition login-page">

        <Login />

      </div>
    )
  }
  else {
    return (
      <div class="hold-transition sidebar-mini">


        <Header />


        <Router>       <SideBar />  <MainContent /></Router>




        <Footer />


      </div>
    )
  }

}
