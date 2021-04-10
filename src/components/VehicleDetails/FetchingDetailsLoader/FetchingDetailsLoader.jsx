import React from "react";
import { motion } from "framer-motion";
import "./FetchingDetailsLoader.css";

import Searching from "../../../assets/undraw_File_searching_re_3evy.svg";

const FetchingDetailsLoader = () => {
	return (
		<>
			<div className='loader-whitespace bg-white'></div>
			<section className='details-loader bg-grey'>
				<div className='container'>
					<div className='loader-flex'>
						<span>
							<motion.div
								initial='hidden'
								animate='visible'
								exit='hidden'
								variants={variants}
								transition={{ duration: 0.5 }}
							>
								<img src={Searching} width={200} alt='Searching for the Vehicle' />
							</motion.div>
						</span>
					</div>
				</div>
			</section>
		</>
	);
};

const variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

export default FetchingDetailsLoader;
