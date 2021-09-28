/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export default class landing extends Component {
  state = {
    links: {
      ourLinks: [
        {
          id: 1,
          name: "Home",
          link: '/'
        },
        {
          id: 1,
          name: "About us",
          link: '/about'
        },
        {
          id: 1,
          name: "Services",
          link: '/service'
        },
        {
          id: 1,
          name: "Team",
          link: '/team'
        },
        {
          id: 1,
          name: "Blog",
          link: '/blog'
        },
      ],
    },
  };
  render() {
    return (
      <footer class="footer-1 bg-blue-50 py-8 sm:py-12">
        <div class="container mx-auto px-4">
          <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 m-auto">
              <h5 class="text-xl mb-6 text-blue-500 font-semibold">LOGO.</h5>
              <p className="text-base text-gray-600 leading-7">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi doloremque sequi aspernatur ipsum, sint quod eius libero
                consectetur debitis eveniet quasi voluptatem at molestiae
                laborum?
              </p>

              <div class="flex flex-row mt-5 mb-6">
                <div
                  style={{
                    backgroundColor: "blue",
                    height: 20,
                    width: 20,
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  class="ml-3"
                  style={{
                    backgroundColor: "transparent",
                    height: 20,
                    width: 20,
                    borderRadius: "50%",
                    border: "1px solid #3782D7",
                  }}
                ></div>
                <div
                  class="ml-3"
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
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <h5 class="text-xl font-bold mb-6">Our Links</h5>
              <ul class="list-none footer-links ">
                {this.state.links.ourLinks.map((item) => {
                  return (
                    <li key={item.id} class="mb-2">
                      <a
                        href="#"
                        class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 active:text-blue-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <h5 class="text-xl mb-6">Our Company</h5>
              <ul class="list-none footer-links ">
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-blue"
                  >
                    About Company
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Our Testimonials
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Latest News
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Our Mission
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Get a free Quot
                  </a>
                </li>
              </ul>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <h5 class="text-xl mb-6">Our Services</h5>
              <ul class="list-none footer-links ">
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-blue"
                  >
                    App Development
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Web Development
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Graphic Design
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Web Solution
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    App Design
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="border-t text-center">
          <p class="mt-6">
            @ Copyright 2020 <span class="text-blue-300">Brandoxide</span> . All
            rights reserved
          </p>
        </div>
      </footer>
    );
  }
}
