import React, { Component } from "react";
import Card from "../components/cardComponent";
import image from "../abdrahim-oulfakir-L9MlT8rCurk-unsplash.jpg";
import Button from "../components/buttonComponent";

export default class section1 extends Component {
  render() {
    return (
      <div class="mt-24">
        <h5 class="text-blue-600 text-center uppercase font-medium font-sans">
          Our Service
        </h5>
        <h2 class="text-gray-700  text-center text-2xl md:text-3xl capitalize font-bold text-opacity-90">
          {" "}
          We are providing digital services{" "}
        </h2>
        <div class="md:flex mt-16  space-y-4 ">
          <div class=" block	md:w-3/4 p-8">
            <Card
              title="Web Development"
              content="guoguoguo dpdhdhodjo dpdpod dphdyuyudfyfid edfyiedydegddgued
            fwdfudgduodge dioegdoegd ediedpided deddeidede deddhedhde dedpipeidede dededhdpide dedpdhpodhede de id3dd8gd"
            />
          </div>
          <div class="block	md:w-3/4 p-8">
            <Card
              title="Web Development"
              content="guoguoguo dpdhdhodjo dpdpod dphdyuyudfyfid edfyiedydegddgued
            fwdfudgduodge dioegdoegd ediedpided deddeidede deddhedhde dedpipeidede dededhdpide dedpdhpodhede de id3dd8gd"
            />
          </div>
          <div class=" block	md:w-3/4 p-8">
            <Card
              title="Web Development"
              content="guoguoguo dpdhdhodjo dpdpod dphdyuyudfyfid edfyiedydegddgued
            fwdfudgduodge dioegdoegd ediedpided deddeidede deddhedhde dedpipeidede dededhdpide dedpdhpodhede de id3dd8gd"
            />
          </div>
        </div>

        <div class=" md:flex mt-64 space-y-4 ">
          <div class="md:flex-auto block  ">
            <img
              src={image}
              alt=""
              className="m-auto w-full md:w-10/12 h-4/6"
            />
          </div>
          <div class="block m-4 md:flex-auto">
            <h5 class="text-blue-600 text-left uppercase font-medium font-sans">
              About us
            </h5>
            <h2 class="text-gray-700 mt-6 text-left text-4xl capitalize font-bold text-opacity-100">
              {" "}
              We design, build brands <br />& digital projects.{" "}
            </h2>
            <p class="mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              repudiandae id vitae facere obcaecati exercitationem eveniet vero
              aut perspiciatis recusandae, odio tenetur voluptates ea quae porro
              quidem se provident dolore atque rerum saepe itaque quas enim
              reprehenderit! Consectetur labore, ad commodi, asperiores omnis
              repudiandae, dolorum suscipit unde sit enim esse.
            </p>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              rerum eos ea aliquam accusamus eligendi fugiat cumque, iusto ut
              consectetur nihil earum perspiciatis, eum molestiae doloribus
              mollitia quo exercitationem reiciendis!
            </p>
            <br />
            <Button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              inputype="Read More"
            />
          </div>
        </div>
      </div>
    );
  }
}
