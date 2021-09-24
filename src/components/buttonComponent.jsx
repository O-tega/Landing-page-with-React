import React, {
	Component,
} from "react";

const button = ({valueInput, classname, inputType}) =>{
	return( 
	<>
	<button className= {classname} type ={valueInput} >{inputType}</button>
	</>
	)
}




export default button;