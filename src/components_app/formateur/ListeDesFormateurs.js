import React, { Component } from 'react'
import axios from 'axios'
const api = axios.create({
  baseURL:''
});

class ListeDesFormateurs extends Component
{

constructor()
{
  super();
  api.get('/').then(res=>{

  });
}

  render(){
    
  
  return (
    <div>
        <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0 text-dark">Liste des Formateurs</h1>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Gestion des formateurs</a></li>
            <li className="breadcrumb-item active">Liste des formateurs</li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>


  <div className="row">
<div className="col-lg-12">
<table className="table">
<thead>
<tr>
  <th>Cin</th>
  <th>Nom et Prenom</th>
  <th>Date de naissence</th>
  <th>Action</th>
</tr>
</thead>
<tbody>
<tr>
  <td>09985214</td>
  <td>Update software</td>
  <td>05/06/1999</td>
  <td>
      <button type="submit" className="btn btn-info">Voir Details</button>
      <button type="submit" className="btn btn-warning">Modifier</button>
      <button type="submit" className="btn btn-danger ">Supprimer</button></td>
</tr>

</tbody>
</table>


</div>
</div>

    </div>
)
  }
}

export default  ListeDesFormateurs;
