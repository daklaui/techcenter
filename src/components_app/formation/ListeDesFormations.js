import React, { Component } from 'react'
import {getFormations,removeFormationById} from  '../../Service/FormationService'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


class ListeDesFormations extends Component
{
    componentDidMount()
    {
        const script =document.createElement("script");
        script.src='js/Content.js';
        script.async=true;
        document.body.appendChild(script);
        getFormations().then((response) => {
            this.setState({formations: response.data});
        });
    }
    constructor(props)
    {
        super(props)
        this.state = {formations: []};

      

    }

    removeFormation=(id)=>{
        removeFormationById(id).then(response=>{
            if(response.status==200)
            {
                Swal.fire({
                    icon: 'success',
                    title: response.data,
                    showConfirmButton: false,
                    timer: 1500
                });

                getFormations().then((response) => {
                    this.setState({formations: response.data});
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
                    <table className="table table-bordered table-striped table-sm" id="example1">
                        <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Description</th>
                        
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.formations.map((formation) => (
                            <tr>
                                <td>{formation.titre}</td>
                                <td>{formation.description}</td>
                              
                               
                                <td> 


                                    <Link to={"/UpdateFormation/"+formation.id} className="btn btn-warning btn-sm">
                                        <i class="fas fa-edit"></i> Modifier
                                    </Link>

                                    <button type="button" onClick={()=>this.removeFormation(formation.id)}  className="btn btn-danger btn-sm"> <i class="fas fa-trash-alt"></i> Supprimer</button></td>
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

export default  ListeDesFormations ;