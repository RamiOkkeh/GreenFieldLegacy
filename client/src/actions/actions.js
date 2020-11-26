// Creates Redux functions that edit the Redux variables to be used by any React||Redux component

export const showMenu = (z) => {
    return {
        type: 'SHOW_MENU',
        showMenu: z
    }
}
export const showSearch = (z) => {
    return {
        type: 'SHOW_SEARCH',
        showSearch: z
    }
}
export const saveSearch = (cityInfo, cityName) => {
    return {
        type: 'SAVE_SEARCH',
        cityInfo: cityInfo,
        cityName: cityName
    }
}
export const drink = (water) => {
    return {
        type: 'DRINK_WATER',
        water: water
    }
}
