import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AjouterFormateur from '../components_app/formateur/AjouterFormateur'
import ListeDesFormateurs from '../components_app/formateur/ListeDesFormateurs'
import UpdateFormateur from '../components_app/formateur/UpdateFormateur'
import UpdateEtudiant from '../components_app/etudiant/UpdateEtudiant'
import AjouterEtudiant from '../components_app/etudiant/AjouterEtudiant'
import ListeDesEtudiants from '../components_app/etudiant/ListeDesEtudiants'
import AjouterFormation from '../components_app/formation/AjouterFormatio'
import Affectation from '../components_app/formation/AffectaionFormationFormateur'
import AffectationEtudiant from '../components_app/etudiant/AffectaionFormationEtudiant'
import ListeDesFormations from '../components_app/formation/ListeDesFormations'
import UpdateFormation from '../components_app/formation/UpdateFormation'
export default function MainContent() {
    return (
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div class="content">
<div class="container-fluid">
   {/* <AjouterFormateur></AjouterFormateur>*/}
<Switch>
<Route path="/AjouterFormateur" component={AjouterFormateur}/>
<Route path="/UpdateFormateur/:id" component={UpdateFormateur}/>
<Route path="/ListeFormateurs" component={ListeDesFormateurs}/>
<Route path="/Affectation" component={Affectation}/>


<Route path="/UpdateEtudiant/:id" component={UpdateEtudiant}/>
<Route path="/AjouterEtudiant" component={AjouterEtudiant}/>
<Route path="/ListeDesEtudiants" component={ListeDesEtudiants}/>
<Route path="/AffectationEtudiant" component={AffectationEtudiant}/>

<Route path="/AjouterFormation" component={AjouterFormation}/>
<Route path="/ListeDesFormations" component={ListeDesFormations}/>
<Route path="/UpdateFormation/:id" component={UpdateFormation}/>
</Switch>

 


  </div>
  </div>
</div>

    )
}
