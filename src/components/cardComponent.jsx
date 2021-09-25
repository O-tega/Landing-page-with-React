import React, {Component} from 'react';


const Card = ({ title, content }) =>{
    return(
        <>
            <div className="shadow m-auto p-8  ">
                <div class=" m-auto bg-blue-200 h-24 w-24 rounded-full justify-center mb-4"></div>
                <h3 class="text-center">{title}</h3>
                <p  class="text-center">{content}</p>
            </div>

        </>
    )
}



export default Card;