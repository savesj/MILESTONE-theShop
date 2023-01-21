import React from "react";

function Pricing() {
  return (
    <div>
      <section id="pricing">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center">Pricing</h3>
              <h1 className="display-6 text-center mb-4">
                <b>YOU pick.</b>
              </h1>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3 border-1">
                
                <div className="card-body" >
                  <h5 className="card-title mb-3 fs-4 fw-bold text-center">Basic</h5>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><i className="bi bi-check-circle text-primary"></i> An item</li>
                  <li className="list-group-item"><i className="bi bi-check-circle text-primary"></i> A second item</li>
                  <li className="list-group-item"><i className="bi bi-check-circle text-primary"></i> A third item</li>
                  <li className="list-group-item"><i className="bi bi-x-circle-fill text-primary"></i> A third item</li>
                  <li className="list-group-item"><i className="bi bi-x-circle-fill text-primary"></i> A third item</li>
                  <li className="list-group-item"><i className="bi bi-x-circle-fill text-primary"></i> A third item</li>
                </ul>
                <div className="card-body">
                 <a href="/#contact" className="nav-item btn btn-outline-primary ms-auto px-4 rounded-pill" role="button">Choose Plan</a>
                </div>
              </div>
            </div>
             <div className="col-md-4">
              <div className="card p-3 border-1">
                
                <div className="card-body">
                  <h5 className="card-title mb-3 fs-4 fw-bold text-center">Gold</h5>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><i className="bi bi-check-circle text-primary"></i> An item</li>
                  <li className="list-group-item"><i className="bi bi-check-circle text-primary"></i> A second item</li>
                  <li className="list-group-item"><i className="bi bi-check-circle text-primary"></i> A third item</li>
                  <li className="list-group-item"><i className="bi bi-check-circle text-primary"></i> A third item</li>
                  <li className="list-group-item"><i className="bi bi-x-circle-fill text-primary"></i> A third item</li>
                  <li className="list-group-item"><i className="bi bi-x-circle-fill text-primary"></i> A third item</li>  
                </ul>
                <div className="card-body">
                  <a href="/#contact" className="nav-item btn btn-outline-primary ms-auto px-4 rounded-pill" role="button">Choose Plan</a>
                </div>
              </div>
            </div>
             <div className="col-md-4 card border-1r" id="bestplan">
              <div className="card p-3 border-1">
                
                <div className="card-body" >
                  <h5 className="card-title mb-3 fs-4 fw-bold text-center">Platinum</h5>
                  <p className="card-text lead">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><i className="bi bi-check-circle text-primary"></i> An item</li>
                  <li className="list-group-item"><i className="bi bi-check-circle text-primary"></i> A second item</li>
                  <li className="list-group-item"><i className="bi bi-check-circle text-primary"></i> A third item</li>
                  <li className="list-group-item"><i className="bi bi-check-circle text-primary"></i> A third item</li>
                  <li className="list-group-item"><i className="bi bi-check-circle text-primary"></i> A third item</li>
                  <li className="list-group-item"><i className="bi bi-check-circle text-primary"></i> A third item</li>
                </ul>
                <div className="card-body align">
                  <a href="/#contact" className="btn btn-primary ms-auto px-4 rounded-pill" role="button">Choose Plan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
