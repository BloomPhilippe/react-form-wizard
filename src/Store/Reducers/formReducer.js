const initialState = {
    firstName: null
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
        default:
            return state
    }
}

export default setInputs