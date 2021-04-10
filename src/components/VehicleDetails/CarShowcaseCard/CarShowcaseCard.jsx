import React from "react";
import { motion } from "framer-motion";
import "./CarShowcaseCard.css";

import MissingCar from "../../../assets/undraw_city_driver_jh2h.svg";

const CarShowcaseCard = ({ vehicle, type }) => {
	const imgSrc = vehicle.imageUrl.charAt(vehicle.imageUrl.length - 1) === "/" ? MissingCar : vehicle.imageUrl;
	const htmlString = type.htmlContent === "" ? "<i>No description provided</i>" : type.htmlContent;

	return (
		<section className='vehicle-details'>
			<div className='bg-white'>
				<div className='container'>
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
						<h1 className='h1-vehicle-details'>Vehicle Details</h1>
					</motion.div>
				</div>
			</div>
			<div className='bg-grey'>
				<div className='container'>
					<div className='vehicle-card'>
						<motion.div
							className='vehicle-card-image'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1 }}
						>
							<div className='container-image'>
								<img src={imgSrc} alt='vehicle' />
							</div>
						</motion.div>

						<motion.div
							className='vehicle-card-body bg-white'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1 }}
						>
							<div className='vehicle-card-title'>
								<h1>{`${vehicle.year} ${vehicle.make} ${vehicle.model}`}</h1>
							</div>
							<div className='vehicle-card-description'>
								<div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CarShowcaseCard;
