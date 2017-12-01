import React from 'react';

import CharacterListComponent from './CharacterListComponent.jsx';

export default class App extends React.Component {

	render () {
		return  <div className="AppContainer">
					<div className="website-header">
						<h1>Characters</h1>
					</div>
					<CharacterListComponent />
				</div>
	}
}