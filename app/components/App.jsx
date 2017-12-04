import React from 'react';

import { Link } from 'react-router';

export default class App extends React.Component {

	render () {
		return  <div className="AppContainer">
					<div className="website-header">
						<Link className="header-link" to="/"><h1>Characters</h1></Link>
					</div>
					{this.props.children}
				</div>
	}
}