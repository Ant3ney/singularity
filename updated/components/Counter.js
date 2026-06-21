import React from 'react';
import CountUp from 'react-countup';

export default function Counter() {
	return (
		<section className='fact-one'>
			<div className='container'>
				<div className='block-title text-center'>
					<h2 className='block-title__title'>
						Over 2200 <span>Projects</span> <br /> Completed.
					</h2>
				</div>
				<div className='row'>
					<div className='col-lg-3 col-md-6 col-sm-12 wow fadeInUp' data-wow-duration='1500ms'>
						<div className='fact-one__single'>
							<div className='fact-one__inner'>
								<h3 className='fact-one__count counter'>
									<CountUp end={4789} enableScrollSpy scrollSpyOnce />
								</h3>
								<p className='fact-one__text'>projects</p>
							</div>
						</div>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-12 wow fadeInUp' data-wow-duration='1500ms'>
						<div className='fact-one__single'>
							<div className='fact-one__inner'>
								<h3 className='fact-one__count counter'>
									<CountUp end={6400} enableScrollSpy scrollSpyOnce />
								</h3>
								<p className='fact-one__text'>customers</p>
							</div>
						</div>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-12 wow fadeInUp' data-wow-duration='1500ms'>
						<div className='fact-one__single'>
							<div className='fact-one__inner'>
								<h3 className='fact-one__count counter'>
									<CountUp end={960} enableScrollSpy scrollSpyOnce />
								</h3>
								<p className='fact-one__text'>success</p>
							</div>
						</div>
					</div>
					<div className='col-lg-3 col-md-6 col-sm-12 wow fadeInUp' data-wow-duration='1500ms'>
						<div className='fact-one__single'>
							<div className='fact-one__inner'>
								<h3 className='fact-one__count counter'>
									<CountUp end={378} enableScrollSpy scrollSpyOnce />
								</h3>
								<p className='fact-one__text'>awards</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
