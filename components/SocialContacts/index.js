import "./style.module.scss";
import {
  faLinkedinIn,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BoldsBreaksAndSpans from "components/BoldsBreaksAndSpans";

export default function MakeDeal({ mt, title }) {
  return (
    <section
      className={`social-contacts service-one ${mt ? "mt-20" : ""}`}
      id="features"
    >
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            {title ? <BoldsBreaksAndSpans BBS={title} /> : <></>}
          </h2>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="service-one__single text-center linkedin">
              <div className="service-one__inner">
                <a href="https://www.linkedin.com/groups/14010152/">
                  <i className="service-one__icon">
                    <FontAwesomeIcon
                      className="local-icon"
                      icon={faLinkedinIn}
                    />
                  </i>
                </a>
                <h3>
                  <a href="https://www.linkedin.com/groups/14010152/">
                    Linkedin
                  </a>
                </h3>
                <a
                  href="https://www.linkedin.com/groups/14010152/"
                  className="service-one__link"
                  target="_blank"
                >
                  <i className="dimon-icon-right-arrow"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown"
            data-wow-duration="1500ms"
          >
            <div className="service-one__single text-center upwork">
              <div className="service-one__inner">
                <a href="https://www.upwork.com/freelancers/~01f89baf7c07759e9d">
                  <i className="service-one__icon">
                    <img
                      className="local-icon"
                      src="/assets/icons/upwork-icon.svg"
                    />
                  </i>
                </a>
                <h3>
                  <a href="https://www.upwork.com/freelancers/~01f89baf7c07759e9d">
                    Upwork
                  </a>
                </h3>
                <a
                  href="https://www.upwork.com/freelancers/~01f89baf7c07759e9d"
                  className="service-one__link"
                >
                  <i className="dimon-icon-right-arrow"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="service-one__single text-center facebook">
              <div className="service-one__inner">
                <a href="https://www.facebook.com/singularitydevelopment">
                  <i className="service-one__icon">
                    <FontAwesomeIcon
                      className="local-icon"
                      icon={faFacebookF}
                    />
                  </i>
                </a>
                <h3>
                  <a href="https://www.facebook.com/singularitydevelopment">
                    Facebook
                  </a>
                </h3>
                <a
                  href="https://www.facebook.com/singularitydevelopment"
                  className="service-one__link"
                  target="_blank"
                >
                  <i className="dimon-icon-right-arrow"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="service-one__single text-center instagram">
              <div className="service-one__inner">
                <a href="https://www.instagram.com/singularity_development/">
                  <i className="service-one__icon">
                    <FontAwesomeIcon
                      className="local-icon"
                      icon={faInstagram}
                    />
                  </i>
                </a>
                <h3>
                  <a href="https://www.instagram.com/singularity_development/">
                    Instagram
                  </a>
                </h3>
                <a
                  href="https://www.instagram.com/singularity_development/"
                  className="service-one__link"
                  target="_blank"
                >
                  <i className="dimon-icon-right-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
