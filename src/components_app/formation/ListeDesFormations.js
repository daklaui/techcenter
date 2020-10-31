import React from 'react'

export default function ListeDesFormations() {
    return (
        <div>
            <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Gestion des formations</h1>
            </div>{/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Gestion des formations</a></li>
                <li className="breadcrumb-item active">Liste des formations</li>
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
      <th>Titre</th>
      <th>Session</th>
      <th>Nomber des etudiants</th>
      <th>Nomber des formateurs</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>F1</td>
      <td>F1_1</td>
      <td> 30</td>
      <td> 1</td>
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
