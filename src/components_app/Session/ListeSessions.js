import React, { Component } from 'react'
import {getSessionByIdFormation,removeSessionById} from  '../../Service/SessionServicey'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import AjouterSession from '../Session/AjouterSession'
import UpdateSession from '../Session/UpdateSession'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
class ListeDesSessions extends Component
{
    componentDidMount()
    {
        const script =document.createElement("script");
        script.src='js/Content.js';
        script.async=true;
        document.body.appendChild(script);
       
    }
    constructor(props)
    {
        super(props);

        this.state = {
            sessions: [],
        selectedComponent:'AjouterSession',
        indexOfObjectToUpdate:''};

        getSessionByIdFormation(this.props.idFormation).then((response) => {
            console.log(response.data);
         if(response.data!=null && response.data!="")
         {
            this.setState({sessions: response.data});
         }
         else
         {
            this.setState({sessions:[]});
         }
            
        });

    }

    updateSession=(id)=>{
        //alert(id);
       this.setState({indexOfObjectToUpdate:id});
       this.setState({selectedComponent:'UpdateSession'});
       /* removeFormationById(id).then(response=>{
            if(response.status==200)
            {
                Swal.fire({
                    icon: 'success',
                    title: response.data,
                    showConfirmButton: false,
                    timer: 1500
                });

                getFormations().then((response) => {
                    this.setState({formations: response.data});
                });
            }
        });*/

    }
    removeSession=(index)=>{
        removeSessionById(this.props.idFormation,index).then(response=>{
            if(response.status==200)
            {
                Swal.fire({
                    icon: 'success',
                    title: response.data,
                    showConfirmButton: false,
                    timer: 1500
                });

             /*   getFormations().then((response) => {
                    this.setState({formations: response.data});
                });*/
            }
        });

    }

    render(){ 
        const switchView = () => {

            switch(this.state.selectedComponent) 
            {
        
              case "AjouterSession":   return   <AjouterSession idFormation={this.props.idFormation}></AjouterSession>;
              case "UpdateSession":   return <UpdateSession idFormation={this.props.idFormation}  indexOfObjectToUpdate={this.state.indexOfObjectToUpdate}></UpdateSession>;
            }
          }
        
        
        return  (
        <div>
        

            <div className="row">
      
            <div className="col-lg-4">

            { switchView() }
            </div>


                <div className="col-lg-8">
                    <table className="table table-bordered table-striped table-sm" id="example2">
                        <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Date debut</th>
                            <th>Date fin</th>
                            <th>Max nombre des places</th>
                            <th>#</th>
                        </tr>
                        </thead>
                        <tbody>
                      { this.state.sessions.map((session) => (
                            <tr>
                                <td>{session.nom_du_session}</td>
                                <td>{session.date_de_début}</td>
                                <td >{session.date_de_fin}</td>
                                <td >{session.nb_places}</td>
                                <td> 
                                    <button type="button" onClick={()=>this.updateSession(session.id)}  className="btn btn-warning btn-sm">   <i class="fas fa-edit"></i> Modifier </button>
                                    <button type="button" onClick={()=>this.removeSession(session.id)}  className="btn btn-danger btn-sm"> <i class="fas fa-trash-alt"></i> Supprimer</button>
                                    <Link to={"/AddPlanning/"+session.id} className="btn btn-info btn-sm">
                                    <i class="fas fa-trash-alt"></i> Ajouter planning
                                    </Link>
                                </td>
                                </tr>
                        ))}

                        </tbody>
                    </table>



                </div>
            </div>

        </div>
    )
    }
}

export default  ListeDesSessions ;