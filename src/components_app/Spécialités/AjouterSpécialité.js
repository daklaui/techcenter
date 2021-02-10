import React, { Component } from 'react'

import {isEmail,isNumber,isEmpty,isMin,isMax,isValidationPassword}from '../../Global/Validator'
import axios from 'axios'

import Swal from 'sweetalert2'

const  api = axios.create({
    baseURL:'http://localhost:6039'
});
const valide=true;

const validationFormByFiled = (name,value)=>
{

    switch(name)
    {

        case 'nom_du_spécialité':
            if(isMin(value,3)){return valide+''}else{return "Veuillez fournir au moins 4 caractères.";}
            break;
        case 'prenom':
            if(isMin(value,3)){return valide+''}else{return"Veuillez fournir au moins 4 caractères.";}
            break;
        case 'cin':
            if(isNumber(value,8)&&isMin(value,8) && isMax(value,8)){return valide+''}
            else if(isNumber(value)==false){return "Veuillez fournir un numéro valide.";}
            else if(isMin(value,8)==false){return "Veuillez fournir au moins 8 caractères.";}
            else if(isMax(value,8)==false){return "Veuillez fournir au plus 8 caractères.";}
            break;
        case 'date_de_naissance':
            if(isEmpty(value)){return "Ce champ est obligatoire.";}
            else {return valide+'';}
            break;
        case 'num_tel':
            if(isNumber(value,8)&&isMin(value,8) && isMax(value,8)){ return valide+''}
            else if(isNumber(value)==false){return "Veuillez fournir un numéro valide.";}
            else if(isMin(value,8)==false){return "Veuillez fournir au moins 8 caractères.";}
            else if(isMax(value,8)==false){return "Veuillez fournir au plus 8 caractères.";}
            break;
        case 'email':
            if(isEmpty(value)){return "Ce champ est obligatoire.";}
            else if(isEmail(value)==false){return "Veuillez fournir une adresse électronique valide.";}
            else {return valide+'';}
            break;
        case 'mot_de_passe':
            if(isEmpty(value)){return "Ce champ est obligatoire.";}
            else if(isValidationPassword(value)==false)
            {
                let  motDePasseErrorMessage="";
                motDePasseErrorMessage+="Le mot de passe doit contenir au moins 1 caractère alphabétique minuscule <br> ";
                motDePasseErrorMessage+="Le mot de passe doit contenir au moins 1 caractère alphabétique majuscule <br>";
                motDePasseErrorMessage+="Le mot de passe doit contenir au moins 1 caractère numérique <br>";
                motDePasseErrorMessage+="Le mot de passe doit contenir au moins un caractère spécial <br>";
                motDePasseErrorMessage+="Le mot de passe doit contenir 8 caractères ou plus <br>";

                return motDePasseErrorMessage;
            }
            else {return valide+'';}
            break;
    }

}


const isValideForm = (errors) => {
    let valid = true;
    Object.keys(errors).forEach(function(key){
        if(key!="adresse"&& key!="disabledBtn" &&key!="errors")
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
class Spécialité extends Component
{

    constructor(props)
    {
        super(props)
        this.state={
            nom_du_spécialité:'',
            errors: {
                nom_du_spécialité:'',
            }

        };
        this.handleChange = this.handleChange.bind(this);

        // this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChange(event) {

        const { name, value } = event.target;
        let errors = this.state.errors;
        errors[name]= validationFormByFiled(name,value);

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
            errors[key]=validationFormByFiled(key,this.state[key]);

        });

        if(isValideForm(errors)) {
            errors.disabledBtn =false;
            //let res = add(,);
            api.post('/AjoutSpécialité',this.state).then(response=>{
                console.log(response.data);
                if(response.status==200)
                {

                    Swal.fire({
                        icon: 'success',
                        title: response.data,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                else
                {
                    Swal.fire({
                        icon: 'error',
                        title: response.data,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }



            });


        }else{
            errors.disabledBtn =true;
            this.setState({errors});
        }

    }


    render(){
        const {errors} = this.state;
        return (
            <div>
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Ajouter Spécialité</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Ajouter une spécialité</a></li>
                                    <li className="breadcrumb-item active">Ajouter</li>
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
                                    Ajouter une spécialité
                                </h3>
                            </div>
                            <form onSubmit={this.mySubmitHandler} id="formAddEtudiant">
                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-lg-4"></div>
                                        <div className="col-lg-4">
                                            <div className="form-group">
                                                <label htmlFor="Hotel">Nom du spécialité :</label>
                                                <input type="text"
                                                       name="nom_du_spécialité"
                                                       className={errors.nom_du_spécialité.length!=0?"form-control form-control-sm "+(errors.nom_du_spécialité!=="true"  ? "is-invalid" :"is-valid"):"form-control form-control-sm "}
                                                       value={this.state.nom_du_spécialité}
                                                       onChange={this.handleChange}
                                                />
                                                {errors.nom!=="true"  &&
                                                <span className='error invalid-feedback'>{errors.nom_du_spécialité}</span>}
                                            </div>
                                        </div>



                                    </div>

                                </div>
                                <div className="card-footer">
                                    <div class="row">
                                        <div class="col-lg-4"></div>
                                        <div class="col-lg-4">   <button type="submit" disabled={errors.disabledBtn} class="btn btn-primary btn-block">Ajouter</button></div>
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
}
export default Spécialité;