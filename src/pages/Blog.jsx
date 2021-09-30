import React from "react";
import Card from "../components/cardComponent";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from "@heroicons/react/solid";
import ArrowComponent from '../components/arrowLeftRight';

const data = [
	{
		id: 1,
		title:
			"Maecenas laoree efficiture sagittis aliquam eleifend nisl.",
		date: "Posted 7 MArch, 2020",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,",
	},
	{
		id: 1,
		title:
			"Maecenas laoree efficiture sagittis aliquam eleifend nisl.",
		date: "Posted 7 MArch, 2020",
		body: "Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,",
	},
];

const Blog = () => {
  return (
    <div className="flex md:mx-12 my-40">
      <div></div>
    <div class="flex justify-center items-center md:mx-12 my-40">
      <div className="w-96 mr-5">
        <h5 className="text-blue-600 uppercase font-medium mb-2 text-opacity-90 font-roboto">Our Blog</h5>
        <h4 className="mb-4 text-xl font-bold">Latest News & blog</h4>
        <p className="test-sm font-roboto mb-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod
          tempor incididunt labo.
        </p>
        <div className="relative border-2 flex">
          <input className="h-10 w-full" />
          <label className="absolute left-0 pl-4 mt-2 capitalize font-roboto text-opacity-80">
            {" "}
            Enter Your Email{" "}
          </label>
          <button className="bg-blue-600 px-3 py-2">
            <ArrowRightIcon className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
      <div className="lg:flex">
        {data.map((item) => {
          return (
            <Card class title={item.title} date={item.date} body={item.body} />
          );
        })}
      </div>
      <ArrowComponent vertical />
      </div>
    </div>
  );
};



export default Blog;
