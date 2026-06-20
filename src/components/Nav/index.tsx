'use client';

import React, { Component } from "react";

export default class NavOne extends Component<any, any> {
  menuButtonRef: React.RefObject<HTMLButtonElement>;

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.menuButtonRef = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.menuOpen !== this.state.menuOpen) {
      this.updateBodyScroll();

      if (typeof document !== "undefined") {
        if (this.state.menuOpen) {
          document.addEventListener("keydown", this.handleKeyDown);
          this.menuButtonRef.current?.focus();
        } else {
          document.removeEventListener("keydown", this.handleKeyDown);
        }
      }
    }
  }

  componentWillUnmount() {
    if (typeof document !== "undefined") {
      document.body.classList.remove("mobile-nav-open");
      document.removeEventListener("keydown", this.handleKeyDown);
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

  handleKeyDown = (event) => {
    if (event.key === "Escape") {
      this.closeMenu();
      return;
    }

    if (event.key !== "Tab" || !this.state.menuOpen || typeof document === "undefined") {
      return;
    }

    const focusableElements = [
      this.menuButtonRef.current,
      ...Array.from(document.querySelectorAll("#primary-navigation a")),
    ].filter(Boolean) as HTMLElement[];

    if (!focusableElements.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
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
        href: "/contact",
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
      <header
        className={`site-header site-header__header-one nav-container ${
          this.state.menuOpen ? "is-mobile-menu-open" : ""
        }`}
      >
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
                aria-label={this.state.menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={this.state.menuOpen}
                aria-controls="primary-navigation"
                onClick={this.toggleMenu}
                ref={this.menuButtonRef}
              >
                <span className={`fa ${this.state.menuOpen ? "fa-times" : "fa-bars"}`}></span>
              </button>
            </div>
            <div
              id="primary-navigation"
              className={`main-navigation ${this.state.menuOpen ? "is-open" : ""}`}
            >
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
