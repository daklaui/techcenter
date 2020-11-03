import { render } from '@testing-library/react';
import React, { Component } from 'react'
import axios from 'axios'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
const $ = require('jquery')

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]






const valide=true;
const validEmailRegex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // if we have an error string set valid to false
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

class Formateur extends Component
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
          if( validEmailRegex.test(value))
          {
            errors.email =  'Veuillez fournir une adresse électronique valide.';
          }
          else
          {
          errors.email=valide+'';
          }
       
        break; 
        case 'num_tel':
          errors.num_tel = value.length < 8 || value.length > 8 ? 'Veuillez fournir  8 caractères.' :valide+'';
          break;
        case 'mot_de_passe': 
        errors.mot_de_passe = value.length < 8 || value.length > 8 ? 'Veuillez fournir  8 caractères.' :valide+'';
       // errors.mot_de_passe = value.length > 8 ? 'Veuillez fournir au moins 8 caractères.' :valide+'';
        break;
        case 'cin': 
        errors.cin = value.length < 8 || value.length > 8 ? 'Veuillez fournir 8 caractères.' :valide+'';
     //   errors.cin = ? 'Veuillez fournir au moins 8 caractères.' :valide+'';
        break;
        case 'date_de_naissance': 
        errors.date_de_naissance = value.length ==0? 'Ce champ est obligatoire.' :valide+'';
        
        break;
      default:
        break; 
       
  }



  this.setState({errors,[event.target.name]: event.target.value}); 


};



mySubmitHandler = (event) => {
  event.preventDefault();

if(validateForm(this.state.errors)) {
   /* alert("You are submitting " + this.state.nom);
console.log(this.state);*/
//let res = add('/',this.state);
//this.sendDataApi(this.state);
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
              <h1 className="m-0 text-dark">Ajouter Formateur</h1>
            </div>{/* /.col */}
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Ajouter unformateur</a></li>
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
          Ajouter Formateur
        </h3>
      </div>
      <form onSubmit={this.mySubmitHandler}>
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
                <span className='error invalid-feedback'>{errors.mot_de_passe}</span>}  
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
   
          <div className="col-lg-6">
            <div className="form-group">
              <label >Spécialite :</label>
              <Select  isMulti className="form-control-sm" options={options}   closeMenuOnSelect={false} />

            
            </div>
          </div>
         
        </div>
   
      </div>
      <div className="card-footer">
      <div class="row">
                <div class="col-lg-4"></div>
                <div class="col-lg-4">   <button type="submit" class="btn btn-primary btn-block">Ajouter</button></div>
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

export default Formateur;