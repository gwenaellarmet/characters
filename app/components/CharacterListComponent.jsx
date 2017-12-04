import React from 'react';

import CharacterComponent from './CharacterComponent.jsx';

import { connect } from 'react-redux';
import { addCharacter } from '../actions/CharactersActions.jsx';

import { Link } from 'react-router';

export class CharacterListComponent extends React.Component {

    constructor() {
        super();
        this.createNewCharacter = this.createNewCharacter.bind(this);
    }


    createNewCharacter = () => { // Will be moved to the edit page; this function should only link to an empty edit page
        this.props.dispatch(addCharacter({
            key: Date.now(),
            name: 'Alain Térieur',
            birthDate: '01/01/1990',
            type: 'human',
            skills : ["intelligent", "tall", "quick"]
        }));
    }

	render () {
        var CharacterList = this.props.characters.map((character) => {
            return <CharacterComponent 
                        key={character.key}
                        characterKey={character.key}
                        characterName={character.name}
                        characterBirthDate={character.birthDate}
                        characterType={character.type}
                        characterSkills={character.skills}
                        />;
        });


        return (
            <div>
                <Link className="btn btn-add" to="edit">Add new Character</Link>
                <ul className="character-list-container">
                    {CharacterList}
                </ul>
            </div>
            )
	}
}

function mapStateToProps(state) {
    return {
        characters: state.characters
    };
  }
  
export default connect(mapStateToProps)(CharacterListComponent);