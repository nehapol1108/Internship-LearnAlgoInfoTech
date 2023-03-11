import React from "react";
// import Login from "../../pages/Login";

export default function Navbar() {
  const MobileToggle = () => {
    var mobileTogggle = document.getElementById("mobileTogl");
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("navbar-mobile");
    mobileTogggle.classList.toggle("bi-list");
    mobileTogggle.classList.toggle("bi-x");
  };

  const HideNavbar = () => {
    var navbar = document.getElementById("navbar");
    if (navbar.classList.contains("navbar-mobile")) {
      navbar.classList.remove("navbar-mobile");
      var mobileTogggle = document.getElementById("mobileTogl");
      mobileTogggle.classList.toggle("bi-list");
      mobileTogggle.classList.toggle("bi-x");
    }
  };

 
  return (
    <>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="/">
              Transaction Website<span></span>
            </a>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a
                  className="nav-link scrollto"
                  onClick={HideNavbar}
                  href="/"
                >
                  <i className="bi bi-house"></i>Home
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  onClick={HideNavbar}
                  href="#hero"
                >
                  <i className="bi bi-info-circle"></i> About us
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  onClick={HideNavbar}
                  href="/#transaction"
                >
                  <i className="bi bi-coin"></i> Transaction
                </a>
              </li>
             
              <li>
                <a
                  className="nav-link scrollto"
                  onClick={HideNavbar}
                  href="/customers"
                >
                  <i className="bi bi-people"></i> Customers
                </a>
              </li>
              <li>
                <a
                  className="nav-link scrollto"
                  onClick={HideNavbar}
                  href="#footer"
                >
                  <i className="bi bi-phone"></i> Contact us
                </a>
              </li>
              {/* <li><a className="nav-link scrollto" onClick={HideNavbar} href="#services"><i className="bi bi-eye"></i>Views</a></li> */}
             
             
             
            </ul>
            <i
              className="bi bi-list mobile-nav-toggle"
              id="mobileTogl"
              onClick={MobileToggle}
            ></i>
          </nav>
        </div>
      </header>
    </>
  );
}
