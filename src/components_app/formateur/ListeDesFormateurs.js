import React from 'react'

export default function ListeDesFormateurs() {
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
      <th style={{width: 10}}>Cin</th>
      <th>Nom et Prenom</th>
      <th>Date de naissence</th>
      <th style={{width: 40}}>Telephone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>09985214</td>
      <td>Update software</td>
      <td>
      05/06/1999</td>
      <td>226639887</td>
    </tr>
   
  </tbody>
</table>


    </div>
    </div>

        </div>
    )
}
