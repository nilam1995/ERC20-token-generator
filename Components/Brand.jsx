import React from "react";

const Brand = () => {
  return (
    <div className="brand-area bg-color-3">
      <div className="container">
        <div className="row">
          <div className="new_margin col-xl-12 col-lg-12 col-md-12">
            <div className="new_flex brand-content">
              {[1,2,3,4,5,6,7].map((image, i ) => (
                <div className="single-brand-item">
                  <a>
                    <img className="new_image_with"
                      src={`img/brand/${i+1}.png`} alt=""/>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Brand;
