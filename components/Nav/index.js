import React, { Component } from "react";

export default class NavOne extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    //Mobile Menu
    this.mobileMenu();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true,
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false,
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".menu-toggler");
    let mainNav = document.querySelector(".main-navigation");

    mainNavToggler.addEventListener("click", function () {
      mainNav.style.display =
        mainNav.style.display != "block" ? "block" : "none";
    });
  };

  render() {
    return (
      <header className="site-header site-header__header-one nav-container">
        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
            this.state.sticky ? "stricked-menu stricky-fixed" : ""
          }`}
        >
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <a className="navbar-brand" href="/">
                <img
                  src="/assets/images/resources/logo-dark.png"
                  className="main-logo"
                  width="150"
                  alt="Awesome Image"
                />
              </a>
              <button className="menu-toggler">
                <span className="fa fa-bars"></span>
              </button>
            </div>
            <div className="main-navigation">
              <ul className="one-page-scroll-menu navigation-box">
                <li
                  className={`${
                    this.props.current === "home" ? "current" : ""
                  } scrollToLink`}
                >
                  <a href="/">Home</a>
                </li>
                <li
                  className={`${
                    this.props.current === "contactus" ? "current" : ""
                  } scrollToLink`}
                >
                  <a href="/contactus">Contact Us</a>
                </li>
                <li
                  className={`${
                    this.props.current === "products" ? "current" : ""
                  } scrollToLink`}
                >
                  <a href="/products">Products</a>
                </li>
                <li
                  className={`${
                    this.props.current === "blogs" ? "current" : ""
                  } scrollToLink`}
                >
                  <a href="https://blog.singularityplanet.com/">Blogs</a>
                </li>
              </ul>
            </div>
            <div className="right-side-box d-none">
              {/* for now this will be hidden */}
              <a className="thm-btn header__cta-btn" href="#">
                <span>Login</span>
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
