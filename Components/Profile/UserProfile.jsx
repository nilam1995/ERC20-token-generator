import React from "react";
import { BSBoxArrowRight } from "react-icons/bs";
import { ArrowRight } from 'react-bootstrap-icons';

const UserProfile = () => {
  return (
    <div class="page-area bread-pd">
      <div class="breadcumb-overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="bread-bg">
                <div class="breadcrumb-title">
                  <h2>User Profile</h2>
                  <div class="bread-come">
                    <nav aria-label="breadcrumb">
                      <ol class="breadcrumb">
                        <li class="breadcrumb-items">
                          <a class="black-text" href= "#">
                           Home
                          </a>
                          <span className="new_profile_space">
                            {/* <BSBoxArrowRight /> */}
                            <ArrowRight/>
                          </span>
                        </li>
                        <li class="breadcrumb-items">
                          <a class="black-text" href="#">
                            User Profile
                          </a>
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  
};

export default UserProfile;
