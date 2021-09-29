import React from "react";

const Testimonial = ({}) => {
  return (
    <div className="bg-blue-500 w-full p-10 text-center py-10 pb-20 ">
      <h5 className="text-gray-200 text-3xl pt-10 font-roboto">We’re trusted by clients.</h5>
      <div className="flex justify-center mt-8">
        <div className="bg-blue-600 shadow p-4 px-16">
          <div class=" m-auto bg-blue-300 h-[68px] w-[68px] rounded-full justify-center mb-4"></div>
          <h5 className="text-lg mb-3 font-roboto text-gray-200">Mina Whatson</h5>
          <h6 className="text-sm mb-5 font-roboto text-gray-200">CONSULTANT</h6>
          <p className="text-xs font-roboto text-gray-200 w-96 leading-[24px] mb-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum,{" "}
          </p>
        </div>
        <div className="bg-blue-600 shadow p-4 px-16 ml-8">
          <div class=" m-auto bg-blue-300 h-[68px] w-[68px] rounded-full justify-center mb-4"></div>
          <h5 className="text-lg mb-3 font-roboto text-gray-200">Mina Whatson</h5>
          <h6 className="text-sm mb-5 font-roboto text-gray-200">CONSULTANT</h6>
          <p className="text-xs font-roboto text-gray-200 w-96 mb-6 leading-[24px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum,{" "}
          </p>
        </div> 
      </div>
    </div>
  );
};

export default Testimonial;