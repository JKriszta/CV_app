import './textArea.css'

const TextArea = ({ text, send }) => {

	function inputChange(e) {
		send(e.target.value)
	}
	
	return (

		<div>
	
		<textarea id="textA" className="textA" name="text" onChange={(e) => inputChange(e)} rows={4} cols={50} defaultValue={"   "} />
		</div>

	)
	
}

export default TextArea;