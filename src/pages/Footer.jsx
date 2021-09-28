/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class landing extends Component {
  state = {
    links: {
      ourLinks: [
        {
          id: 1,
          name: "Home",
          link: "/",
        },
        {
          id: 2,
          name: "About us",
          link: "/about",
        },
        {
          id: 3,
          name: "Services",
          link: "/service",
        },
        {
          id: 4,
          name: "Team",
          link: "/team",
        },
        {
          id: 5,
          name: "Blog",
          link: "/blog",
        },
      ],
      companyLink: [
        {
          id: 1,
          name: "About Company",
          link: "/company",
        },
        {
          id: 2,
          name: "our testimonials",
          link: "/testimonial",
        },
        {
          id: 3,
          name: "latest news",
          link: "/news",
        },
        {
          id: 4,
          name: "our mission",
          link: "/mission",
        },
        {
          id: 5,
          name: "get a free quote",
          link: "/quote",
        },
      ],
      serviceLink: [
        {
          id: 1,
          name: "App Development",
          link: "/company",
        },
        {
          id: 2,
          name: "web development",
          link: "/testimonial",
        },
        {
          id: 3,
          name: "graphic design",
          link: "/news",
        },
        {
          id: 4,
          name: "web solution",
          link: "/mission",
        },
        {
          id: 5,
          name: "app design",
          link: "/quote",
        },
      ],
    },
  };
  render() { 
    let renderLinks = (dataLinks) =>
      dataLinks.map((item) => {
        return (
          <li key={item.id} className="mb-2">
            <Link
              href={item.link}
              className="border-b border-solid border-transparent text-gray-600 active:text-blue-300 capitalize "
            >
              {item.name}
            </Link>
          </li>
        );
      });
    return (
      <footer className="footer-1 bg-blue-50 py-8 sm:py-12 overflow-x-hidden">
        <div className="container mx-auto md:mx-12 px-4">
          <div className=" md:grid grid-cols-4 lg:grid grid-cols-4 sm:-mx-4 md:py-4">
            <div className="px-4 flex-shrink sm:mb-6">
              <h5 className="text-xl mb-6 text-blue-500 font-semibold">
                LOGO.
              </h5>
              <p className="text-base text-gray-600 leading-7">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi doloremque sequi aspernatur ipsum, sint quod eius libero
                consectetur debitis eveniet quasi voluptatem at molestiae
                laborum?
              </p>

              <div className="flex flex-row mt-5 mb-6">
                <div
                  style={{
                    backgroundColor: "blue",
                    height: 20,
                    width: 20,
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  className="ml-3"
                  style={{
                    backgroundColor: "transparent",
                    height: 20,
                    width: 20,
                    borderRadius: "50%",
                    border: "1px solid #3782D7",
                  }}
                ></div>
                <div
                  className="ml-3"
                  style={{
                    backgroundColor: "transparent",
                    height: 20,
                    width: 20,
                    borderRadius: "50%",
                    border: "1px solid #3782D7",
                  }}
                ></div>
              </div>
            </div>
            <div className="px-4 sm: md:">
              <h5 className="text-xl font-bold mb-6">Our Links</h5>
              <ul className="list-none footer-links ">
                {renderLinks(this.state.links.ourLinks)}
              </ul>
            </div>
            <div className="px-4 mt-10 md:mt-0 lg:mt-0 sm: md: ">
              <h5 className="text-xl font-bold mb-6">Our Company</h5>
              <ul className="list-none footer-links ">
                {renderLinks(this.state.links.companyLink)}
              </ul>
            </div>
            <div className="px-4 mt-10 w-full md:mt-0 sm: md: ">
              <h5 className="text-xl font-bold mb-6">Our Services</h5>
              <ul className="list-none footer-links ">
                {renderLinks(this.state.links.serviceLink)}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t text-center">
          <p className="mt-6">
            @ Copyright 2020 <span className="text-blue-300">Brandoxide</span> .
            All rights reserved
          </p>
        </div>
      </footer>
    );
  }
}
