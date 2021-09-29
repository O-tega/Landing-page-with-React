import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import Button from "./button";

const Card = ({ title, date, body }) => {
  return (
    <>
      <div className="shadow w-80 h-96 p-5 mr-5 pt-6 border-2 hover:bg-transparent border-blue-500 bg-blue-500 text-white hover:text-gray-600">
        <h4 className="text-sm font-medium mb-4 font-roboto w-56 text-opacity-80">
          {title}
        </h4>
        <h5 className="text-sm mb-9 font-roboto font-medium capitalize text-opacity-80">
          {date}
        </h5>
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

export const CardPricing = ({ head, price, period, list }) => {
  return (
    <>
      <div class="flex items-center justify-center w-full mb-12"></div>
      <div className="shadow transition duration-500 w-80 md:w-52 lg:w-80 h-[500px] p-5 hover:bg-blue-700 hover:text-white text-center m-5">
        <h4 className="text-sm text-opacity-80 mb-9 font-roboto font-bold text-lg">
          {head}
        </h4>
        <div class=" m-auto bg-blue-300 h-24 w-24 rounded-full justify-center mb-4"></div>
        <div className="flex content-center justify-center pb-4 ">
          <h4 className="text-blue-300 text-lg font-bold">{price}</h4>
          <h5 className="text-opacity-80 ">{period}</h5>
        </div>
        <p>{list}</p>
        <Button
          classname="bg-blue-500 text-white w-32 h-7 font-bold mt-5 rounded-full"
          label="start now"
        />
      </div>
    </>
  );
};

export const Section2Card = ({ newData }) => {
  return (
    <div className="lg:w-100 md:w-100 lg:h-[350px] md:h-[350px] items-center bg-blue-50 my-24 justify-center flex p-20 lg:p-0 md:p-0">
      <div className="border-4 border-white bg-blue-50 lg:flex md:flex h-2/3 md:h-3/4 justify-evenly lg:w-[80%] md:w-[80%] items-center p-10 md:p-10">
        {newData}
      </div>
    </div>
  );
};

export default Card;
