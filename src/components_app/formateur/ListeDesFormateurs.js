import React, { Component } from 'react'
import axios from 'axios'
const api = axios.create({
  baseURL:'http://localhost:6039'
});

class ListeDesFormateurs extends Component
{



componentDidMount()
{
  const script =document.createElement("script");
  script.src='js/Content.js';
  script.async=true;
  document.body.appendChild(script);
}

constructor()
{
  super();
  api.get('/ListedesFormateurs').then(res=>{
    console.log(res.data);

  });
}

  render(){
    
  
  return (
    <div>
        <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0 text-dark">Liste des Formateurs</h1>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Gestion des formateurs</a></li>
            <li className="breadcrumb-item active">Liste des formateurs</li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>


  <div className="row">
<div className="col-lg-12">
<table className="table table-bordered table-striped table-sm" id="example2">
<thead>
<tr>
  <th>Cin</th>
  <th>Nom et Prénom</th>
  <th>Date de naissance</th>
  <th>Action</th>
</tr>
</thead>
<tbody>
<tr>
  <td>07228689</td>
  <td>Med Hakim Trabelsi</td>
  <td>10/12/1998</td>
  <td>
    <div className="margin">
      <button type="submit" className="btn btn-info btn-sm"><i class="fas fa-info-circle"></i> Voir Details</button>
      <button type="submit" className="btn btn-warning btn-sm"><i class="fas fa-edit"></i> Modifier</button>
      <button type="submit" className="btn btn-danger btn-sm"> <i class="fas fa-trash-alt"></i>Supprimer</button>
      </div>
      </td>
</tr>

</tbody>
</table>


</div>
</div>

    </div>
)
  }
}

export default  ListeDesFormateurs;
