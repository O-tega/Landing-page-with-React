import React, {
	Component,
} from "react";
import { CardPricing } from "../components/cardComponent";

const data2 = [
	{
		head: "Basic Plan",
		price: "$50",
		period: "/month",
		content: [
			"Graphic Design",
			"Web Design",
			"HTML/CSS",
			"SEO Marketing",
			"Business Analyst",
		],
	},
	{
		head: "Standard Plan",
		price: "$99",
		period: "/month",
		content: [
			"Graphic Design",
			"Web Design",
			"HTML/CSS",
			"SEO Marketing",
			"Business Analyst",
		],
	},
	{
		head: "Premium Plan",
		price: "$150",
		period: "/month",
		content: [
			"Graphic Design",
			"Web Design",
			"HTML/CSS",
			"SEO Marketing",
			"Business Analyst",
		],
	},
];
const Pricing = () => {
	return (
		<div className='container flex justify-center w-100 my-20'>
			<div className='w-4/5'>
				<div className='mb-2 text-blue-600 font-bold'>
					<h3>Our Pricing</h3>
				</div>
				<div className='lg:flex md:flex justify-between mb-5'>
					<h2 className='font-bold text-lg text-opacity-80 '>
						Choose A Plan That's Right
						For You
					</h2>
					<label class='flex items-center cursor-pointer'>
						{/* toggle */}
						<div class='relative'>
							{/* <!-- input --> */}
							<input
								id='toogleA'
								type='checkbox'
								class='sr-only'
							/>
							{/* <!-- line --> */}
							<div class='w-10 h-4 bg-blue-600 rounded-full shadow-inner'></div>
							{/* <!-- dot --> */}
							<div class='dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition'></div>
						</div>
						{/* <!-- label --> */}
						<div class='ml-3 text-gray-700 font-medium'>
							Toggle Me!
						</div>
					</label>
				</div>

				<div className='flex justify-center'>
					<div className='lg:flex md:flex'>
						{data2.map((items) => {
							const { content } = items;
							const listContent =
								content.map(
									(listItems) => {
										return (
											<li className='list-none text-opacity-80 '>
												{listItems}
											</li>
										);
									}
								);
							return (
								<div>
									<CardPricing
										head={items.head}
										price={items.price}
										period={
											items.period
										}
										list={listContent}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
