import React, { Component } from 'react'
import Select from 'react-select'
import {isEmpty,isMin}from '../../Global/Validator'
import $ from 'jquery'
import { modifierFormationById,getFormationById } from '../../Service/FormationService'

import ListeDesSessions from '../Session/ListeSessions'
import Swal from 'sweetalert2'
const options = [
    { value: '', label: '*****************' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const valide=true;

const validationFormByFiled = (name,value)=> 
{
  switch(name)
  {
    case 'titre':
    if(isMin(value,3)){return valide+''}else{return "Veuillez fournir au moins 4 caractères.";}
    break; 
    case 'description':
    if(isMin(value,20)){return valide+''}else{return"Veuillez fournir au moins 21 caractères.";}
    break; 
    case 'matier':
      if(isEmpty(value)){return "Ce champ est obligatoire.";}
      else {return valide+'';}
    break; 
    case 'niveau':
      if(isEmpty(value)){return "Ce champ est obligatoire.";}
      else {return valide+'';}
     break; 
  }
}

const isValideForm = (errors) => {
  let valid = true;
  Object.keys(errors).forEach(function(key){
   if(key!="disabledBtn" &&key!="errors")
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




class UpdateFormation extends Component
{
    

  async componentDidMount() {  
    try {
      let id=this.props.match.params.id;
      
      let formation =await getFormationById(id);

       this.setState({titre:formation.data.titre});
       this.setState({description:formation.data.description});
       this.setState({matier:formation.data.matier});
       this.setState({niveau:formation.data.niveau});
    } catch(err) {}

 
}

constructor(props)
{
  super(props)
  this.state={
    titre:'',
    description :'',
    matier :'',
    niveau :'',
    errors:{
      titre:'',
      description :'',
      matier :'',
      niveau :'',
      disabledBtn:''
    }

  };
  this.handleChange = this.handleChange.bind(this);
 // this.handleSubmit = this.handleSubmit.bind(this);

}


mySubmitHandler = (event) => {
  event.preventDefault();

let errors = this.state.errors;

Object.keys(this.state).forEach(key => {
  errors[key]=validationFormByFiled(key,this.state[key]);
});
console.log(this.state);
if(isValideForm(errors)) {
  modifierFormationById(this.props.match.params.id,this.state).then(response=>{
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

handleChange(event) {

  const { name, value } = event.target;
  let errors = this.state.errors;
  errors[name]= validationFormByFiled(name,value);
this.setState({errors,[event.target.name]: event.target.value}); 
  };
  /*handleChangeSelectOptionNiveau = niveau => {
    this.setState(
      { niveau },
      () => console.log(`Option selected:`, this.state.niveau)
    );
  };
  handleChangeSelectOptionMatier = matiers => {

  let errors = this.state.errors;
  errors[matiers]= validationFormByFiled(matiers,this.state.matiers);
    this.setState(
      {errors, matiers },
      () => console.log(`Option selected:`, this.state.matiers)
    );
  };*/
render(){
  const {errors} = this.state;
  const{idFormationFromUpdate}=this.props.match.params.id;
  console.log(this.props.match.params.id);
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
     
 <div class="row">
 <div class="col-md-12">
            <div class="card">
              <div class="card-header p-2">
                <ul class="nav nav-pills">
                  <li class="nav-item"><a class="nav-link active" href="#modifierFormation" data-toggle="tab">Modifier formation</a></li>
                  <li class="nav-item"><a class="nav-link" href="#ajouterSession" data-toggle="tab">Ajouter session</a></li>
    
                </ul>
              </div>
              <div class="card-body">
                <div class="tab-content">
                  <div class="active tab-pane" id="modifierFormation">
                  <div className="row">
           
           <div className="col-lg-12">
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
                              name="titre" 
                              className={errors.titre.length!=0?"form-control form-control-sm "+(errors.titre!=="true"  ? "is-invalid" :"is-valid"):"form-control form-control-sm "}
                              value={this.state.titre}
                              onChange={this.handleChange}
                              />
        
        {errors.titre!=="true"  && <span className='error invalid-feedback'>{errors.titre}</span>}  
                     </div>
        
                    
                     <div className="form-group">
                       <label htmlFor="Hotel">Niveau</label>
                       <select  
                       name="niveau" 
                       className={errors.niveau.length!=0?"form-control form-control-sm "+(errors.niveau!=="true"  ? "is-invalid" :"is-valid"):"form-control form-control-sm "}
                       style={{width: "100%"}}
                       value={this.state.niveau}
                       onChange={this.handleChange} >
                        {options.map((option)=>(
                             <option value={option.value}>{option.label}</option>
                        ))}
                      
                      
                       </select>
                       {errors.niveau!=="true"  && <span className='error invalid-feedback'>{errors.niveau}</span>}  
                     </div>
                 
        
                     <div className="form-group">
                       <label htmlFor="Hotel">Matiers</label>
                       <select  
                       name="matier" 
                       multpile
                       className={errors.matier.length!=0?"form-control form-control-sm "+(errors.matier!=="true"  ? "is-invalid" :"is-valid"):"form-control form-control-sm "}
                       style={{width: "100%"}}
                       value={this.state.matier}
                       onChange={this.handleChange} >
                        {options.map((option,i)=>(
                             <option value={option.value}>{option.label}</option>
                        ))}
                      
                      
                       </select>
                       {errors.matier!=="true"  && <span className='error invalid-feedback'>{errors.matier}</span>}  
                     </div>
                   </div>
                   <div className="col-lg-8">
                     <div className="form-group">
                       <label >Description :</label> 
                      <textarea 
                     className={errors.description.length!=0?"form-control form-control-sm "+(errors.description!=="true"  ? "is-invalid" :"is-valid"):"form-control form-control-sm "}
                      rows="9" 
                      name="description"
                      placeholder="Enter ..." 
                      value={this.state.description}  
                      onChange={this.handleChange}/> 
                 
        {errors.description!=="true"  && <span className='error invalid-feedback'>{errors.description}</span>}  
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
        
         </div>

                  </div>
                  <div class="tab-pane" id="ajouterSession">

                  <ListeDesSessions idFormation={this.props.match.params.id}></ListeDesSessions>

          

                  </div>
                </div>
          
              </div>
            </div>
        
          </div>
 </div>
 
 
 
 </div>
     )
 }
 
 };
 
 export default UpdateFormation;