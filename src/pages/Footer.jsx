import React, { Component } from 'react';

export default class landing extends Component {
  render() {
    return (
      <footer class="footer-1 bg-blue-50 py-8 sm:py-12">
        <div class="container mx-auto px-4">
          <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 m-auto">
              <h5 class="text-xl mb-6 text-blue-500 font-semibold">LOGO.</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi doloremque sequi aspernatur ipsum, sint quod eius libero
                consectetur debitis eveniet quasi voluptatem at molestiae
                laborum?
              </p>

              <div class="flex flex-row mt-5">
                <div
                  style={{
                    backgroundColor: 'blue',
                    height: 20,
                    width: 20,
                    borderRadius: '50%',
                  }}
                ></div>
                <div class="ml-3"
                  style={{
                    backgroundColor: 'transparent',
                    height: 20,
                    width: 20,
                    borderRadius: '50%',
                    border: '1px solid #3782D7',
                  }}
                ></div>
                <div class="ml-3"
                  style={{
                    backgroundColor: 'transparent',
                    height: 20,
                    width: 20,
                    borderRadius: '50%',
                    border: '1px solid #3782D7',
                  }}
                ></div>
              </div>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <h5 class="text-xl mb-6">Our Links</h5>
              <ul class="list-none footer-links ">
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800 text-blue-300"
                  >
                    Home
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    About us
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Services
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Team
                  </a>
                </li>
                <li class="mb-2">
                  <a
                    href="#"
                    class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Blog
                  </a>
                </li>
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
