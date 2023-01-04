import BoldsBreaksAndSpans from "components/BoldsBreaksAndSpans";
import "./style.module.scss";

export default function PricingTable({ title, subtitle, choices }) {
  return (
    <section className="pricing-one pricing-table-container" id="pricing">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            <BoldsBreaksAndSpans BBS={title} />
          </h2>
        </div>
        <p className="subtitle">{subtitle}</p>
        <div className="tabed-content">
          <div id="year" style={{ display: "block" }}>
            <div className="row pricing-one__price-row">
              {choices ? (
                choices.map((choice, i) => {
                  return (
                    <div
                      className={`price-choice-container col-lg-4 wow fadeIn${
                        i % 2 === 0 ? "Up" : "Down" //If i is even add calss FadeInUp. If  i is odd add class FadeInDown
                      }`}
                      data-wow-duration="1500ms"
                    >
                      <div className="pricing-one__single text-center">
                        <h3>${choice.price}</h3>
                        <p>{choice.name}</p>

                        {choice.features ? (
                          <ul className="list-unstyled">
                            {choice.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        ) : (
                          <></>
                        )}
                        {choice.button ? (
                          <a
                            href={choice.button.href}
                            className="thm-btn pricing-one__btn"
                          >
                            <span>{choice.button.title}</span>
                          </a>
                        ) : (
                          <></>
                        )}
                        {choice.tagline ? (
                          <span className="tag-line">{choice.tagline}</span>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
