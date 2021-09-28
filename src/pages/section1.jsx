import React, { Component } from "react";
import Card from "../components/sect1CardComponent";
import image from "../abdrahim-oulfakir-L9MlT8rCurk-unsplash.jpg";
import Button from "../components/button";

export default class section1 extends Component {
  state = {
    cardContent: [
      {
        id: 1,
        title: "Web Development",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore",
      },
      {
        id: 2,
        title: "Graphic Design",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore",
      },
      {
        id: 3,
        title: "Digital Marketing",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore",
      },
    ],
  };
  render() {
    return (
      <div class="mt-24">
        <h5 class="text-blue-600 text-center uppercase font-medium mb-3 text-opacity-90 font-roboto">
          Our Service
        </h5>
        <h2 class="text-gray-700  text-center text-2xl md:text-3xl capitalize font-bold text-opacity-90 font-roboto">
          {" "}
          We are providing digital services{" "}
        </h2>
        <div class="lg:flex mt-16 md:mx-12">
          {this.state.cardContent.map((item) => {
            return (
              <div class="p-5 lg:p-8">
                <Card key={item.id} title={item.title} content={item.content} />
              </div>
            );
          })}
        </div>

        <div class="lg:flex md:flex mt-64 md:mx-12">
          <div class="block flex-shrink p-5 lg:p-8">
            <img
              src={image}
              alt=""
              className="m-auto w-full md:w-[127rem] md:h-[21rem] h-full"
            />
          </div>
          <div class="block p-5 mt-4">
            <h5 class="text-blue-600 uppercase font-medium font-roboto">
              About us
            </h5>
            <h2 class="text-gray-700 mt-6 text-4xl capitalize font-bold text-opacity-90 font-roboto">
              {" "}
              We design, build brands <br />& digital projects.{" "}
            </h2>
            <p class="mt-8 mb-10 text-base text-gray-600 leading-7 font-roboto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              repudiandae id vitae facere obcaecati exercitationem eveniet vero
              aut perspiciatis recusandae, odio tenetur voluptates ea quae porro
              quidem se provident dolore atque rerum saepe itaque quas enim
              reprehenderit! Consectetur labore, ad commodi, asperiores omnis
              repudiandae, dolorum suscipit unde sit enim esse.
            </p>
            <p class="text-base text-gray-600 leading-7 font-roboto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              rerum eos ea aliquam accusamus eligendi fugiat cumque, iusto ut
              consectetur nihil earum perspiciatis, eum molestiae doloribus
              mollitia quo exercitationem reiciendis!
            </p>
            <br />
            <Button
              classname="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full"
              label="Read More"
            />
          </div>
        </div>
      </div>
    );
  }
}
