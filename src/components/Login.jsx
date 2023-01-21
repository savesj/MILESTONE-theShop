import React, { useState } from "react";
import Footer from "./Footer";



const Login = () => {

    const [user, setUser] = useState({
      email : "",
      password : ""
});

//Handle Input

const handleChange = (event) =>{
  let name = event.target.name
  let value = event.target.value

   setUser({...user, [name]:value});
}

//handle login

const handleSubmit = async (event) =>{
  event.preventDefault();
  console.log("hello i was clicked")
  const{email, password} = user;

  try{
    const res = await fetch('http://localhost:5000/login', {
      method : "POST",
      body : JSON.stringify({
        email, password
      }),
      headers : {
        "Content-Type" : "application/json"
      },
      
    });

    const json = res.json()
    if(res.status === 400 || !res){
      console.log(json)
      window.alert("Invalid Credentials")
    }else{
      window.alert("Logged In");
      console.log(json);
      window.location.href='/dashboard';

    }

  } catch(error) {
    console.log(error);

  }
}

  return (
    <div>
      <section id="login">
        <div className="container-fluid py-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-9 col-lg-6 col-xl-5  py-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid" alt="Sample image"/>
            </div>
          <div className="col-md-8 col-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit} method="POST">

            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-normal mb-0 me-3  py-5">Sign in with</p>
            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="bi bi-facebook"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="bi bi-twitter"></i>
            </button>

            <button type="button" className="btn btn-primary btn-floating mx-1">
              <i className="bi bi-linkedin"></i>
            </button>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <div className="form-outline mb-4">
            
            <input 
            type="email" 
            id="form3Example3" 
            className="form-control form-control-lg"
            name="email"
            value={user.email}
            onChange={handleChange}
            />

            <label className="form-label" htmlFor="form3Example3">Email address</label>
          </div>

          <div className="form-outline mb-3">
            <input 
            type="password" 
            id="form3Example4" 
            className="form-control form-control-lg"
            name="password"
            value={user.password}
            onChange={handleChange} />
            <label className="form-label" htmlFor="form3Example4">Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <input  type="submit" value="Login" className="btn btn-primary btn-lg" />
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register"
                className="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
    </section>
    <Footer/>
    </div>
    
  );
}

export default Login;
