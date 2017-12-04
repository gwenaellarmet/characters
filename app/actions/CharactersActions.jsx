export function addCharacter (character) {
    return {
        type: "ADD_CHARACTER",
        payload: character
    }
}

export function removeCharacter (characterkey) {
    return {
        type: "REMOVE_CHARACTER",
        payload: characterkey
    }
}

export function editCharacter(character) {
    return {
        type: "EDIT_CHARACTER",
        payload: character
    }
}