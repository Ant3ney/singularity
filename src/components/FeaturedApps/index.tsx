'use client';

import React from "react";
import BoldsBreaksAndSpans from "components/BoldsBreaksAndSpans";

const FeaturedApps = ({ featureds, title }) => {
  return (
    <section className="featured-apps-container blog-one">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            <BoldsBreaksAndSpans BBS={title} />
          </h2>
        </div>
        <div className="row">
          {featureds ? (
            featureds.map((featured, i) => {
              return (
                <div
                  key={i}
                  className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                >
                  <div className="blog-one__single">
                    <div className="blog-one__image">
                      <img src={featured.img} alt="Site built by us" />
                      <a
                        className="blog-one__more-link"
                        target="_blank"
                        href={featured.link}
                      >
                        <i className="fa fa-link"></i>
                      </a>
                    </div>
                    <div className="blog-one__content">
                      <h3 className="blog-one__title">
                        <a
                          target="_blank"
                          href={featured.link}
                        >
                          <BoldsBreaksAndSpans BBS={featured.title} />
                        </a>
                      </h3>
                      <p>{featured.description}</p>
                    </div>
                  </div>
                  {/* space-02.png */}
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};
export default FeaturedApps;
