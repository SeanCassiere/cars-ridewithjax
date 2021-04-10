import React from "react";
import "./FetchingDetailsLoader.css";

import Searching from "../../../assets/undraw_File_searching_re_3evy.svg";

const FetchingDetailsLoader = () => {
	return (
		<section className='details-loader bg-grey'>
			<div className='container'>
				<div className='loader-flex'>
					<span>
						<img src={Searching} width={200} alt='Searching for the Vehicle' />
					</span>
				</div>
			</div>
		</section>
	);
};

export default FetchingDetailsLoader;
