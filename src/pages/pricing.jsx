import React from "react";
import { CardPricing } from "../components/cardComponent";

const data2 = [
  {
    head: "Basic Plan",
    price: "$50",
    period: "/month",
    content: [
      "Graphic Design",
      "Web Design",
      "HTML/CSS",
      "SEO Marketing",
      "Business Analyst",
    ],
  },
  {
    head: "Standard Plan",
    price: "$99",
    period: "/month",
    active: true,
    content: [
      "Graphic Design",
      "Web Design",
      "HTML/CSS",
      "SEO Marketing",
      "Business Analyst",
    ],
  },
  {
    head: "Premium Plan",
    price: "$150",
    period: "/month",
    content: [
      "Graphic Design",
      "Web Design",
      "HTML/CSS",
      "SEO Marketing",
      "Business Analyst",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="md:flex justify-center w-100 my-24 lg:my-40 mx-5 md:mx-12 lg:mx-32">
      <div className="mb-3 text-blue-600 uppercase font-medium text-opacity-90 font-roboto">
        <h3>Our Pricing</h3>
      </div>
      <div className="lg:flex md:flex justify-between mb-5">
        <h2 className="font-bold text-3xl text-opacity-80 font-roboto">
          Choose A Plan That's Right For You
        </h2>
        <label class="flex items-center cursor-pointer">
          {/* toggle */}
          <div class="relative">
            {/* <!-- input --> */}
            <input id="toogleA" type="checkbox" class="sr-only" />
            {/* <!-- line --> */}
            <div class="w-10 h-4 bg-blue-600 rounded-full shadow-inner"></div>
            {/* <!-- dot --> */}
            <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
          </div>
          {/* <!-- label --> */}
          <div class="ml-3 text-gray-700 font-medium font-roboto">
            Toggle Me!
          </div>
        </label>
      </div>

      <div className="md:flex justify-center">
        <div className="lg:flex md:flex">
          {data2.map((items) => {
            const { content } = items;
            const listContent = content.map((listItems) => {
              return (
                <li className="list-none font-roboto pb-2">{listItems}</li>
              );
            });
            return (
                <CardPricing
                  head={items.head}
                  price={items.price}
                  active={items.active}
                  period={items.period}
                  list={listContent}
                />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
