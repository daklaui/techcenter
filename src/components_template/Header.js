import React from 'react'

export default function Header({navigation}) {
  const  logout = (event) => {
    localStorage.removeItem("login"); 
    window.location.reload();
 }
    return (
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
  </ul>
  <ul className="navbar-nav ml-auto">
    {/* User Account: style can be found in dropdown.less */}
    <li className="dropdown user user-menu">
    <button type="button" className="btn btn-default btn-flat" onClick={logout}>Sign out</button>
    </li>
  </ul>
</nav>

    )
}
