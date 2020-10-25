import React from 'react'
import AjouterFormateur from '../components_app/formateur/AjouterFormateur'
import ListeDesFormateurs from '../components_app/formateur/ListeDesFormateurs'

export default function MainContent() {
    return (
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div class="content">
<div class="container-fluid">
   {/* <AjouterFormateur></AjouterFormateur>*/}
  <ListeDesFormateurs></ListeDesFormateurs>
  </div>
  </div>
</div>

    )
}
