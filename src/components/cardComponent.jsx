import React from "react";

const Card = ({ title, date, body }) => {
  return (
    <>
      <div
        className="shadow w-80 h-96 p-5"
      >
        <h4 className="text-sm font-semibold">{title}</h4>
        <h5 className="text-sm">{date}</h5>
        <p className="text-sm text-gray-600 leadin">{body}</p>
      </div>
    </>
  );
};

export default Card;
