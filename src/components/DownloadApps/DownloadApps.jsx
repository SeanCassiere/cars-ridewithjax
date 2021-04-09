import React from "react";
import "./DownloadApps.css";

import PlayStoreLogo from "../../assets/google-play.png";
import AppStoreLogo from "../../assets/app-store.png";
import RightIcon from "../../assets/RightIcon.svg";

const DownloadApps = () => {
	return (
		<section className='download-apps-section'>
			<div className='container'>
				<div>
					<h1>Download the Jax Rideshare Rentals App</h1>
				</div>
				<div className='download-flex'>
					<a
						className='download-container'
						href='https://play.google.com/store/apps/details?id=com.navotar.JAXRideshareRental&hl=en&gl=US'
					>
						<img src={PlayStoreLogo} alt='Test' width={60} height={60} />
						<span>
							Download Now&nbsp;
							<img src={RightIcon} height={12} width={12} className='text-download-blue' alt='Right Icon' />
						</span>
					</a>
					<a className='download-container' href='https://apps.apple.com/us/app/jax-rideshare-rentals/id1533816763'>
						<img src={AppStoreLogo} alt='Test' width={60} height={60} />
						<span>
							Download Now&nbsp;
							<img src={RightIcon} height={12} width={12} className='text-download-blue' alt='Right Icon' />
						</span>
					</a>
				</div>
			</div>
		</section>
	);
};

export default DownloadApps;
