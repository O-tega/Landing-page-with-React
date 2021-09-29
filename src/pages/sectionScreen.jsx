import React from "react";
import teslaImg from "../images/Tesla.jpg";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import PageScreen from './pageScreen';


export default function sectionScreen () {

  const cardList = [
    { url: teslaImg },
    { url: teslaImg },
    { url: teslaImg },
    { url: teslaImg },
    { url: teslaImg },
    { url: teslaImg },
  ];
  return (
    <div>
      <PageScreen/>
      <h3>Hello World</h3>
    <div class='container mt-16'>
      <div class="text-blue-500 text-xs font-normal ml-24 flex">
        <h1>OUR PORTFOLIO</h1>
      </div>
      <div class="text-xl font-medium mt-4 align-center ml-24 flex">
        <h1>TAKE A LOOK AT OUR LATEST WORK</h1>
      </div>
      <div class=" mx-auto w-full flex flex-wrap p-4 ml-20">
        {cardList.map((id) => (
          <img
            key={id}
            src={teslaImg}
            alt="selected"
            class="h-1/4 w-1/4 m-1"
          />
        ))}
        </div>
      <div class="flex mb-2 justify-center mr-40">
      <FaAngleLeft class="rounded-full bg-gray-300 mr-1 h-6 w-6" size="1em" color="black"/>
      <FaAngleRight class="rounded-full bg-blue-500 ml-1 h-6 w-6" size="1em" color="white"/>
      </div>
    </div>
    </div>
  );
};