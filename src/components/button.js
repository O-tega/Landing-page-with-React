import React from "react";

const button = ({ classname, label }) => {
  return (
    <>
      <button className={classname}>{label}</button>
    </>
  );
};

export default button;
