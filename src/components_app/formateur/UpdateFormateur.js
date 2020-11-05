import React, { Component } from 'react'

import {isEmail,isNumber,isEmpty,isMin,isMax,isValidationPassword}from '../../Global/Validator'
import Swal from 'sweetalert2'
import {getFormateurByCin,modifierFormateurByCin} from "../../Service/FormateurService";

const valide=true;

const validationFormByField = (name,value)=>
{

  switch(name)
  {

    case 'nom':
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

};


class Formateur extends Component
{

 /* componentDidMount() {


  }*/


  async componentDidMount() {
    try {
      let cinParm=this.props.match.params.id;

      let formateur =await getFormateurByCin(cinParm);

      this.setState({nom:formateur.data.nom});
      this.setState({prenom:formateur.data.prenom});
      this.setState({email:formateur.data.email});
      this.setState({date_de_naissance:formateur.data.date_de_naissance});
      this.setState({adresse:formateur.data.adresse});
      this.setState({num_tel:formateur.data.num_tel});
      this.setState({mot_de_passe:formateur.data.mot_de_passe});
      this.setState({cin:formateur.data.cin});
    } catch(err) {}


  }

  constructor(props)
  {
    super(props)
    this.state={
      nom:'',
      prenom :'',
      email :'',
      date_de_naissance :'',
      adresse :'',
      num_tel :'',
      mot_de_passe :'',
      cin :'',
      errors: {
        nom:'',
        prenom :'',
        email :'',
        date_de_naissance :'',
        disabledBtn:'',
        num_tel :'',
        mot_de_passe :'',
        cin :''
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
      errors[key]=validationFormByField(key,this.state[key]);
    });

    if(isValideForm(errors)) {
      errors.disabledBtn =false;

      modifierFormateurByCin(this.props.match.params.id,this.state).then(response=>{
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
      })
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
                  <h1 className="m-0 text-dark">Modifier Formateur</h1>
                </div>{/* /.col */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Modifier formateur</a></li>
                    <li className="breadcrumb-item active">Modifier</li>
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
                    Modifier Formateur
                  </h3>
                </div>
                <form onSubmit={this.mySubmitHandler} id="formAddFormateur">
                  <div className="card-body">

                    <div className="row">
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label htmlFor="Hotel">Nom :</label>
                          <input type="text"
                                 name="nom"
                                 className={errors.nom.length!=0?"form-control form-control-sm "+(errors.nom!=="true"  ? "is-invalid" :"is-valid"):"form-control form-control-sm "}
                                 value={this.state.nom}
                                 onChange={this.handleChange}
                          />
                          {errors.nom!=="true"  &&
                          <span className='error invalid-feedback'>{errors.nom}</span>}
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label >Prenom :</label>
                          <input type="text"
                                 name="prenom"
                                 className={errors.prenom.length!=0? "form-control form-control-sm "+(errors.prenom!=="true"  ? "is-invalid" :"is-valid"):"form-control form-control-sm"}
                                 value={this.state.prenom}
                                 onChange={this.handleChange}
                          />
                          {errors.prenom!=="true"  &&
                          <span className='error invalid-feedback'>{errors.prenom}</span>}
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label >Cin :</label>
                          <input type="text" name="cin"
                                 className={errors.cin.length!=0?"form-control form-control-sm "+(errors.cin!=="true"  ? "is-invalid" :"is-valid"):"form-control form-control-sm"}
                                 value={this.state.cin}
                                 onChange={this.handleChange}
                          />
                          {errors.cin!=="true"  &&
                          <span className='error invalid-feedback'>{errors.cin}</span>}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="Hotel">Date de naissence :</label>
                          <input type="date" name="date_de_naissance"
                                 className={errors.date_de_naissance.length!=0?"form-control form-control-sm "+(errors.date_de_naissance!=="true"  ? "is-invalid" :"is-valid"):"form-control form-control-sm"}
                                 value={this.state.date_de_naissance}
                                 onChange={this.handleChange}
                          />
                          {errors.date_de_naissance!=="true"  &&
                          <span className='error invalid-feedback'>{errors.date_de_naissance}</span>}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="Hotel">Téléphone :</label>
                          <input type="number" name="num_tel"
                                 className={errors.num_tel.length!=0?"form-control form-control-sm "+(errors.num_tel!=="true"  ? "is-invalid" :"is-valid"):"form-control form-control-sm "}
                                 value={this.state.num_tel}
                                 onChange={this.handleChange}
                          />
                          {errors.num_tel!=="true"  &&
                          <span className='error invalid-feedback'>{errors.num_tel}</span>}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="Hotel">Email :</label>
                          <input type="email" name="email"
                                 className={errors.email.length?"form-control form-control-sm "+(errors.email!=="true"  ? "is-invalid" :"is-valid"):"form-control form-control-sm "}
                                 value={this.state.email}
                                 onChange={this.handleChange}
                          />
                          {errors.email!=="true"  &&
                          <span className='error invalid-feedback'>{errors.email}</span>}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="Hotel">Mot de passe :</label>
                          <input type="password" name="mot_de_passe"
                                 className={errors.mot_de_passe.length!=0?"form-control form-control-sm "+(errors.mot_de_passe!=="true"  ? "is-invalid" :"is-valid"):"form-control form-control-sm "}

                                 value={this.state.mot_de_passe}
                                 onChange={this.handleChange}/>
                          {errors.mot_de_passe!=="true"  &&
                          <span className='error invalid-feedback' dangerouslySetInnerHTML={{ __html: errors.mot_de_passe }}></span>}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="Hotel">Adresse :</label>
                          <input type="text" name="adresse" className="form-control form-control-sm"
                                 value={this.state.adresse}
                                 onChange={this.handleChange}
                          />

                        </div>
                      </div>


                    </div>

                  </div>
                  <div className="card-footer">
                    <div class="row">
                      <div class="col-lg-4"></div>
                      <div class="col-lg-4">   <button type="submit" disabled={errors.disabledBtn} class="btn btn-primary btn-block">Modifier</button></div>
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
export default Formateur;