import React from 'react';

const CallToAction = () => {
	//                                <img className="cta-two__icon dimon-icon-data" src="/assets/images/cta2_icon_01.webp"/>
		//                                                                <i className="cta-one__icon dimon-icon-data1"></i>
        return (
            <section className="cta-one">
                <img src="/assets/images/background/cta-one-bg.png" className="cta-one__bg" alt="Awesome Image" />
                <div className="container">
                    <img src="/assets/images/mocs/cta-moc-1-1.png" className="cta-one__moc" alt="Awesome Image" />
                    <div className="row justify-content-lg-end">
                        <div className="col-lg-6">
                            <div className="cta-one__content">
				<img className="cta-two__icon dimon-icon-data" src="/assets/images/cta2_icon_01.webp"/>
                                <div className="block-title text-left">
                                    <h2 className="block-title__title">Design Is <span>King</span>. Quality Above All.
                                    </h2>
                                </div>
                                <div className="cta-one__text">
                                    <p>We obsess over visuals, clarity, and craft to build striking websites that stand apart and run clean.</p>
                                </div>
                                <ul className="list-unstyled">
                                    <li><i className="fa fa-check"></i>Built for brands that refuse to look average</li>
                                    <li><i className="fa fa-check"></i>Comfortable where most developers back out
                                    </li>
                                    <li><i className="fa fa-check"></i>We lead with visuals, not templates.
                                    </li>
                                </ul>
                                <a href="#contact_us_singularity" className="thm-btn"><span>Get Started</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default CallToAction;
