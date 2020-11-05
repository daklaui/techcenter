import React, { Component } from 'react'

class Affectation extends Component
{
    
constructor(props)
{
  super(props)
  this.state={
    titreFormation:'',
    nomFormateur :'',
    saisonFormation :''

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
               <h1 className="m-0 text-dark">Affecter un formateur à une Formation</h1>
             </div>{/* /.col */}
             <div className="col-sm-6">
               <ol className="breadcrumb float-sm-right">
                 <li className="breadcrumb-item"><a href="#">Gestion des formations</a></li>
                 <li className="breadcrumb-item active">Affectation d'un formateur</li>
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
         Affecter Formateur Formation
         </h3>
       </div>
       <form onSubmit={this.mySubmitHandler}>
       <div className="card-body">
     
         <div className="row">
           <div className="col-lg-4">
             <div className="form-group">
               <label >Titre Formation :</label>
                    
            <select className="form-control form-control-sm" >

            </select>
             </div>
           </div>
           <div className="col-lg-4">
             <div className="form-group">
               <label >Nom Formateur :</label>
              
            
            <select className="form-control form-control-sm" >

            </select>
            </div>

           </div>
           

           <div className="col-lg-4">
             <div className="form-group">
               <label >Session :</label>
              
            
            <select className="form-control form-control-sm" >

            </select>
            </div>

           </div>


         </div>
    
       </div>
       <div className="card-footer">
       <div class="row">
                 <div class="col-lg-4"></div>
                 <div class="col-lg-4">   <button type="submit" class="btn btn-primary btn-block">Valider</button></div>
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
 
 export default Affectation;