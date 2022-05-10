const initialState = {
    isDisplay: false,
    url:''
}

const TrailerReducer =  (state = initialState, action) => {
  switch (action.type) {

    case 'DISPLAY_TRAILER': {
        state.isDisplay = true;
        state.url = action.url
        return {...state}
    }
    case 'HIDE_TRAILER': {
        state.isDisplay = false;
        return {...state}
    }
  default:
    return state
  }
}

export default TrailerReducer