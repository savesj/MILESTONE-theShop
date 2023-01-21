import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'



const Register =() =>{


    const [user, setUser] = useState({
        username : "",
        email : "",
        password : ""
    });

    //Inputs
    const handleInput = (event) =>{
        let name = event.target.name;
        let value = event.target.value;


        setUser({...user, [name]:value});
    }

//Handle Submit

const handleSubmit = async(event) =>{
    event.preventDefault();
    //Store Object Data
    const{username, email, password} = user;
    
    try {
        const res = await fetch('http://localhost:5000/register', {
            method : "POST",
            body : JSON.stringify({
            username, email, password
            }),
            headers : {
                "Content-Type" : "application/json"
            },
                      
        })

        const json = res.json()
        if(res.status === 400 || !res){
            console.log(json)
            window.alert("Use different credentials. Already in use")
        }else{
            window.alert("Sucessfull Registration ");
            console.log(json);
            window.History.pushState('/login');
        }
        
    } catch (error) {
        console.log(error);
        
    }
}

  return (
    <div>
    <Navbar/>
  <section id="registration" className="background-radial-gradient overflow-hidden">

  <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0">
        <h1 className="my-5 display-5 fw-bold ls-tight">
          The best offer <br />
          <span>for your business</span>
        </h1>
        <p className="mb-4 opacity-70">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Temporibus, expedita iusto veniam atque, magni tempora mollitia
          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
          ab ipsum nisi dolorem modi. Quos?
        </p>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

        <div className="card bg-glass">
          <div className="card-body px-4 py-5 px-md-5">
            <form onSubmit={handleSubmit} method="POST">
 
              <div className="row">
                {/* <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    
                    <input type="text" id="form3Example1" className="form-control" />
                    <label className="form-label" for="form3Example1">Name</label>
                  </div>
                </div> */}
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input 
                    type="text" 
                    id="form3Example2" 
                    className="form-control"
                    name="username"
                    value={user.username}
                    onChange={handleInput}
                     />
                    <label className="form-label" for="form3Example2">Full Name</label>
                  </div>
                </div>
              </div>

              <div className="form-outline mb-4">
                <input 
                    type="email"
                    id="form3Example3" 
                    className="form-control"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                 />
                <label className="form-label" for="form3Example3">Email address</label>
              </div>

              <div className="form-outline mb-4">
                <input 
                    type="password" 
                    id="form3Example4" 
                    className="form-control" 
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    />
                <label className="form-label" for="form3Example4">Password</label>
              </div>

              <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                <label className="form-check-label" for="form2Example33">
                  Subscribe to our newsletter
                </label>
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign up
              </button>

              <div className="text-center">
                <p>or sign up with:</p>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="bi bi-facebook"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="bi bi-google"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="bi bi-twitter"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="bi bi-github"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
            
    </div>
  )
}

export default Register