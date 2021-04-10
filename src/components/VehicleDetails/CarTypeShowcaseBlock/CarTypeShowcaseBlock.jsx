import React from "react";
import { motion } from "framer-motion";
import "./CarTypeShowcaseBlock.css";

import BlockItemCard from "./BlockItemCard/BlockItemCard";

import CarSeat from "../../../assets/CarSeat.svg";
import CarDoor from "../../../assets/CarDoor.svg";
import CarBaggage from "../../../assets/CarBaggage.svg";
import CarTransmission from "../../../assets/CarTransmission.svg";

const motionParentVariants = {
	start: { transition: { ease: "ease", staggerChildren: 0.02, delayChildren: 0.5 } },
	end: { transition: { ease: "ease", staggerChildren: 0.25, staggerDirection: 1 } },
};

const motionChildVariants = {
	start: { y: 250 },
	end: { y: 0 },
};

const childTransition = { duration: 1.25 };

const CarTypeShowcaseBlock = ({ vehicle, type }) => {
	const { transmission, seats, baggages } = vehicle;
	const { doors } = type;

	let localTransmission = transmission;
	if (transmission === "Automatic") localTransmission = "Auto";

	return (
		<section className='bg-showcase showcase-block'>
			<div className='container'>
				<motion.div initial='start' animate='end' variants={motionParentVariants} className='type-showcase-grid'>
					<motion.div variants={motionChildVariants} transition={childTransition} className='showcase-grid-item'>
						<BlockItemCard title={seats} imgSrc={CarSeat} subtitle='Seats' />
					</motion.div>
					<motion.div variants={motionChildVariants} transition={childTransition} className='showcase-grid-item'>
						<BlockItemCard title={doors} imgSrc={CarDoor} subtitle='Doors' />
					</motion.div>
					<motion.div variants={motionChildVariants} transition={childTransition} className='showcase-grid-item'>
						<BlockItemCard title={baggages} imgSrc={CarBaggage} subtitle='Baggage' />
					</motion.div>
					<motion.div variants={motionChildVariants} transition={childTransition} className='showcase-grid-item'>
						<BlockItemCard title={localTransmission} imgSrc={CarTransmission} subtitle='Transmission' />
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default CarTypeShowcaseBlock;
