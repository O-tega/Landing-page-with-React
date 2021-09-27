import React, {
	Component,
} from "react";
import button from "../components/buttonComponent";
import Card from "../components/cardComponent";
import Navbar from "../components/navbarComponent";
import Button from "../components/buttonComponent";
import { Link } from "react-router-dom";

class Landing extends Component {
	render() {
		return (
			<div >
				<div
					className='bg-gradient-to-r from-blue-800 to-blue-500 w-100 h-100 overflow-hidden'
					style={{ height: "800px" }}
				>
					<Navbar />
					<div className='container flex flex-col pt-44 text-left ml-32 w-50'>
						<div className='text-6xl text-white'>
							<span>Creative</span>
							<br />
							<span>
								Digital Agency
							</span>
						</div>
						<p className='pt-10 text-white w-96'>
							Lorem ipsum dolor sit amet
							consectetur adipisicing
							elit. Esse tenetur
							quisquam inventore
							laboriosam soluta
						</p>
					</div>
					<div className='pt-10 flex ml-32'>
						<Link to='/learn_more'>
							<Button
								classname='rounded-full hover:bg-blue-300 w-36 h-10 font-bold bg-blue-500 text-white'
								inputType='Learn More'
							/>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;
