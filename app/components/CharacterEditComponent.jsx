import React from 'react';
import { connect } from 'react-redux';

import Tags from 'react-tagging-input';

import { addCharacter, editCharacter, fetchCharacter } from '../actions/CharactersActions.jsx';

export class CharacterEditComponent extends React.Component {

    constructor(props) {
        super(props);

        var defaultState = { 
            key: Date.now(),
            name: '',
            birthDate: '',
            type: 'human',
            skills : []
        };

        this.editing = (this.props.params && this.props.params.id != undefined);


        if(this.editing) {
            const character = this.props.characters.filter(({ key }) => (key == this.props.params.id));

            console.log(character.length)
            if(character.length != 1) {
                throw Error("The character you're trying to edit doesn't exist");
                this.props.history.push('/')
            } else {
                this.state = { 
                    key: character[0].key,
                    name: character[0].name,
                    birthDate: character[0].birthDate,
                    type: character[0].type,
                    skills : character[0].skills
                };
            }
        } else {
            this.state = defaultState;
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSkillAdded = this.onSkillAdded.bind(this);
        this.onSkillRemoved = this.onSkillRemoved.bind(this);
    }

    handleSubmit(event) {
        if(this.editing) {
            this.props.dispatch(editCharacter(this.state));
        } else {
            this.props.dispatch(addCharacter(this.state));
        }
        this.props.history.push('/')
        
        event.preventDefault();
    }

    handleInputChange(event) {  
        const target = event.target;
        const name = target.name;
        const value = target.value;
        
        this.setState({
          [name]: value
        });
    }

    onSkillAdded(skill) {
        this.setState({
            skills: [...this.state.skills, skill]
        });
    }

    onSkillRemoved(skill, index) {
        this.setState({
            skills: this.state.skills.filter((skill, i) => i !== index)
        });
    }

	render () {
        const submitText = (this.editing) ? "Edit character" : "Create new character";


        console.log(submitText);
        return (
            <form onSubmit={this.handleSubmit} className="character-form">
                <label>
                    Name* :
                    <input required
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange} />
                </label>
                <label>
                    Birthdate* :
                    <input required
                    name="birthDate"
                    pattern="^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$"
                    placeholder="DD/MM/YYYY"
                    value={this.state.birthDate}
                    onChange={this.handleInputChange} />
                </label>
                <label>
                    Type* :
                    <select required
                    name="type"
                    value={this.state.type}
                    onChange={this.handleInputChange} >
                        <option value="human">Human</option>
                        <option value="plant">Plant</option> 
                        <option value="animal">Animal</option>
                    </select>
                </label>
                <label>
                    Skills :
                    <Tags
                    tags={this.state.skills}
                    placeholder="Add a skill"
                    onAdded={this.onSkillAdded.bind(this)}
                    onRemoved={this.onSkillRemoved.bind(this)} />
                </label>
                <button type="Submit">{submitText}</button>
            </form>
            
            )
	}
}

function mapStateToProps(state) {
    return {
        characters: state.characters
    };
}
  
export default connect(mapStateToProps)(CharacterEditComponent);