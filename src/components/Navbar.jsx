import React from "react";
import Logo from './WrenchLogo.png'

const Navbar =() =>{
    return (
        <div>
                <nav class="navbar navbar-expand-lg navbar-light shadow">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={Logo} alt="Bootstrap" width="30" height="24"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#"> SERVICES</a>
        </li>
          <li class="nav-item">
            <a class="nav-link" href="#"> FEATURES</a>
        </li>
          <li class="nav-item">
            <a class="nav-link" href="#"> PRICING</a>
        </li>
          <li class="nav-item">
            <a class="nav-link" href="#"> ABOUT US</a>
        </li>
          <li class="nav-item">
            <a class="nav-link" href="#"> CONTACT US</a>
        </li>

      </ul>
      {/*LOGIN-REGISTER BUTTOMS*/}
      <button className="btn btn-outline-primary ms-auto px-4 rounded-pill">LOGIN</button>
      <button className="btn btn-outline-primary ms-2 px-4 rounded-pill">REGISTER</button>  
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;