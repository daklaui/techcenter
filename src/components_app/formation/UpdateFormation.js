import React, { Component } from 'react'

class UpdateFormation extends Component
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
               <h1 className="m-0 text-dark">Modifier Formation</h1>
             </div>{/* /.col */}
             <div className="col-sm-6">
               <ol className="breadcrumb float-sm-right">
                 <li className="breadcrumb-item"><a href="#">Gestion des formations</a></li>
                 <li className="breadcrumb-item active">Modifier Formation</li>
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
           Modifier Formation
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
                 <div class="col-lg-4">   <button type="submit" class="btn btn-primary btn-block">Modifier</button></div>
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
 
 export default UpdateFormation;