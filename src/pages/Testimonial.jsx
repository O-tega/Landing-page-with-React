import React from "react";

const Testimonial = () => {
  const data = [
    {
      id: 1,
      name: "Mina Whatson",
      position: "CONSULTANT",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,",
    },
    {
      id: 2,
      name: "Mina Whatson",
      position: "CONSULTANT",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,",
    },
  ];
  return (
    <div className="bg-blue-500 w-full p-5 md:p-10 text-center my-24">
      <h5 className="text-gray-200 text-3xl pt-10 font-roboto">
        We’re trusted by clients.
      </h5>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 justify-center mt-8 lg:mx-32 md:mx-12">
        {data.map((item) => {
          return (
            <div key={item.id} className="bg-blue-600 shadow p-4 lg:px-16 md:mx-5">
              <div class=" m-auto bg-blue-300 h-[68px] w-[68px] rounded-full justify-center mb-4"></div>
              <h5 className="text-lg mb-3 font-roboto text-gray-200">
                {item.name}
              </h5>
              <h6 className="text-sm mb-5 font-roboto text-gray-200">
                {item.position}
              </h6>
              <p className="text-xs font-roboto text-gray-200 leading-[24px] mb-6">
                {item.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
