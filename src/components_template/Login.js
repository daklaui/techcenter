import React from 'react'

export default function Login({ navigation }) {
  const [username,setUserName]=React.useState();
  const [password,setPassword]=React.useState();
  const  mySubmitHandler = (event) => {
     if(username=="admin" && password=="admin")
     {
       localStorage.setItem("login","admin");
       navigation.navigate('ListeDesFormations')
     }
  }
  return (
    <div className="login-box">
      <div className="login-logo">
        <a href="../../index2.html"><b>Tech</b>Center</a>
      </div>
      {/* /.login-logo */}
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form onSubmit={mySubmitHandler}>
            <div className="input-group mb-3">
              <input
              type="text"
              className="form-control"
              onChange={(e)=>setUserName(e.target.value)}
              placeholder="Username" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
              className="form-control"
               placeholder="Password" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">

              {/* /.col */}
              <div className="col-12">
                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
              </div>
              {/* /.col */}
            </div>
          </form>

          {/* /.social-auth-links */}

        </div>
        {/* /.login-card-body */}
      </div>
    </div>

  )
}
