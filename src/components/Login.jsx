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
  const{email, password} = user;

  try{
    const res = await fetch('login', {
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
        <div class="container-fluid py-5">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-md-9 col-lg-6 col-xl-5  py-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid" alt="Sample image"/>
            </div>
          <div class="col-md-8 col-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit} method="POST">

            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3  py-5">Sign in with</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="bi bi-facebook"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="bi bi-twitter"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="bi bi-linkedin"></i>
            </button>
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <div class="form-outline mb-4">
            
            <input 
            type="email" 
            id="form3Example3" 
            className="form-control form-control-lg"
            name="email"
            value={user.email}
            onChange={handleChange}
            />

            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          <div class="form-outline mb-3">
            <input 
            type="password" 
            id="form3Example4" 
            className="form-control form-control-lg"
            name="password"
            value={user.password}
            onChange={handleChange} />
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg">Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register"
                class="link-danger">Register</a></p>
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
