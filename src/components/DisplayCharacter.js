import React from "react"

const DisplayCharacter = (props) => {
	return (
		<div>
			<img src={props.image} alt={props.name} />
			<p>{props.name}</p>
		</div>
	)
}

export default DisplayCharacter
