import React from 'react';

import CharacterComponent from './CharacterComponent.jsx';

export default class App extends React.Component {

	render () {
		return  <div className="AppContainer">
					<div className="website-header">
						<h1>Characters</h1>
					</div>
					<ul className="character-list-container">
						<CharacterComponent />
						<CharacterComponent />
						<CharacterComponent />
						<CharacterComponent />
					</ul>
				</div>
	}
}