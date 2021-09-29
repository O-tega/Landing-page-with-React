import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";

const Card = ({ title, date, body }) => {
  return (
    <>
      <div
        className="shadow w-80 h-96 p-5 mr-5 pt-6 border-2 hover:bg-transparent border-blue-500 bg-blue-500 text-white hover:text-gray-600"
      >
        <h4 className="text-sm font-medium mb-4 font-roboto w-56 text-opacity-80">{title}</h4>
        <h5 className="text-sm mb-9 font-roboto font-medium capitalize text-opacity-80">{date}</h5>
        <p className="text-xs  leadin font-roboto mb-9 leading-5 ">{body}</p>
        <p className="text-sm flex items-center font-roboto font-normal ">
          Read more
          <span className="ml-5">
            <ArrowRightIcon className="w-4 h-4 hover:text-white" />
          </span>
        </p>
      </div>
    </>
  );
};

export default Card;
