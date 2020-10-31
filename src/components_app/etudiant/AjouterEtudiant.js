import React, { Component } from 'react'
import {add,getData}from '../../Global/Crud'
import Validator from 'react-forms-validator';
const valide=true;
const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }
  class Etudiant extends Component
{

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
     
      num_tel :'',
      mot_de_passe :'',
      
      cin :''
    }

  };
  this.handleChange = this.handleChange.bind(this);

 // this.handleSubmit = this.handleSubmit.bind(this);

}

handleChange(event) {
  //this.setState({[event.target.name]: event.target.value});
  const { name, value } = event.target;
  let errors = this.state.errors;
  
switch(name)
{
  case 'nom':
      if(value.length==0)
      {
        errors.nom='Ce champ est obligatoire.';
      }
      else
      {
        errors.nom=valide+'';
      }

      if(value.length<3)
      {
        errors.nom='Veuillez fournir au moins 3 caractères.';
      }
      else
      {
        errors.nom=valide+'';
      }
      break;
      case 'prenom':
        if(value.length==0)
      {
        errors.prenom='Ce champ est obligatoire.';
      }
      else
      {
        errors.prenom=valide+'';
      }

      if(value.length<3)
      {
        errors.prenom='Veuillez fournir au moins 3 caractères.';
      }
      else
      {
        errors.prenom=valide+'';
      }
      break;  

      case 'email':
      errors.email = validEmailRegex.test(value)?  'Veuillez fournir une adresse électronique valide.':valide+'';
      break; 
      case 'mot_de_passe': 
      errors.mot_de_passe = value.length < 8 ? 'Veuillez fournir au plus 8 caractères.' :valide+'';
      errors.mot_de_passe = value.length > 8 ? 'Veuillez fournir au moins 8 caractères.' :valide+'';
      break;
      case 'cin': 
      errors.cin = value.length < 8 ? 'Veuillez fournir au plus 8 caractères.' :valide+'';
      errors.cin = value.length > 8 ? 'Veuillez fournir au moins 8 caractères.' :valide+'';
      break;
      case 'date_de_naissance': 
      errors.date_de_naissance = value.length ==0? 'Ce champ est obligatoire.' :valide+'';
      
      break;
    default:
      break; 
     
}
this.setState({errors,[event.target.name]: event.target.value}); 
console.log(errors);
};




mySubmitHandler = (event) => {
  event.preventDefault();
 
 /* alert("You are submitting " + this.state.nom);
console.log(this.state);*/
//let res = add('/',this.state);
//this.sendDataApi(this.state);
if(validateForm(this.state.errors)) {
  console.info('Valid Form')
}else{
  console.error('Invalid Form')
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
      <form onSubmit={this.mySubmitHandler} noValidate>
      <div className="card-body">
     
      <div className="row">
          <div className="col-lg-4">
            <div className="form-group">
              <label htmlFor="Hotel">Nom :</label>
              <input type="text" 
                     name="nom" 
                     className={"form-control form-control-sm "+(errors.nom!=="true"  ? "is-invalid" :"is-valid")}
                     value={this.state.nom}
                     onChange={this.handleChange}
                     noValidate
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
                    className="form-control form-control-sm" 
                    value={this.state.prenom}
                    onChange={this.handleChange}
                    />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label >Cin :</label>
              <input type="text" name="cin" className="form-control form-control-sm" 
              value={this.state.cin}
              onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label htmlFor="Hotel">Date de naissence :</label>
              <input type="date" name="date_de_naissance" className="form-control form-control-sm"
              value={this.state.date_de_naissance}
              onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label htmlFor="Hotel">Téléphone :</label>
              <input type="number" name="num_tel" className="form-control form-control-sm" 
               value={this.state.num_tel}
               onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label htmlFor="Hotel">Email :</label>
              <input type="email" name="email" className="form-control form-control-sm"
                 value={this.state.email}
                 onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label htmlFor="Hotel">Adresse :</label>
              <input type="text" name="adresse" className="form-control form-control-sm"
               value={this.state.adresse}
               onChange={this.handleChange}
              />
            </div>
          </div>
   
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="Hotel">Login :</label>
              <input type="text" name="login" className="form-control form-control-sm"
              
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label htmlFor="Hotel">Mot de passe :</label>
              <input type="password" name="mot_de_passe" className="form-control form-control-sm"
              
              value={this.state.mot_de_passe}
              onChange={this.handleChange}/>
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
      </form>
    </div>
  </div>
  <div className="col-lg-2"></div>
</div>
        </div>
    )
}
}
export default Etudiant;