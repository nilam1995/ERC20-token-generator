import React from "react";

const Footer = () => {
  const coinList = [
    "Ripple coin",
    "Bitcoin",
    "Ethereum",
    "Light coin",
    "Coin base",
    "Skill card",
  ];

  const menuList = [
    {
      name:"Home",
      link:"/",
    },
    {
      name:"ERC20",
      link:"#",
    },
    {
      name:"Contact Us",
      link:"#",
    },
    {
      name:"Blog",
      link:"#",
    },
    {
      name:"Detail",
      link:"#",
    },
  ];
  

  return(
    <footer class="footer1">
      <div class="footer-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-4">
              <div class="footer-content logo-footer">
                <div class="footer-head">
                  <div class="footer-logo">
                    <a href ="#">
                      <img src="img/logo/logo2.png" alt=""/>
                    </a>
                  </div>
                  <div class="footer-icons">
                    <ul>
                      {[1,2,3,4,5].map((social,i) => (
                        <li key={i}>
                          <a href="#">
                            <img src={`img/about/midsea${i+1}.png`} alt="" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4">
              <div class="footer-content rs-mar-0">
                <div class="fooetr-head">
                  <h4>Payment option</h4>
                  <ul class="footer-list">
                    {coinList.map((coin,i) => (
                      <li key={i}>
                        <a>{coin}</a>
                      </li>
                    ))}
                  </ul>
                  <ul class="footer-list">
                    {menuList.map((menu,i) => (
                      <li key={i}>
                        <a href={menu.link}>{menu.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4">
              <div class="footer-content last-content rs-mar-0">
                <div class="footer-head">
                  <h4>Subscribe</h4>
                  <p>
                    Are you looking for professional advice for your new buisness. Are you looking for professional advice.
                  </p>
                  <div class="subs-feilds">
                    <div class="subs-feilds">
                      <div class="subscribe-input">
                        <input
                          type="email"
                          class="email form-control width-80"
                          id="sus_email"
                          placeholder="Type Email"
                        />
                        <button
                          type="submit"
                          id="sus_submit"
                          class="subs-btn coin-btn">
                            Subscribe
                          </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-area-bottom">
          <div class="container">
            <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="copyright">
                <p>
                  Copyright @ 2023
                  <a href="#">
                    @NilamSawant
                  </a>
                  All Rights Reserved
                </p>
              </div>   
            </div>
            <div class=" col-xl-6 col-lg-6 col-md-6">
              <div class="footer-menu">
                <ul>
                  {["About","Terms & Condition", "Privacy"].map((el,i)=>(
                    <li key={i}>
                      <a>{el}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
