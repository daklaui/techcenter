import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AjouterFormateur from '../components_app/formateur/AjouterFormateur'
import ListeDesFormateurs from '../components_app/formateur/ListeDesFormateurs'
import AjouterEtudiant from '../components_app/etudiant/AjouterEtudiant'
import ListeDesEtudiants from '../components_app/etudiant/ListeDesEtudiants'
export default function MainContent() {
    return (
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div class="content">
<div class="container-fluid">
   {/* <AjouterFormateur></AjouterFormateur>*/}
<Switch>
<Route path="/AjouterFormateur" component={AjouterFormateur}/>
<Route path="/ListeFormateurs" component={ListeDesFormateurs}/>
<Route path="/AjouterEtudiant" component={AjouterEtudiant}/>
<Route path="/ListeDesEtudiants" component={ListeDesEtudiants}/>
</Switch>

 


  </div>
  </div>
</div>

    )
}
