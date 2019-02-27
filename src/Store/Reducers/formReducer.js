const initialState = {
    firstName: null,
    lastName: null,
    street: null,
    number: null,
    zip: null,
    city: null,
    jobTitle: null,
    jobDescription: null,
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
        default:
            return state
    }
}

export default setInputs