import React from 'react';

import CharacterComponent from './CharacterComponent.jsx';

export default class CharacterListComponent extends React.Component {

    constructor() {
        super()
        this.state = {  
            characters : [{
                key: 0,
                name: 'Alain Térieur',
                birthDate: '01/01/1990',
                type: 'human',
                skills : ["intelligent", "tall", "quick"]
            }, {
                key: 1,            
                name: 'Alex Térieur',
                birthDate: '01/01/1980',
                type: 'plant',
                skills : ["green", "tall", "slow"]
            }, {
                key: 2,            
                name: 'Sarah Courci',
                birthDate: '01/01/1990',
                type: 'animal',
                skills : ["soft", "tall", "quick"]
            }]
        }
    }

	render () {
        var CharacterList = this.state.characters.map(function(character){
            return <CharacterComponent 
                        key={character.key} 
                        characterName={character.name}
                        characterBirthDate={character.birthDate}
                        characterType={character.type}
                        characterSkills={character.skills}
                        />;
        });


        return (
            <ul className="character-list-container">
                {CharacterList}
            </ul>           
        )
	}
}