import './textArea.css'

const TextArea = ({ send }) => {

	function changeText(e) {
		send(e.target.value)
	}
	
	return (

		<div>
	
		<textarea id="textA" className="textA" name="text" onChange={(e) => changeText(e)} rows={4} cols={50} defaultValue={"   "} />
		</div>

	)
	
}

export default TextArea;