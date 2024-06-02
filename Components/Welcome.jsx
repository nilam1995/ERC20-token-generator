import React from "react";

const Welcome = () => {
  return (
    <div className="welcome-area bg-color-4 fix area-padding-2">
      <div className="container">
        <div className="row d-flex flex-wrap align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="well-services forst-well wow fadeInUp" data-wow-delay="0.3s">
                  <div className="services-img">
                    <a className="big-icon" href="#">
                      <img src="img/icon/t1.png" alt=""/>
                    </a>
                  </div>
                  <div className="main-sel">
                    <div className="wel-content">
                      <h4>Latest Technology</h4>
                      <p>
                        Aspernature sit adijhxdf zhbdfjs mzhdf zjhfd hdgf bxdhf hgdfyg
                      </p>
                    </div>
                  </div>
                </div>
                <div className="well-services second-well wow fadeInUp" data-wow-delay="0.7s">
                  <div className="services-img">
                    <a className="big-icon" href="#">
                      <img src="img/icon/t2.png" alt=""/>
                    </a>
                  </div>
                  <div className="main-wel">
                    <div className="wel-content">
                      <h4>Certik Certified</h4>
                      <p>
                        Aspernatur sit adipisci neque Redug Lagre dolor. consultants opt in to the projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="well-services three-well wow fadeInUp" data-wow-delay="0.5s">
                  <div className="services-img">
                    <a className="big-icon" href="#">
                      <img src="img/icon/t3.png" alt=""/>
                    </a>
                  </div>
                  <div className="main-wel">
                    <div className="wel-content">
                      <h4>Minning Plateform</h4>
                      <p>
                        Aspernatur sit adipisci neque Redug Lagre dolor. consultants opt in to the projects
                      </p>
                    </div>
                  </div>
                </div>
                <div className="well-services four-well wow fadeInUp" data-wow-delay="0.5s">
                  <div className="services-img">
                    <a className="big-icon" href="#">
                      <img src="img/icon/t4.png" alt=""/>
                    </a>
                  </div>
                  <div className="main-wel">
                    <div className="wel-content">
                      <h4>Metaverse Blockchain</h4>
                      <p>
                        Aspernatur sit adipisci neque Redug Lagre dolor. consultants opt in to the projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="well-service-text">
              <div className="top-text-title">Ultimate Metaverse</div>
              <h2 className="main-title">
                {" "}
                <span className="color-text-bold">Blockchain</span>
                provide you best services
              </h2>
              <p>
                Our blockchain opt in to the projects they genuinely want to work on.maintains the amount of lines. when replacing a selection. help agencies to define. define their new buisness objectives and then our consultants opt in to the projects they genuinely want to work on. maintains the amount of lines. When replacing a selection. help agencies to define. define their new business objectives and then business objectives and then our consultants
              </p>
              <a className="service-btn coin-btn" href="/">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Welcome;
