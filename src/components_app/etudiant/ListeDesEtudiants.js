import { render } from '@testing-library/react'
import React, { Component } from 'react'
import { getUsers, removeEtudiantByCin } from '../../Service/EtudiantService'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
class ListeDesEtudiants extends Component {

  componentDidMount() {
    const script = document.createElement("script");
    script.src = 'js/Content.js';
    script.async = true;
    document.body.appendChild(script);
  }
  constructor(props) {
    super(props)
    this.state = { etudiants: [{}] };

    getUsers().then((response) => {
      this.setState({ etudiants: response.data });
    });

  }

  removeEtudiant = (cin) => {
    if (window.confirm("Voulez vous vraiment supprimer ce candidat !")) {
      removeEtudiantByCin(cin).then(response => {
        if (response.status == 200) {
          Swal.fire({
            icon: 'success',
            title: response.data,
            showConfirmButton: false,
            timer: 1500
          });
  
          getUsers().then((response) => {
            this.setState({ etudiants: response.data });
          });
        }
      });
    }
   

  }





  render() {
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
            <table className="table table-bordered table-striped table-sm" id="example2">
              <thead>
                <tr>
                  <th>Cin</th>
                  <th>Nom et Prénom</th>
                  <th>Date de naissance</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.etudiants.map((etudiant) => (
                  <tr>
                    <td>{etudiant.cin}</td>
                    <td>{etudiant.nom}</td>
                    <td >{etudiant.date_de_naissance}</td>
                    <td>


                      <button type="button" onClick={() => this.removeEtudiant(etudiant.id)} className="btn btn-danger btn-sm"> <i class="fas fa-trash-alt"></i> Supprimer</button></td>
                  </tr>
                ))}
              </tbody>
            </table>



          </div>
        </div>

      </div>
    )
  }
}

export default ListeDesEtudiants;