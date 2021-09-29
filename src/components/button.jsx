import React from "react";

const Button = ({ classname, label }) => {
  return (
    <>
      <button className={classname}>{label}</button>
    </>
  );
};

export default Button;
