import React from "react";
import "./CarShowcaseCard.css";

import MissingCar from "../../../assets/undraw_city_driver_jh2h.svg";

const CarShowcaseCard = ({ vehicle, type }) => {
	console.log(type);
	const imgSrc = vehicle.imageUrl.charAt(vehicle.imageUrl.length - 1) === "/" ? MissingCar : vehicle.imageUrl;
	const htmlString = type.htmlContent === "" ? "<i>No description provided</i>" : type.htmlContent;
	return (
		<section className='vehicle-details'>
			<div className='bg-white'>
				<div className='container'>
					<h1 className='h1-vehicle-details'>Vehicle Details</h1>
				</div>
			</div>
			<div className='bg-grey'>
				<div className='container'>
					<div className='vehicle-card'>
						<div className='vehicle-card-image'>
							<div className='container-image'>
								<img src={imgSrc} alt='vehicle' />
							</div>
						</div>
						<div className='vehicle-card-body bg-white'>
							<div className='vehicle-card-title'>
								<h1>{`${vehicle.year} ${vehicle.make} ${vehicle.model}`}</h1>
							</div>
							<div className='vehicle-card-description'>
								<div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CarShowcaseCard;
