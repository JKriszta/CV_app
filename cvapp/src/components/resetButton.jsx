import './resetButton.css';
import React, { useState, useEffect } from 'react';

const Button = () => {

	const [empty, setReset] = useState("");

	const handleClick = () => setReset((document.querySelector(".textA").value = `${empty}`));

	

// useEffect(() => {
// 	 	document.querySelector(".myDiv").innerHTML= "";
//  })

	
	return (

		<button type="reset" className="button" onClick={handleClick}>Reset</button>

	)
	
}

export default Button;