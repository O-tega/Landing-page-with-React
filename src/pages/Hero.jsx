import React, { Component } from "react";
import Navbar from "../components/navbarComponent";
import Button from "../components/button.jsx";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <header className="bg-gradient-to-r from-blue-800 to-blue-500 w-100 h-100 overflow-hidden">
        <Navbar />
        <div className="flex mx-3  md:mx-12 items-center h-[400px] lg:h-[700px]">
          <div className="text-left lg:ml-32 w-50">
            <div className="text-5xl lg:text-6xl leading-[24px] text-white font-roboto">
              <span>Creative</span>
              <br />
              <span>Digital Agency</span>
            </div>
            <p className="pt-10 text-gray-200 lg:w-96 md:w-2/5 text-base leading-[24px] font-roboto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              tenetur quisquam inventore laboriosam soluta
            </p>
            <Link className="" to="/learn_more">
              <Button
                classname="rounded-full mt-10 hover:bg-blue-300 w-36 h-10 font-bold bg-blue-500 text-white"
                label="Learn More"
              />
            </Link>
          </div>
          <div className=""></div>
        </div>
      </header>
    );
  }
}

export default Landing;
