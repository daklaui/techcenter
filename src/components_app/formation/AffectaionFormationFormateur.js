import React, { Component } from 'react'
import { getUsers, affecterFormateur } from '../../Service/FormateurService'
import { getFormations } from '../../Service/FormationService'
import { getSessionByIdFormation } from '../../Service/SessionServicey'
import Swal from 'sweetalert2'
class Affectation extends Component {

  constructor(props) {


    super(props)
    this.state = {
      titreFormation: '',
      nomFormateur: '',
      sessionFormation: '',
      formateurs: [],
      formations: [],
      sessions: []
    };

    getUsers().then((response) => {
      this.setState({ formateurs: response.data });
    });
    getFormations().then((response) => {
      this.setState({ formations: response.data });
    });

    this.handleChange = this.handleChange.bind(this);
    this.SetValueListeSessions = this.SetValueListeSessions.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);

    const affecter = {
      "idSession": this.state.sessionFormation,
      "idFormateur": this.state.nomFormateur
    }

    affecterFormateur(affecter).then(response => {

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
  handleChange(event) {
    console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value });
  };


  SetValueListeSessions(event) {

    getSessionByIdFormation(event.target.value).then((response) => {
      if (response.data != "" && response.data != null) {
        this.setState({ sessions: response.data });
      }
      else {
        this.setState({ sessions: [] });
      }

    });

  }

  render() {

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
                  Affecter un formateur à une Formation
         </h3>
              </div>
              <form onSubmit={this.mySubmitHandler}>
                <div className="card-body">

                  <div className="row">

                    <div className="col-lg-4">
                      <div className="form-group">
                        <label >Nom Formateur :</label>


                        <select className="form-control form-control-sm"
                          name="nomFormateur"
                          value={this.state.nomFormateur}
                          onChange={this.handleChange} >
                          <option value="">-------------------</option>
                          {this.state.formateurs.map((formateur) => (
                            <option value={formateur.id}>{formateur.nom}</option>
                          ))}
                        </select>
                      </div>

                    </div>


                    <div className="col-lg-4">
                      <div className="form-group">
                        <label >Titre Formation :</label>

                        <select className="form-control form-control-sm"
                          name="titreFormation"
                          value={this.state.titreFormation}
                          onChange={(e) => { this.SetValueListeSessions(e); this.handleChange(e) }}
                        >
                          <option value="">-------------------</option>
                          {this.state.formations.map((formation) => (
                            <option value={formation.id}>{formation.titre}</option>
                          ))}

                        </select>
                      </div>
                    </div>


                    <div className="col-lg-4">
                      <div className="form-group">
                        <label >Session :</label>


                        <select className="form-control form-control-sm"
                          name="sessionFormation"
                          value={this.state.sessionFormation}
                          onChange={this.handleChange}>
                          <option value="">-------------------</option>
                          {this.state.sessions.map((session) => (
                            <option value={session.id}>{session.nom_du_session}</option>
                          ))}


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