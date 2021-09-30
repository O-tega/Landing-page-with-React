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
          <h1 className="text-subtitle uppercase font-medium mb-3 font-roboto">OUR PORTFOLIO</h1>
        </div>
        <div class="">
          <h1 className="text-3xl md:text-3xl capitalize font-roboto mb-7 text-header">TAKE A LOOK AT OUR LATEST WORK</h1>
        </div>
        <div class=" mx-auto w-full grid md:grid-cols-3 gap-4 p-4">
          {cardList.map((item, index) => (
            <img
              key={index}
              src={item.url}
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
