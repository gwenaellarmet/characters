import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { removeCharacter } from '../actions/CharactersActions.jsx';

export class CharacterComponent extends React.Component {

    constructor() {
        super();
        this.deleteCharacter = this.deleteCharacter.bind(this);
    }

    deleteCharacter = () => {
        this.props.dispatch(removeCharacter(this.props.characterKey));
    };


	render () {
        if(this.props.characterKey === undefined) {
            throw Error('You need to provide a characterKey to CharacterComponent');
        } else if(this.props.characterName === undefined) {
            throw Error('You need to provide a characterName to CharacterComponent');
        } else if(this.props.characterBirthDate === undefined) {
            throw Error('You need to provide a characterBirthDate to CharacterComponent');
        } else if(this.props.characterType === undefined) {
            throw Error('You need to provide a characterType to CharacterComponent');
        } else if(this.props.characterSkills === undefined) { // Could be optional ?
            throw Error('You need to provide characterSkills to CharacterComponent');
        }


        var i =0; // React wants a key when iterating element
        var SkillsList = this.props.characterSkills.map((skill) => {
            return <li key={i++}><span className="skill">{skill}</span></li>;
        });

        return (
            <li className="character-item">
                <div className="character-card">
                    <div className="character-image character-image-placeholder"></div>
                    <div className="character-card-content">
                        <div className="character-name"> {this.props.characterName} </div>
                        <p className="character-infos">Birth Date : {this.props.characterBirthDate} - type : {this.props.characterType}</p>
                        <ul className="character-skills">
                            {SkillsList}
                        </ul>
                        <div className="buttons-container">
                            <Link className="btn btn-edit" to={"edit/" + this.props.characterKey}>Edit</Link>
                            <button className="btn btn-delete" onClick={this.deleteCharacter} >Delete</button>
                        </div>
                    </div>
                </div>
            </li>           
        )
	}
}

function mapStateToProps(state) {
    return {
    };
  }
  
export default connect(mapStateToProps)(CharacterComponent);