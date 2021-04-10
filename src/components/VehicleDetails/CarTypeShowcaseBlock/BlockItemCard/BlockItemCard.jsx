import React from "react";
import "./BlockItemCard.css";

const BlockItem = ({ title, imgSrc, subtitle }) => {
	return (
		<div className='type-showcase-card'>
			<div className='type-showcase-card-title'>
				<span>{title}</span>
			</div>
			<div className='type-showcase-card-image'>
				<span>
					<img src={imgSrc} alt={subtitle} width={45} height={45} />
				</span>
			</div>
			<div className='type-showcase-card-body'>
				<span>{subtitle}</span>
			</div>
		</div>
	);
};

export default BlockItem;
