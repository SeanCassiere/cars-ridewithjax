import React from "react";
import "./Header.css";

import Logo from "../../assets/image-asset.png";

const Header = () => {
	return (
		<section className='bg-white header-section'>
			<div className='header-primary-block'>
				<div className='container'>
					<div className='header-flex'>
						<div className='header-flex-left'>
							<h1>Jax Rideshare</h1>
							<h2>Rentals</h2>
							<h3>Reliable rental cars for gig work.</h3>
							<div className='btn-link-action'>
								<a href='https://ridewithjax.com/' rel='noreferrer' target='_blank'>
									Learn More
								</a>
							</div>
						</div>
						<div className='header-flex-right'>
							<div className='logo-container'>
								<div className='logo-circle'>
									<img src={Logo} alt='Jax Rideshare Rentals Logo' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='container'>
				<div className='header-accent-item'>
					<div className='accent-circle'></div>
				</div>
			</div>
		</section>
	);
};

export default Header;
