import React from 'react';

export default class CharacterComponent extends React.Component {

	render () {

        if(this.props.character === undefined) {
            throw Error('You need to provide a character to CharacterComponent');
        } else {
            var character = this.props.character;
            console.log(character)
        }

        return (
            <li className="character-item">
                <div className="character-card">
                    <div className="character-image character-image-placeholder"></div>
                    <div className="character-card-content">
                        <div className="character-name"> {character} </div>
                        <p className="character-infos">Birth Date : 01/01/1980 - type : human</p>
                        <ul className="character-skills">
                            <li><span className="skill">Intelligent</span></li>
                            <li><span className="skill">Funny</span></li>
                            <li><span className="skill">Tall</span></li>
                            <li><span className="skill">Ugly</span></li>
                        </ul>
                        <div className="buttons-container">
                            <button className="btn btn-edit">Edit</button>
                            <button className="btn btn-delete">Delete</button>
                        </div>
                    </div>
                </div>
            </li>           
        )
        
        
        // <div className='character-container'>
        //     <div className='character-infos'>
        //         <img className='character-pic' src="https://placeimg.com/75/75/tech"/>
        //     </div>
        //     <div className='character-attributes'>

        //     </div>
        // </div>

        // <div className="CharacterComponent">
        //             <div className="CharacterPic">
        //                 <i className="fa fa-user" aria-hidden="true"></i>
        //             </div>
		// 			<p> {character.name} </p>
        //             <p> {character.birthDate}</p>
        //             <div className="CharacterType">
        //                 <i className={'fa ' + iconType } aria-hidden="true"></i>
        //             </div>
		// 		</div>
	}
}