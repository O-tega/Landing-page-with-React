import React, { Component } from 'react';
import Search from '../components/searchComponent';
import { Link } from 'react-router-dom';
import {SearchIcon} from '@heroicons/react/solid'


const Navbar = () =>{
    return (
			<div className='pt-5 flex justify-between mx-20 items-center'>
				<nav>
					<Link
						to='/'
						className='pl-8 font-bold text-white text-2xl'
					>
						LOGO.
					</Link>
				</nav>
				<div className='pr-8 md:block hidden'>
					<Link
						to='/'
						className='text-white p-4'
					>
						HOME
					</Link>
					<Link
						to='/about'
						className='text-white p-4'
					>
						ABOUT
					</Link>
					<Link
						to='/pages'
						className='text-white p-4'
					>
						PAGES
					</Link>
					<Link
						to='/services'
						className='text-white p-4'
					>
						SERVICES
					</Link>
					<Link
						to='/portfolio'
						className='text-white p-4'
					>
						PORTFOLIO
					</Link>
					<Link
						to='/blog'
						className='text-white p-4'
					>
						BLOG
					</Link>
					<Link
						to='/contact'
						className='text-white p-4'
					>
						CONTACT
					</Link>
				</div>
				<div>
					<Search
						newclass='rounded-full bg-white w-40 flex items-center justify-around'
						classname=' border-none rounded-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline w-20'
						id='username'
						type='text'
						placeholder='search'
						content={
                            <Link to="#">
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 text-blue-500'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
								/>
							</svg>
                            </Link>
						}
					/>
				</div>
			</div>
		);
} 

export default Navbar;
