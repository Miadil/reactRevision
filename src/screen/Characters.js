import React, { Component } from "react"
import DisplayCharacter from "../components/DisplayCharacter"

import users from "../asset/usersList"

class Characters extends Component {
	state = {
		characters: [],
	}

	getCharacter = () => {
		fetch("http://hp-api.herokuapp.com/api/characters")
			.then((res) => res.json())
			.then((res) => this.setState({ characters: res }))
	}
	componentDidMount() {
		this.getCharacter()
		console.log("compo", this)
	}
	render() {
		console.log(this.state)
		return (
			<div>
				{this.state.characters.map((character) => (
					<DisplayCharacter {...character} />
				))}
			</div>
		)
	}
}

export default Characters
