import React from 'react'

export default function AjouterEtudiant() {
    return (
        <div>
             <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0 text-dark">Ajouter un étudiant</h1>
            </div>{/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Gestion des étudiants</a></li>
                <li className="breadcrumb-item active">Ajouter un étudiant</li>
              </ol>
            </div>{/* /.col */}
          </div>{/* /.row */}
        </div>{/* /.container-fluid */}
      </div>
    




        <div className="row">
             <div className="col-lg-2"></div>
  <div className="col-lg-8">
    <div className="card card-primary">
      <div className="card-header">
        <h3 className="card-title">
          Ajouter un étudiant
        </h3>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="Hotel">CIN :</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="Hotel">Mot de Passe :</label>
              <input type="password" className="form-control form-control-sm" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="Hotel">Nom :</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="Hotel">Prénom :</label>
              <input type="password" className="form-control form-control-sm" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label htmlFor="Hotel">Date de naissance :</label>
              <input type="date" className="form-control form-control-sm" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label htmlFor="Hotel">Téléphone :</label>
              <input type="number" className="form-control form-control-sm" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label htmlFor="Hotel">Email :</label>
              <input type="email" className="form-control form-control-sm" />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <label htmlFor="Hotel">Adresse :</label>
              <input type="text" className="form-control form-control-sm" />
            </div>
          </div>

        </div>
      </div>
      <div className="card-footer">
      <div class="row">
                <div class="col-lg-4"></div>
                <div class="col-lg-4">   <button type="submit" class="btn btn-primary btn-block">Ajouter l'étudiant</button></div>
                <div class="col-lg-4"></div>
            </div>
     
      </div>
    </div>
  </div>
  <div className="col-lg-2"></div>
</div>
        </div>
    )
}
