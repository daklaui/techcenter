import { render } from '@testing-library/react';
import React, { Component } from 'react'
import axios from 'axios'
import {add,getData}from '../../Global/Crud'

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
    cin :''

  };
  this.handleChange = this.handleChange.bind(this);
 // this.handleSubmit = this.handleSubmit.bind(this);

}

handleChange(event) {
  this.setState({[event.target.name]: event.target.value});
};

mySubmitHandler = (event) => {
  event.preventDefault();
 /* alert("You are submitting " + this.state.nom);
console.log(this.state);*/
let res = add('/',this.state);
//this.sendDataApi(this.state);

}


   render(){
   
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
                <li className="breadcrumb-item"><a href="#">Gestion des formateurs</a></li>
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
                     className="form-control form-control-sm"
                     value={this.state.nom}
                     onChange={this.handleChange}
                     />
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