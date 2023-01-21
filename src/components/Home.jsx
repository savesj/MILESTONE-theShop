import React from 'react'
import Contact from './Contact';
import Features from './Features';
import Pricing from './Pricing';
import About from './About';
import Services from './Services';
import Navbar from './Navbar';

const Home=() => {
  return (
    <div>
        <Navbar/>
        <section id='home'>
            <div className="container-flex">
                <div className="row d-flex justify-content-start">
                    <div className="col-md-6">
                        <h1 className="display-1 fw-bolder mb-4">
                            <p> Managment</p> made for You
                        </h1>
                        <p className="lead fs-4 mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ex a cumque ipsam fugiat dolorum quae deserunt officiis doloremque repudiandae</p>
                        <div className="buttons">
                            <a href="/#contact" className="btn btn-light me-4 rounded-pill px-4 py-2"> REQUEST DEMO</a>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                    <div className="img">
                        <img id='dashboard' src="/assets/dashboardMain.png" alt="dashboardM" className="img-flui"/>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <Services/>
        <Features/>
        <Pricing/>
        <About/>
        <Contact/>
    </div>
  );
};

export default Home;