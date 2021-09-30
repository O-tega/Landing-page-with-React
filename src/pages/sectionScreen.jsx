import React from "react";
import teslaImg from "../Rectangle56.png";
import ArrowLeftRight from "../components/arrowLeftRight";

export default function sectionScreen() {
  const cardList = [
    { url: teslaImg },
    { url: teslaImg },
    { url: teslaImg },
    { url: teslaImg },
    { url: teslaImg },
    { url: teslaImg },
  ];
  return (
    <div className="lg:my-40 md:my-24">
      <div class=" mt-16 lg:mx-32 md:mx-12 mx-5">
        <div class="">
          <h1 className="text-blue-600 uppercase font-medium mb-3 text-opacity-90 font-roboto">OUR PORTFOLIO</h1>
        </div>
        <div class="">
          <h1 className="text-3xl md:text-3xl capitalize font-bold font-roboto mb-7">TAKE A LOOK AT OUR LATEST WORK</h1>
        </div>
        <div class=" mx-auto w-full grid md:grid-cols-3 gap-4 p-4">
          {cardList.map((id) => (
            <img
              key={id}
              src={teslaImg}
              alt="selected"
              class="h-full w-full m-1"
            />
          ))}
        </div>
        <div class="flex mb-2 justify-center">
          <ArrowLeftRight />
        </div>
      </div>
    </div>
  );
}
