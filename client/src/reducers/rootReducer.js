// Creates the Redux Store
const initState = {
    test: [
        { username: "ahamd", password: "123" }
    ],
    showMenu: 0,
    results: {}
}

// Edits the Redux variables
const rootReducer = (state = initState, action) => {
    if (action.type === "SHOW_MENU") {
        return {
            ...state,
            showMenu: action.showMenu
        }
    }
    if (action.type === "SAVE_SEARCH") {
        state.results[action.cityName] = action.cityInfo
        return state
    }
    if (action.type === "DRINK_WATER") {
        return {
            ...state,
            results: action.water
        }
    }
    return state;
}
export default rootReducer;
