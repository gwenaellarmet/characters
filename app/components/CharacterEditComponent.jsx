import React from 'react';

import { connect } from 'react-redux';

export class CharacterEditComponent extends React.Component {

    constructor() {
        super();
    }


	render () {
        console.log(this.props.params)
        return (
            <h1>
                Hello {this.props.params.id} !
            </h1>
            )
	}
}

function mapStateToProps(state) {
    return {
        characters: state.characters
    };
  }
  
export default connect(mapStateToProps)(CharacterEditComponent);