import { render } from '@testing-library/react'
import React, { Component } from 'react'
import {getSpécialités,removeSpécialitéById} from  '../../Service/SpécialitésServices'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
class ListeDesSpécialités extends Component {

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
        this.state = {spécialités: [{}]};

        getSpécialités().then((response) => {
            this.setState({spécialités: response.data});
        });

    }

    removeSpécialité=(id)=>{
        removeSpécialitéById(id).then(response=>{
            if(response.status==200)
            {
                Swal.fire({
                    icon: 'success',
                    title: response.data,
                    showConfirmButton: false,
                    timer: 1500
                });

                getSpécialités().then((response) => {
                    this.setState({spécialités: response.data});
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
                            <h1 className="m-0 text-dark">Gestion des spécialités</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Gestion des spécialités</a></li>
                                <li className="breadcrumb-item active">Liste des spécialités</li>
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
                            <th>Nom du spécialité</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.spécialités.map((spécialité) => (
                            <tr>
                                <td>{spécialité.nom_du_spécialité}</td>

                                <td>


                                    <button type="button" onClick={()=>this.removeSpécialité(spécialité.id)}  className="btn btn-danger btn-sm"> <i class="fas fa-trash-alt"></i> Supprimer</button>
                                </td>
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

export default  ListeDesSpécialités ;