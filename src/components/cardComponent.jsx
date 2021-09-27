import React, {Component} from 'react';

const Card = ({ title, date, body }) => {
  return (
    <>
      <div
        className="shadow m-auto"
        style={{
          width: '455px',
          padding: '10px',
          Height: '485px',
          Top: '6468px',
          Left: '-1754px',
        
        }}
      >
        <h4>{title}</h4>
        <h5>{date}</h5>
        <p>{body}</p>
      </div>
    </>
  );
};

export default Card;
