import React from "react";

const Section3 = () => {
  const data = [
    {
      id: 1,
      name: "Douglas Walker",
      position: "SHIEF STAFF",
    },
    {
      id: 2,
      name: "Caroline Harrison",
      position: "FOUNDER & MANAGER",
    },
    {
      id: 3,
      name: "Safia Simpson",
      position: "WEB DESIGNER",
    },
  ];

  return (
    <div className="bg-blue-50 w-full lg:h-[570px] flex items-center justify-center font-roboto">
      <div className="py-24">
        <div className="text-center pb-11">
          <h6 className="mb-3 text-subtitle uppercase font-medium font-roboto">
            Our Team
          </h6>
          <h2 className="text-3xl capitalize font-roboto text-header">
            Our top dedicated professionals.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 justify-evenly mx-5">
          {data.map((item) => (
            <div key={item.id} className=" pb-2 relative">
              <div className="lg:h-80 lg:w-72 h-80 md:h-80 md:w-72 bg-gray-300 mb-5"></div>
              <div className="absolute -right-12 top-[17.5rem] w-[300px] h-[89px] flex justify-center items-center">
                <div>
                  <h3 className="text-sm text-center pt-0 capitalize">{item.name}</h3>
                  <h5 className="text-sm text-center text-body uppercase">
                    {item.position}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
