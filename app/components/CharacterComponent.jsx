import React from 'react';

export default class CharacterComponent extends React.Component {

	render () {

        if(this.props.characterName === undefined) {
            throw Error('You need to provide a characterName to CharacterComponent');
        } else if(this.props.characterBirthDate === undefined) {
            throw Error('You need to provide a characterBirthDate to CharacterComponent');
        } else if(this.props.characterType === undefined) {
            throw Error('You need to provide a characterType to CharacterComponent');
        } else if(this.props.characterSkills === undefined) { // Could be optional ?
            throw Error('You need to provide characterSkills to CharacterComponent');
        }

        var SkillsList = this.props.characterSkills.map(function(skill){
            return <li><span className="skill">{skill}</span></li>;
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
                            <button className="btn btn-edit">Edit</button>
                            <button className="btn btn-delete">Delete</button>
                        </div>
                    </div>
                </div>
            </li>           
        )
	}
}