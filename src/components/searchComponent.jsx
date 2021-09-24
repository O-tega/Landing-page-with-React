import React, { Component } from 'react';


const Search =({classname, id, inputType, placeholder, newclass, content})=>{
    return(
        <div className={newclass}>
            <input className={classname} id={id} type={inputType} placeholder={placeholder}/>
            <span>{content}</span>
        </div>
         
    )
}

export default Search;