import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<section className='footer-section'>
			<div className='container'>
				<div className='footer-flex'>
					<div>
						<h1>We Are Here to Help</h1>
					</div>
					<div>
						<a className='btn-filled' href='https://ridewithjax.com/help'>
							<span>Contact Us</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
