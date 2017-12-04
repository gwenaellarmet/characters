export function addCharacter (character) {
    console.log('Action Add character triggered');
    return {
        type: "ADD_CHARACTER",
        payload: character,
    }
}

export function removeCharacter (characterkey) {
    return {
        type: "REMOVE_CHARACTER",
        payload: characterkey,
    }
}

export function changeCharacterName (characterKey, name) {
    return {
        type: "CHANGE_NAME",
        payload: name,
        characterKey
    }
}

export function changeCharacterBirthDate (characterKey, birthDate) {
    return {
        type: "CHANGE_BIRTH",
        payload: birthDate,
        characterKey
    }
}

export function changeCharacterType (characterKey, type) {
    return {
        type: "CHANGE_TYPE",
        payload: type,
        characterKey
    }
}

export function changeCharacterSkills (characterKey, skills) {
    return {
        type: "CHANGE_SKILLS",
        payload: skills,
        characterKey
    }
}