import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const Faq = () => {
  return (
    <div className="service-area bg-color area-padding-2">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-service text-service services-title">
              <h2>
                Best <span className="color-text-bold">services</span> for clients
              </h2>
              <p>
                Our consultants opt in to the projects they genuinely want to work on.
              </p>
              <a className="left-btn coin-btn" href="services.html">
                All Services
              </a>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-service wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-icon">
                <img src="img/icon/s1.png" alt=""/>
              </div>
              <div className="service-inner">
                <div className="service-content">
                  <h4>Nfts Product</h4>
                  <p>
                    Aspernatur sit adipisci neque Redug Lagre dolor. consultants opt in to the projects
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-service text-service wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-icon">
                <img src="img/icon/s2.png" alt=""/>
              </div>
              <div className="service-inner">
                <div className="service-content">
                  <h4>Stacking</h4>
                  <p>
                    Aspernatur sit adipisci neque Redug Lagre dolor. consultants opt in to the projects
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-service wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-icon">
                <img src="img/icon/s3.png" alt=""/>
              </div>
              <div className="service-inner">
                <div className="service-content">
                  <h4>Launchpad</h4>
                  <p> 
                    Aspernatur sit adipisci neque Redug Lagre dolor. consultants opt in to the projects
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-service wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-icon">
                <img src="img/icon/s4.png" alt=""/>
              </div>
              <div className="service-inner">
                <div className="service-content">
                  <h4>Ecommerce solutions</h4>
                  <p> 
                    Aspernatur sit adipisci neque Redug Lagre dolor. consultants opt in to the projects
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-service wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-icon">
                <img src="img/icon/s5.png" alt=""/>
              </div>
              <div className="service-inner">
                <div className="service-content">
                  <h4>Token release</h4>
                  <p> 
                    Aspernatur sit adipisci neque Redug Lagre dolor. consultants opt in to the projects
                  </p>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Faq;
