import React, { Component } from 'react';


const Search =({classname, id, inputType, placeholder, newclass, content, spanClass})=>{
    return(
        <div className={newclass}>
            <input className={classname} id={id} type={inputType} placeholder={placeholder}/>
            <span className={spanClass}>{content}</span>
        </div>
         
    )
}

export default Search;