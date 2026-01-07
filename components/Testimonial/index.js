import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import PlaceHolderProfile from "./PlaceholderProfile";

const Testimonial = () => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <section className="testimonials-container testimonials-one">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            What Our <span>Clients</span> Say <br /> About Us.
          </h2>
        </div>
        <div className="testimonials-one__carousel-outer">
          <div className="testimonials-one__carousel">
            <Swiper getSwiper={setSwiper}>
              <div className="item">
                <div className="testimonials-one__single">
                  <div className="testimonials-one__inner">
                    <p>
                      Great work! Happy with the final product. <br />
                      Anthony Cavuoti was always available when I needed him.{" "}
                      <br />
                      Can't get any better than this.
                    </p>
                    <h3>Joseph Ingles</h3>
                    <span>Our Client</span>
                    <img
                      src="/assets/images/resources/testi-1-1.png"
                      alt="Portrait of Joseph Ingles"
                    />
                  </div>
                </div>
              </div>
	      {/* Pastor Greg - Centinela Bible Chruch */}
	      <div className="item">
                <div className="testimonials-one__single">
                  <div className="testimonials-one__inner">
                    <p>
                      Anthony was great to work with.<br />
                      He is bright, personable,{" "}
                      <br />
                      and really knows how to build websites.
                    </p>
                    <h3>Pastor Greg</h3>
                    <span>Our Client</span>
                    <img
                      src="/assets/images/resources/testi-1-2.png"
                      alt="Portrait of Pastor Greg"
                    />
                  </div>
                </div>
              </div>

	      {/* Victor Diaz - Collaboration Partner */}
	      <div className="item">
                <div className="testimonials-one__single">
                  <div className="testimonials-one__inner">
                    <p>
                      Working with anthony had been a pleasure.<br />
                      When I think of a team mate, the first person I want on my team is Anthony.
                      <br />
                      Currently I am trying to become ceo at a company just to hire him.
                    </p>
                    <h3>Victor Diaz</h3>
                    <span>Collaboration Partner</span>
                    <img
                      src="/assets/images/resources/testi-1-3.png"
                      alt="Portrait of Victor Diaz"
                    />
                  </div>
                </div>
              </div>

              <div className="item">
                <div className={`testimonials-one__single`}>
                  <div className="testimonials-one__inner">
                    <p className={`testimonial-text shrink-text-on-small`}>
                      Anthony is an absolute prodigy to work with. He pulled off
                      very difficult tasks and did so with tremendous ease. I
                      was constantly amazed by some of his creative solutions.
                      He was easy to work with and finished the work beyond my
                      expectations.
                    </p>
                    <h3>Adam D</h3>
                    <span>Upwork Client</span>
                    <PlaceHolderProfile>A</PlaceHolderProfile>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonials-one__single">
                  <div className="testimonials-one__inner">
                    <p>
                      Anthony was great to work with and very knowledgeable.
                      Helped me out in a pinch to get a project caught up.{" "}
                      <br />
                      Greatly appreciate his work.
                    </p>
                    <h3>Stephen Dask</h3>
                    <span>Upwork Client</span>
                    <PlaceHolderProfile>S</PlaceHolderProfile>
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
          <div className="testimonials-one__carousel__shape-one"></div>
          <div className="testimonials-one__carousel__shape-two"></div>
          <div className="testimonials-one__nav">
            <div onClick={goPrev} className="testimonials-one__nav-left">
              <i className="dimon-icon-left-arrow"></i>
            </div>
            <div onClick={goNext} className="testimonials-one__nav-right">
              <i className="dimon-icon-right-arrow"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
