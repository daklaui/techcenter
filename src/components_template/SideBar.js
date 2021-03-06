import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
  <a href="index3.html" className="brand-link">
    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">Tech Center</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Admin</a>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
        <li className="nav-item has-treeview menu-open">
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Gestion des formateurs
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link to={"/AjouterFormateur"} activeclassName={"active"}  className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Ajouter un formateur</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/ListeFormateurs"} activeclassName={"active"} className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Liste des formateurs</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Affectation"} activeclassName={"active"} className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Affecter un formateur</p>
              </Link>
            </li>

            
          </ul>
        </li>

        <li className="nav-item has-treeview">
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Gestion des formations
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link to={"/AjouterFormation"} activeclassName={"active"}  className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Ajouter une formation</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/ListeDesFormations"} activeclassName={"active"}  className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Liste des formations</p>
              </Link>
            </li>

          </ul>
        </li>
        
       
        <li className="nav-item has-treeview">
          <a href="#" className="nav-link ">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Gestion des étudiants
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            
            <li className="nav-item">
              <Link to={"/ListeDesEtudiants"} activeclassName={"active"}  className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Liste des étudiants</p>
              </Link>
            </li>
           
          </ul>
        </li>





      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

    )
}
