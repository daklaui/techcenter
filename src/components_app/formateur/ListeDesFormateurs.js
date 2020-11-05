import { render } from '@testing-library/react'
import React, { Component } from 'react'
import {getUsers,removeFormateurByCin} from  '../../Service/FormateurService'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import {removeEtudiantByCin} from "../../Service/EtudiantService";


class ListeDesFormateurs extends Component
{
  componentDidMount()
  {
    const script =document.createElement("script");
    script.src='js/Content.js';
    script.async=true;
    document.body.appendChild(script);
  }
  constructor(props)
  {
    super(props)
    this.state = {formateurs: [{}]};

    getUsers().then((response) => {
      this.setState({formateurs: response.data});
    });

  }

  removeFormateur=(cin)=>{
    removeFormateurByCin(cin).then(response=>{
      if(response.status==200)
      {
        Swal.fire({
          icon: 'success',
          title: response.data,
          showConfirmButton: false,
          timer: 1500
        });

        getUsers().then((response) => {
          this.setState({formateurs: response.data});
        });
      }
    });

  }

  render(){  return  (
      <div>
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0 text-dark">Gestion des formateurs</h1>
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
              {this.state.formateurs.map((formateur) => (
                  <tr>
                    <td>{formateur.cin}</td>
                    <td>{formateur.nom}</td>
                    <td >{formateur.date_de_naissance}</td>
                    <td> <button type="button" className="btn btn-info btn-sm"><i class="fas fa-info-circle"></i> Voir Details</button>


                      <Link to={"/UpdateFormateur/"+formateur.cin} className="btn btn-warning btn-sm">
                        <i class="fas fa-edit"></i> Modifier
                      </Link>

                      <button type="button" onClick={()=>this.removeFormateur(formateur.cin)}  className="btn btn-danger btn-sm"> <i class="fas fa-trash-alt"></i> Supprimer</button></td>
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

export default  ListeDesFormateurs ;