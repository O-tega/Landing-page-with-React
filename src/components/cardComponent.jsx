import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";

const Card = ({ title, date, body }) => {
  return (
    <>
      <div
        className="shadow w-80 h-96 p-5"
      >
        <h4 className="text-sm font-semibold mb-6 font-roboto w-20">{title}</h4>
        <h5 className="text-sm mb-9 font-roboto">{date}</h5>
        <p className="text-xs text-gray-600 leadin font-roboto mb-9">{body}</p>
        <p className="text-sm flex items-center font-roboto">
          Read more
          <span className="ml-5">
            <ArrowRightIcon className="w-[12px] h-[12px] hover:text-white" />
          </span>
        </p>
      </div>
    </>
  );
};

export default Card;
