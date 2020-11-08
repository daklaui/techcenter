
  switch(name)
  {
  
    case 'nom':
    if(isMin(value,3)){errors.nom=valide+''}else{errors.nom="Veuillez fournir au moins 4 caractères.";}
    break; 
    case 'prenom':
    if(isMin(value,3)){errors.prenom=valide+''}else{errors.prenom="Veuillez fournir au moins 4 caractères.";}
    break; 
    case 'cin':
     if(isNumber(value,8)&&isMin(value,8) && isMax(value,8)){errors.cin=valide+''}
     else if(isNumber(value)==false){errors.cin="Veuillez fournir un numéro valide.";}
     else if(isMin(value,8)==false){errors.cin="Veuillez fournir au moins 8 caractères.";}
     else if(isMax(value,8)==false){errors.cin="Veuillez fournir au plus 8 caractères.";}
    break; 
    case 'date_de_naissance':
      if(isEmpty(value)){errors.date_de_naissance="Ce champ est obligatoire.";}
      else {errors.date_de_naissance=valide+'';}
     break; 
     case 'num_tel':
      if(isNumber(value,8)&&isMin(value,8) && isMax(value,8)){errors.num_tel=valide+''}
      else if(isNumber(value)==false){errors.num_tel="Veuillez fournir un numéro valide.";}
      else if(isMin(value,8)==false){errors.num_tel="Veuillez fournir au moins 8 caractères.";}
      else if(isMax(value,8)==false){errors.num_tel="Veuillez fournir au plus 8 caractères.";}
     break; 
     case 'email':
      if(isEmpty(value)){errors.email="Ce champ est obligatoire.";}
      else if(isEmail(value)==false){errors.email="Veuillez fournir une adresse électronique valide.";}
      else {errors.email=valide+'';}
     break;
     case 'mot_de_passe':
      if(isEmpty(value)){errors.mot_de_passe="Ce champ est obligatoire.";}
      else if(isValidationPassword(value)==false)
      {
        errors.mot_de_passe="";
        errors.mot_de_passe+="Le mot de passe doit contenir au moins 1 caractère alphabétique minuscule <br> ";
        errors.mot_de_passe+="Le mot de passe doit contenir au moins 1 caractère alphabétique majuscule <br>";
        errors.mot_de_passe+="Le mot de passe doit contenir au moins 1 caractère numérique <br>";
        errors.mot_de_passe+="Le mot de passe doit contenir au moins un caractère spécial <br>";
        errors.mot_de_passe+="Le mot de passe doit contenir 8 caractères ou plus <br>";
    }
      else {errors.mot_de_passe=valide+'';}
     break;  
  }
  import React, { Component } from 'react'

  class Formation extends Component
  {
      
  constructor(props)
  {
    super(props)
    this.state={
      Titre:'',
      Categorie :'',
      NombreHeureFormation :'',
      DateDebut :'',
      DateFin :'',
      Formatuers :'',
      PrixFormation :'',
      MotsCle :''
  
    };
    this.handleChange = this.handleChange.bind(this);
   // this.handleSubmit = this.handleSubmit.bind(this);
  
  }
  handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    };
    
  render(){
     
      return (
   <div>
           <div className="content-header">
           <div className="container-fluid">
             <div className="row mb-2">
               <div className="col-sm-6">
                 <h1 className="m-0 text-dark">Ajouter Formation</h1>
               </div>{/* /.col */}
               <div className="col-sm-6">
                 <ol className="breadcrumb float-sm-right">
                   <li className="breadcrumb-item"><a href="#">Gestion des formations</a></li>
                   <li className="breadcrumb-item active">Ajouter Formation</li>
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
             Ajouter Formation
           </h3>
         </div>
         <form onSubmit={this.mySubmitHandler}>
         <div className="card-body">
       
           <div className="row">
             <div className="col-lg-4">
               <div className="form-group">
                 <label >Titre :</label>
                 <input type="text" 
                        name="Titre" 
                        className="form-control form-control-sm"
                        value={this.state.Titre}
                        onChange={this.handleChange}
                        />
               </div>
             </div>
             <div className="col-lg-4">
               <div className="form-group">
                 <label >Categorie :</label>
                
              
              <select className="form-control form-control-sm" >
  
              </select>
              </div>
  
             </div>
             <div className="col-lg-4">
               <div className="form-group">
                 <label >Nombre  Heures formation :</label>
                 <input type="Number" name="NombreHeureFormation" className="form-control form-control-sm" 
                 value={this.state.NombreHeureFormation}
                 onChange={this.handleChange}
                 />
               </div>
             </div>
             <div className="col-lg-6">
               <div className="form-group">
                 <label htmlFor="Hotel">Date de debut :</label>
                 <input type="date" name="DateDebut" className="form-control form-control-sm"
                 value={this.state.DateDebut}
                 onChange={this.handleChange}
                 />
               </div>
             </div>
  
             <div className="col-lg-6">
               <div className="form-group">
                 <label htmlFor="Hotel">Date de Fin :</label>
                 <input type="date" name="DateFin" className="form-control form-control-sm"
                 value={this.state.DateFin}
                 onChange={this.handleChange}
                 />
               </div>
             </div>
  
             <div className="col-lg-4">
               <div className="form-group">
                 <label >Formateur :</label>
                
              
              <select className="form-control form-control-sm" >
  
              </select>
              </div>
  
             </div>
  
             <div className="col-lg-4">
               <div className="form-group">
                 <label >Prix :</label>
                 <input type="Number" name="PrixFormation" className="form-control form-control-sm" 
                 value={this.state.PrixFormation}
                 onChange={this.handleChange}
                 />
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
   
   export default Formation;