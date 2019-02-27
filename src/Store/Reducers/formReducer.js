const initialState = {
    firstName: {
        value: null,
        isValid: false,
    },
    lastName: {
        value: null,
        isValid: false,
    },
    street: {
        value: null,
        isValid: false,
    },
    number: {
        value: null,
        isValid: false,
    },
    zip: {
        value: null,
        isValid: false,
    },
    city: {
        value: null,
        isValid: false,
    },
    jobTitle: {
        value: null,
        isValid: false,
    },
    jobDescription: {
        value: null,
        isValid: false,
    },
    isCompleted: false
}

/**
 * State doit rester immuable !
 * @param state
 * @param action
 * @returns {*}
 */
function setInputs(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'SET_FIRSTNAME':
            console.log('eeeeeeeeeeee')
            return nextState = {
                ...state,
                firstName: action.value
            }
        case 'SET_LASTNAME':
            return nextState = {
                ...state,
                lastName: action.value
            }
        case 'SET_STREET':
            return nextState = {
                ...state,
                street: action.value
            }
        case 'SET_NUMBER':
            return nextState = {
                ...state,
                number: action.value
            }
        case 'SET_ZIP':
            return nextState = {
                ...state,
                zip: action.value
            }
        case 'SET_CITY':
            return nextState = {
                ...state,
                city: action.value
            }
        case 'SET_JOBTITLE':
            return nextState = {
                ...state,
                jobTitle: action.value
            }
        case 'SET_JOBDESCRIPTION':
            return nextState = {
                ...state,
                jobDescription: action.value
            }
        case 'TO_COMPLETE':
            return nextState = {
                ...state,
                isCompleted: true
            }
        default:
            return state
    }
}

export default setInputs