import React, { Component } from "react";
import Card from "../components/sect1CardComponent";
import image from "../Rectangle.png";
import Button from "../components/button.jsx";
import ArrowComponent from "../components/arrowLeftRight";

export default class Section1 extends Component {
  state = {
    cardContent: [
      {
        id: 1,
        title: "Web Development",
        content:
          "Our professional team leverages on creating and building quality designs and sites that best defines brand's identity in the most presentable format. The kind of brand you run depends on the kind of site you need.",
      },
      {
        id: 2,
        title: "User experience design",
        content:
          "With the knowledge and experiences of our UX designers team in PottersHub who possess strong creative, technical and problem-solving skills, it has made it easier to solve our clients website user experience concerns. ",
      },
      {
        id: 3,
        title: "Website maintenance",
        content:
          "Creating relevance and ensuring timely updates of your website is a way to keep your website healthy, build/improve the website traffic growth, and strengthen its SEO and search rankings.",
      },
    ],
  };
  render() {
    return (
      <div class="lg:my-40 my-24 relative">
        <h5 class="text-subtitle text-center uppercase mb-3 font-medium font-roboto">
          Our Service
        </h5>
        <h2 class="text-center text-3xl capitalize mx-5 font-roboto text-header">
          {" "}
          We are providing digital services{" "}
        </h2>
        <div className="absolute right-4 md:right-16 md:top-5 lg:top-4 lg:right-36">
          <ArrowComponent />
        </div>
        <div class="lg:grid grid-cols-3 lg:gap-4 gap-y-5 mt-16 lg:mx-32 md:mx-12 ">
          {this.state.cardContent.map((item) => {
            return (
              <div class="mx-5">
                <Card key={item.id} title={item.title} content={item.content} />
              </div>
            );
          })}
        </div>

        <div class="lg:flex  mt-24 lg:mx-32 md:mx-12">
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
            <h2 class="mt-6 text-3xl capitalize font-roboto text-header">
              {" "}
              We design, build brands <br />& digital projects.{" "}
            </h2>
            <p class="mt-8 mb-10 text-xs leading-7 text-body font-roboto">
              A network of competence, capacity, knowledge and experience. With
              a mission for satisfactory results and growth. We keep ourselves informed in the industry on the latest trends to ensure we deliver more improved, better and trendy services that will suit your brand and grow your customer attention and retention.

            </p>
            <p class="text-xs text-body leading-7 font-roboto">
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
