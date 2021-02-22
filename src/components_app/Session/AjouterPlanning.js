import React, { Component } from 'react'
import Select from 'react-select'
import { isEmail, isNumber, isEmpty, isMin, isMax, isValidationPassword } from '../../Global/Validator'
import axios from 'axios'

import Swal from 'sweetalert2'
import { getUsers } from '../../Service/FormateurService';
const api = axios.create({
    baseURL: 'http://localhost:6039'
});



class AjouterPlanning extends Component {


    constructor(props) {
        super(props)
        this.state = {
            titre: '',
            date: '',
            heureDebut: '',
            heureFin: '',
            adresse: '',
            idFormateur: '',
            formateurs: [],


        };
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        getUsers().then((response) => {
            this.setState({ formateurs: response.data });
        });
    }


    handleChange(event) {


        this.setState({ [event.target.name]: event.target.value });

    };



    mySubmitHandler = (event) => {
        event.preventDefault();

        const planing={
            "titre":this.state.titre,
            "idSession":this.props.match.params.id,
            "date":this.state.date,
            "heureDebut":this.state.heureDebut,
            "heureFin":this.state.heureFin,
            "idFormateur":this.state.idFormateur,
            "isFinish":false
        }
        //let res = add(,);
        api.post('/AjoutPlaning', planing).then(response => {
            console.log(response.data);
            if (response.status == 200) {

                Swal.fire({
                    icon: 'success',
                    title: response.data,
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: response.data,
                    showConfirmButton: false,
                    timer: 1500
                })
            }


        });


    };


    render() {
        const { errors } = this.state;
        return (
            <div>
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Ajouter Planning</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Gestion des Sessions</a></li>
                                    <li className="breadcrumb-item active">Ajouter un Planning</li>
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
                                    Ajouter Planning
                                </h3>
                            </div>
                            <form onSubmit={this.mySubmitHandler} id="formAddFormateur">
                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label htmlFor="Hotel">Titre :</label>
                                                <input type="text" name="titre"
                                                    className={"form-control form-control-sm"}
                                                    value={this.state.titre}
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label >Nom Formateur :</label>


                                                <select className="form-control  form-control-sm"
                                                    name="idFormateur"
                                                    value={this.state.idFormateur}
                                                    onChange={this.handleChange} >
                                                    <option value="">-------------------</option>
                                                    {this.state.formateurs.map((formateur) => (
                                                        <option value={formateur.id}>{formateur.nom}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="Hotel">Date :</label>
                                                <input type="date" name="date"
                                                    className={"form-control  form-control-sm "}
                                                    value={this.state.date}
                                                    onChange={this.handleChange}
                                                />
                                            </div></div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="Hotel">Horaire du début :</label>
                                                <input type="time" name="heureDebut"
                                                    className={"form-control  form-control-sm"}
                                                    value={this.state.heureDebut}
                                                    onChange={this.handleChange}
                                                />
                                                </div></div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="Hotel">Horaire du fin :</label>
                                                <input type="time" name="heureFin"
                                                    className={"form-control form-control-sm "}
                                                    value={this.state.heureFin}
                                                    onChange={this.handleChange}
                                                />
                                               </div></div>









                                    </div>

                                </div>
                                <div className="card-footer">
                                    <div class="row">
                                        <div class="col-lg-4"></div>
                                        <div className="col-lg-4">
                                            <button type="submit" className="btn btn-primary btn-block">Ajouter
                                            </button>
                                        </div>
                                        <div class="col-lg-4"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        )
    }

};

export default AjouterPlanning;
