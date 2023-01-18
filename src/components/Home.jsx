import React from 'react'

const Home=() => {
  return (
    <div>
        <section id='home'>
            <div className="container-fluid">
                <div className="row d-flex justify-content-start">
                    <div className="col-md-8 mt-5">
                        <h1 className="display-1 fw-bolder mb-4"> Feels the Fresh Business 
                        Perspective</h1>
                        <p className="lead fs-4 mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ex a cumque ipsam fugiat dolorum quae deserunt officiis doloremque repudiandae</p>
                        <div className="buttons">
                            <button className="btn btn-light me-4 rounded-pill px-4 py-2"> REQUEST DEMO</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Home;