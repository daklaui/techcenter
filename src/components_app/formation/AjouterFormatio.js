import React, { Component } from 'react'
import Select from 'react-select'
import { isEmpty, isMin } from '../../Global/Validator'
import { ajouterFormation ,uploadeImage} from '../../Service/FormationService'
import $ from 'jquery'
import Swal from 'sweetalert2'
const options = [
  { value: '', label: '*****************' },
  { value: 'Débutant', label: 'Débutant' },
  { value: 'Intermédiaire', label: 'Intermédiaire' },
  { value: 'Expert', label: 'Expert' }
]
const options2 = [
  { value: '', label: '*****************' },
  { value: 'React', label: 'React' },
  { value: 'Spring Boot', label: 'Spring Boot' },
  { value: 'MongoDB', label: 'MongoDB' }
]
const valide = true;

const validationFormByFiled = (name, value) => {
  switch (name) {
    case 'titre':
      if (isMin(value, 3)) { return valide + '' } else { return "Veuillez fournir au moins 4 caractères."; }
      break;
    case 'description':
      if (isMin(value, 20)) { return valide + '' } else { return "Veuillez fournir au moins 21 caractères."; }
      break;
  
  }
}

const isValideForm = (errors) => {
  let valid = true;
  Object.keys(errors).forEach(function (key) {
    if (key != "disabledBtn" && key != "errors") {
      if (errors[key] != "true") {
        valid = false;
        return valid;
      }
    }
  });

  return valid;

}




class Formation extends Component {



  componentDidMount() {
    // Call select2 on your node
    /*const script =document.createElement("script");
    script.src='js/Content.js';
    script.async=true;
    document.body.appendChild(script);
    
    var self = this;
    var node = this.refs.myRef; // or this.refs['myRef']
   
    $(".select2").on('change', function() {
        // this ensures the change via select2 triggers 
        // the state change for your component 
        self.handleChange();
      });*/
  }

  constructor(props) {
    super(props)
    this.state = {
      titre: '',
      description: '',
      file: null,
      selectedFile: null,
      errors: {
        titre: '',
        description: '',
      
        disabledBtn: ''
      }

    };
    this.handleChange = this.handleChange.bind(this);
    this.fileImportChange = this.fileImportChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

  }


  mySubmitHandler = (event) => {
    event.preventDefault();



      const formData = new FormData();  
      formData.append( 
        "file", 
        this.state.selectedFile, 
        this.state.selectedFile.name 
      ); 
     


      uploadeImage(formData,null).then(data=>{
        if(data.status==200)
        {
          const formation={
            "titre":this.state.titre,
            "description":this.state.description,
            "image":data.data
          }
           // errors.disabledBtn =false;
      ajouterFormation(formation).then(response => {
        if (response.status == 200) {

          Swal.fire({
            icon: 'success',
            title: response.data,
            showConfirmButton: false,
            timer: 1500
          })
        }
        else {
          Swal.fire({
            icon: 'error',
            title: response.data,
            showConfirmButton: false,
            timer: 1500
          })
        }
      });
        }
      })
     
  

  }

  handleChange(event) {

    const { name, value } = event.target;
    let errors = this.state.errors;
    errors[name] = validationFormByFiled(name, value);
    this.setState({ errors, [event.target.name]: event.target.value });
  };

  fileImportChange(event)
  {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
    this.setState({ selectedFile: event.target.files[0] }); 
  }

  
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
  render() {
    const { errors } = this.state;
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

          <div className="col-lg-12">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">
                  Ajouter Formation
         </h3>
              </div>
              <form onSubmit={this.mySubmitHandler}>
                <div className="card-body">

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label >Titre :</label>
                        <input type="text"
                          name="titre"
                          className={errors.titre.length != 0 ? "form-control form-control-sm " + (errors.titre !== "true" ? "is-invalid" : "is-valid") : "form-control form-control-sm "}
                          value={this.state.titre}
                          onChange={this.handleChange}
                        />

                        {errors.titre !== "true" && <span className='error invalid-feedback'>{errors.titre}</span>}
                      </div>


                      <div className="form-group">
                        <label >Description :</label>
                        <textarea
                          className={errors.description.length != 0 ? "form-control form-control-sm " + (errors.description !== "true" ? "is-invalid" : "is-valid") : "form-control form-control-sm "}
                          rows="9"
                          name="description"
                          placeholder="Enter ..."
                          value={this.state.description}
                          onChange={this.handleChange} />

                        {errors.description !== "true" && <span className='error invalid-feedback'>{errors.description}</span>}
                      </div>



                    </div>
                    <div class="col-lg-6">
                      <input type="file" onChange={this.fileImportChange} />
                      <img class="img-thumbnail" src={this.state.file} />
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

        </div>
      </div>
    )
  }

};

export default Formation;