import React, { useEffect } from 'react';

const TextArea = ({ props }) => {

	useEffect(() => {
		
fetch("cv.json")
.then((response) => response.json())
.then(
	(data) =>  console.log(data),
	(error) => console.log(error)
);
	}, []);



return <textarea >Your first name</textarea>
	
}
export default TextArea;