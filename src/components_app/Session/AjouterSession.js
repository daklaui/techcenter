import React, { Component } from 'react'
import Select from 'react-select'
import {isNumber,isEmpty,isMin}from '../../Global/Validator'
import { ajouterSession } from '../../Service/SessionServicey'
import axios from 'axios'

import Swal from 'sweetalert2'

const valide=true;

const validationFormByField = (name,value)=>
{

    switch(name)
    {

        case 'nom_du_session':
            if(isMin(value,3)){return valide+''}else{return "Veuillez fournir au moins 4 caractères.";}
            break;
        case 'nb_places':
            if(isNumber(value)){return valide+''}else{return"Veuillez fournir un numéro valide.";}
            break;
        case 'date_de_début':
            if(isEmpty(value)){return "Ce champ est obligatoire.";}
            else {return valide+'';}
            break;
        case 'date_de_fin':
            if(isEmpty(value)){return "Ce champ est obligatoire.";}
            else {return valide+'';}
            break;
    }

}


const isValideForm = (errors) => {
    let valid = true;
    Object.keys(errors).forEach(function(key){
        if( key!="disabledBtn" &&key!="errors")
        {
            if(errors[key]!="true")
            {
                valid=false;
                return valid;
            }
        }
    });

    return valid;

}
class AjouterSession extends Component
{


    constructor(props)
    {
        super(props)
        this.state={
            nom_du_session:'',
            nb_places :'',
            date_de_début :'',
            date_de_fin :'',
            
            errors: {
                nom_du_session:'',
                nb_places :'',
                date_de_début :'',
                date_de_fin :''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChange(event) {

        const { name, value } = event.target;
        let errors = this.state.errors;
        errors[name]= validationFormByField(name,value);

        if(isValideForm(errors)) {
            errors.disabledBtn =false;
        }else{
            errors.disabledBtn =true;
        }

        this.setState({errors,[event.target.name]: event.target.value});

    };



    mySubmitHandler = (event) => {
        event.preventDefault();

        let errors = this.state.errors;
        Object.keys(this.state).forEach(key => {
            errors[key] = validationFormByField(key, this.state[key]);

        });

        if (isValideForm(errors)) {
            errors.disabledBtn = false;
            //let res = add(,);
            console.log(this.state);
            ajouterSession(this.state,this.props.idFormation).then(response => {
                if (response.status == 200) {

                    Swal.fire({
                        icon: 'success',
                        title: response.data,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    window.location.reload();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: response.data,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }


            });


        } else {
            errors.disabledBtn = true;
            this.setState({errors});
        }
        ;
    };


    render(){
        const {errors} = this.state;
        return (
            <div>
                <div className="row">

                    <div className="col-lg-12">
                        <div className="card card-primary">
                            <div className="card-header">
                                <h3 className="card-title">
                                    Ajouter Session
                                </h3>
                            </div>
                            <form onSubmit={this.mySubmitHandler} >
                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="Hotel">Titre :</label>
                                                <input type="text"
                                                       name="nom_du_session"
                                                       className={errors.nom_du_session.length!=0?"form-control form-control-sm "+(errors.nom_du_session!=="true"  ? "is-invalid" :"is-valid"):"form-control form-control-sm "}
                                                       value={this.state.nom_du_session}
                                                       onChange={this.handleChange}
                                                />
                                                {errors.nom_du_session!=="true"  &&
                                                <span className='error invalid-feedback'>{errors.nom_du_session}</span>}
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label >Nombre des places :</label>
                                                <input type="number"
                                                       name="nb_places"
                                                       className={errors.nb_places.length!=0? "form-control form-control-sm "+(errors.nb_places!=="true"  ? "is-invalid" :"is-valid"):"form-control form-control-sm"}
                                                       value={this.state.nb_places}
                                                       onChange={this.handleChange}
                                                />
                                                {errors.nb_places!=="true"  &&
                                                <span className='error invalid-feedback'>{errors.nb_places}</span>}
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label >Date debut :</label>
                                                <input type="date" name="date_de_début"
                                                       className={errors.date_de_début.length!=0?"form-control form-control-sm "+(errors.date_de_début!=="true"  ? "is-invalid" :"is-valid"):"form-control form-control-sm"}
                                                       value={this.state.date_de_début}
                                                       onChange={this.handleChange}
                                                />
                                                {errors.date_de_début!=="true"  &&
                                                <span className='error invalid-feedback'>{errors.date_de_début}</span>}
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label htmlFor="Hotel">Date fin :</label>
                                                <input type="date" name="date_de_fin"
                                                       className={errors.date_de_fin.length!=0?"form-control form-control-sm "+(errors.date_de_fin!=="true"  ? "is-invalid" :"is-valid"):"form-control form-control-sm"}
                                                       value={this.state.date_de_fin}
                                                       onChange={this.handleChange}
                                                />
                                                {errors.date_de_fin!=="true"  &&
                                                <span className='error invalid-feedback'>{errors.date_de_fin}</span>}
                                            </div>
                                        </div>
                                        
                                      
                                        
                                      

                                      
                                    </div>

                                </div>
                                <div className="card-footer">
                                    <div class="row">
                                        <div class="col-lg-4"></div>
                                        <div className="col-lg-4">
                                            <button type="submit" disabled={errors.disabledBtn}  className="btn btn-primary btn-block">Ajouter
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

export default AjouterSession;