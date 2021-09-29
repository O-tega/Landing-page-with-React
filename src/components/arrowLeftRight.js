import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const ArrowLeftRight = ({ vertical }) => {
  return (
    <div
      className={`flex ${
        vertical ? "flex-col" : "flex-row"
      } justify-center mt-5 mb-6`}
    >
      <div className="bg-gray-200 h-6 w-6 flex items-center justify-center rounded-full">
        <ChevronLeftIcon className="w-4 h-4 hover:text-white" />
      </div>
      <div className={`bg-blue-600 h-6 w-6 ${vertical ? 'my-3' : 'mx-3'} flex items-center justify-center rounded-full shadow`}>
        <ChevronRightIcon className="w-4 h-4 text-white" />
      </div>
    </div>
  );
};

export default ArrowLeftRight;
