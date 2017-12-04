import { combineReducers } from 'redux';

import { charactersReducer } from './CharactersReducer.jsx';

export const reducers = combineReducers({
    characters: charactersReducer
});