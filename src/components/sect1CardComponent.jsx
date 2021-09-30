import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";

const Card = ({ title, content }) => {
  return (
    <div className="border-2 hover:border-blue-700 m-auto p-8 bg-blue-200  hover:bg-transparent hover:shadow relative">
      <div class=" m-auto bg-blue-300 h-24 w-24 rounded-full justify-center mb-4"></div>
      <h3 class="text-center text-lg mb-3 text-header">{title}</h3>
      <p class="text-center text-xs text-gray-600 leading-[24px]">{content}</p>
      <div class=" m-auto bg-blue-700 h-10 w-10 rounded-full justify-center mb-4 absolute bottom-[-30px] left-48  hidden hover:block">
        <ArrowRightIcon className="w-[12px] h-[12px] text-white" />
      </div>
    </div>
  );
};

export default Card;
