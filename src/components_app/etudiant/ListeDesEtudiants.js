import React from 'react'

export default function ListeDesEtudiants() {
    return (
        <div>
            <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Gestion des étudiants</h1>
            </div>{/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Gestion des étudiants</a></li>
                <li className="breadcrumb-item active">Liste des étudiants</li>
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
      <th>Nom et Prénom</th>
      <th>Date de naissance</th>
        <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>07220955</td>
      <td>Moataz Daklaui</td>
      <td >05/06/1999</td>
        <td> <button type="submit" class="btn btn-info">Voir Details</button>
            <button type="submit" class="btn btn-warning">Modifier</button>
          <button type="submit" class="btn btn-danger ">Supprimer</button></td>
    </tr>
   
  </tbody>
</table>


    </div>
    </div>

        </div>
    )
}
