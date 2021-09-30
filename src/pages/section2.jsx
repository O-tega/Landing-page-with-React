import React from "react";
import { Section2Card } from "../components/cardComponent";

const andata = [
  {
    head: "Smart Planning",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    head: "Our Partnership",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
  {
    head: "Super Ideas",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
  },
];

const Section2 = () => {
  const newData = andata.map((items) => {
    return (
      <div className="lg:w-72 md:w-72 lg:flex md:flex text-opacity-80 items-center text-center">
        <div>
          <div class=" m-auto bg-blue-300 h-11 w-11 rounded-full mb-4"></div>
          <h3 className="text-lg font-bold pb-4">{items.head}</h3>
          <p>{items.text}</p>
        </div>
      </div>
    );
  });
  return <Section2Card newData={newData} />;
};

export default Section2;
