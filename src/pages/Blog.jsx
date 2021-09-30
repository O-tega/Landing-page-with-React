import React from "react";
import Card from "../components/cardComponent";
import { ArrowRightIcon } from "@heroicons/react/solid";
import ArrowComponent from "../components/arrowLeftRight";

const data = [
  {
    id: 1,
    title: "Maecenas laoree efficiture sagittis aliquam eleifend nisl.",
    date: "Posted 7 MArch, 2020",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,",
  },
  {
    id: 1,
    title: "Maecenas laoree efficiture sagittis aliquam eleifend nisl.",
    date: "Posted 7 MArch, 2020",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,",
  },
];

const Blog = () => {
  return (
    <div className="flex lg:mx-12 lg:my-40 md:my-24">
      <div class="lg:flex justify-center items-center md:mx-12 ">
        <div className="mx-5 lg:w-96 mb-5 lg:mx-10">
          <h5 className="text-subtitle uppercase font-medium mb-3 font-roboto ">
            Our Blog
          </h5>
          <h4 className="mb-4 text-3xl font-roboto text-header">
            Latest News & blog
          </h4>
          <p className="text-xs text-body leading-7 font-roboto mb-9 md:w-[17rem]">
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
        <div className="md:flex md:mt-8">
          {data.map((item) => {
            return (
              <Card
                class
                title={item.title}
                date={item.date}
                body={item.body}
              />
            );
          })}
        </div>
        <ArrowComponent vertical className="hidden lg:block" />
        <div>
          <ArrowComponent className="lg:hidden w-full" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
