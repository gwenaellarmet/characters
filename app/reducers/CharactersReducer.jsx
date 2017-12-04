

export const charactersReducer = (state={}, action) => {
    switch(action.type) {
        case "ADD_CHARACTER": {
            state = [
                ...state,
                action.payload
            ];
            break;
        }
        case "REMOVE_CHARACTER": {  
            state = state.filter(({ key }) => key !== action.payload);
            break;
        }

        case "CHANGE_NAME": {
            state = {...state, name: action.payload}
            break;
        }
        case "CHANGE_BIRTH": {
            state = {...state, birthDate: action.payload}
            break;
        }
        case "CHANGE_TYPE": {
            // TODO Check if it's an allowed type (human, animal, plant)
            state = {...state, type: action.payload}
        }
        case "CHANGE_SKILLS": {
            state = {...state, type: action.payload}
        }
    }
    return state;
}