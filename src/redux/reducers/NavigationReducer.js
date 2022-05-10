const initialState = {
    isDisplay: false,
}

const NavigationReducer =  (state = initialState, action) => {
  switch (action.type) {

    case 'DISPLAY_NAV': {
        state.isDisplay = !state.isDisplay;
        return {...state}
    }
    case 'HIDE_NAV': {
        state.isDisplay = false;
        return {...state}
    }
  default:
    return state
  }
}

export default NavigationReducer