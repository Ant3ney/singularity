import React, { Component } from "react";

export default class Video extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    let props = this.props;
    let { thumbnail, id } = props;
    return (
      <section className="video-one" id="video">
        <img
          src="/assets/images/background/video-one-bg.png"
          alt="Awesome Image"
          className="video-one__bg"
        />
        <div className="container wow fadeInUp" data-wow-duration="1500ms">
          <div className="video-one__box ">
            <img src={thumbnail} alt="" />
            <div className="video-one__content">
              {this.state.isOpen && (
                <div className="video-modal" role="dialog" aria-modal="true">
                  <button className="video-modal__close" type="button" onClick={this.closeModal}>
                    Close
                  </button>
                  <iframe
                    title="Development video"
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              )}
              <button
                type="button"
                onClick={this.openModal}
                className="video-popup video-one__btn"
              >
                <i className="fa fa-play"></i>
              </button>

              <h2 className="video-one__title">
                Watch <span>Development</span> <br /> In Action!
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
