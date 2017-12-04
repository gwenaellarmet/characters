import { applyMiddleware, createStore } from 'redux';

import { createLogger  } from 'redux-logger';

import { reducers } from './reducers/index.jsx';

const initialStore = {
    characters : [{
        key: Date.now(),
        name: 'Alain Térieur',
        birthDate: '01/01/1990',
        type: 'human',
        skills : ["intelligent", "tall", "quick"]
    }, {
        key: Date.now()+1,            
        name: 'Alex Térieur',
        birthDate: '01/01/1980',
        type: 'plant',
        skills : ["green", "tall", "slow"]
    }, {
        key: Date.now()-1,            
        name: 'Sarah Courci',
        birthDate: '01/01/1990',
        type: 'animal',
        skills : ["soft", "tall", "quick"]
    }],
}

const middleware = applyMiddleware(createLogger())

export default createStore(reducers, initialStore, middleware);

