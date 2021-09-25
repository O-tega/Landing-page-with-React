import React, {
	Components,
} from "react";

const Button = ({inputype}) =>{
	return <>
	<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type ="inputype" >{inputype}</button>
	</>;
}




export default Button;