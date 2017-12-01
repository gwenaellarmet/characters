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
                type: 'human'
            }, {
                key: 1,            
                name: 'Alex Térieur',
                birthDate: '01/01/1980',
                type: 'plant'
            }, {
                key: 2,            
                name: 'Sarah Courci',
                birthDate: '01/01/1990',
                type: 'animal'
            }]
        }
    }

	render () {
        var CharacterList = this.state.characters.map(function(character){
            return <CharacterComponent key={character.key} characterName={character.name} />;
            //pass item key and the child will get the data into the store
        });


        return (
            <ul className="character-list-container">
                {CharacterList}
            </ul>           
        )
	}
}