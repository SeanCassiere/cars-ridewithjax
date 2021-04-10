import React from "react";
import "./CarTypeShowcaseBlock.css";

import BlockItemCard from "./BlockItemCard/BlockItemCard";

import CarSeat from "../../../assets/CarSeat.svg";
import CarDoor from "../../../assets/CarDoor.svg";
import CarBaggage from "../../../assets/CarBaggage.svg";
import CarTransmission from "../../../assets/CarTransmission.svg";

const CarTypeShowcaseBlock = ({ vehicle, type }) => {
	const { transmission, seats, baggages } = vehicle;
	const { doors } = type;

	let localTransmission = transmission;
	if (transmission === "Automatic") localTransmission = "Auto";

	return (
		<section className='bg-showcase showcase-block'>
			<div className='container'>
				<div className='type-showcase-grid'>
					<div className='showcase-grid-item'>
						<BlockItemCard title={seats} imgSrc={CarSeat} subtitle='Seats' />
					</div>
					<div className='showcase-grid-item'>
						<BlockItemCard title={doors} imgSrc={CarDoor} subtitle='Doors' />
					</div>
					<div className='showcase-grid-item'>
						<BlockItemCard title={baggages} imgSrc={CarBaggage} subtitle='Baggage' />
					</div>
					<div className='showcase-grid-item'>
						<BlockItemCard title={localTransmission} imgSrc={CarTransmission} subtitle='Transmission' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default CarTypeShowcaseBlock;
