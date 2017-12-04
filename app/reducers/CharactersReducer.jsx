

export const charactersReducer = (state={}, action) => {
    switch(action.type) {
        case "ADD_CHARACTER": {
            console.log(action.payload);
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

        case "EDIT_CHARACTER": {
            state = state.filter(({ key }) => key !== action.payload.key)
            state = [
                ...state, 
                action.payload
            ];
            break;
        }
    }
    return state;
}