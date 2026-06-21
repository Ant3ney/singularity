import React from 'react';

const CallToActionTwo = () => {
	//                                
        return (
            <section className="cta-two">
                <div className="container">
                    <img src="/assets/images/mocs/cta-moc-2-1.png" className="cta-two__moc" alt="Awesome Image" />
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="cta-two__content">
                                <img className="cta-two__icon dimon-icon-data" src="/assets/images/cta2_icon_01.webp"/>
                                <div className="block-title text-left">
                                    <h2 className="block-title__title">We are <span>serious</span> <br /> about your site.</h2>
                                </div>
                                <div className="cta-two__text">
                                    <p>We take the time to listen and understand what it is you need made. You don’t have to be an expert in tech, you don’t need a degree, you just have to want it.</p>
                                    <p>Clients come to us with a problem and leave with a website we’re both proud to put our name on. No buzzwords, no runaround. Just clear thinking and solid execution.</p>
                                </div>
                                <a href="#contact_us_singularity" className="thm-btn"><span>Get Started</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default CallToActionTwo;
