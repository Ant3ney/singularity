import React, { Component } from "react";

export default class NavOne extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.menuOpen !== this.state.menuOpen) {
      this.updateBodyScroll();
    }
  }

  componentWillUnmount() {
    if (typeof document !== "undefined") {
      document.body.classList.remove("mobile-nav-open");
    }
  }

  updateBodyScroll = () => {
    if (typeof document === "undefined") return;

    document.body.classList.toggle("mobile-nav-open", this.state.menuOpen);
  };

  toggleMenu = () => {
    this.setState((state) => ({
      menuOpen: !state.menuOpen,
    }));
  };

  closeMenu = () => {
    this.setState({
      menuOpen: false,
    });
  };

  render() {
    const navigationItems = [
      {
        id: "home",
        label: "Home",
        href: "/",
      },
      {
        id: "videos",
        label: "Videos",
        href: "https://www.youtube.com/@singularitydevelopment2317/",
        external: true,
      },
      {
        id: "contactus",
        label: "Contact",
        href: "#contact_us_singularity",
      },
      {
        id: "Catalog",
        label: "Catalog",
        href: "https://drive.google.com/file/d/1jBFygNbXB_x6a8H4buEXGxqf9MM0_LHd/view",
        external: true,
      },
      {
        id: "blogs",
        label: "Blog",
        href: "https://blogs.singularityplanet.com/",
        external: true,
      },
    ];

    return (
      <header className="site-header site-header__header-one nav-container">
        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation ${
            this.state.menuOpen ? "is-menu-open" : ""
          }`}
        >
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <a className="navbar-brand" href="/" aria-label="Singularity home">
                <img
                  src="/assets/images/resources/logo-dark.png"
                  className="main-logo"
                  width="150"
                  alt="Singularity"
                />
              </a>
              <button
                className={`menu-toggler ${this.state.menuOpen ? "is-open" : ""}`}
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={this.state.menuOpen}
                onClick={this.toggleMenu}
              >
                <span className="fa fa-bars"></span>
              </button>
            </div>
            <div className={`main-navigation ${this.state.menuOpen ? "is-open" : ""}`}>
              <ul className="one-page-scroll-menu navigation-box">
                {navigationItems.map((item) => (
                  <li
                    key={item.id}
                    className={`${
                      this.props.current === item.id ? "current" : ""
                    } scrollToLink`}
                  >
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      onClick={this.closeMenu}
                    >
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
