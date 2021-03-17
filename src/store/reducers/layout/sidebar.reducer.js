import * as Actions from  "store/actions"

const initialState = {
  isPinnedSidebar: true
}

const sidebar = function (state = initialState, action) {
  switch (action.type) {
    case Actions.TOGGLE_PIN_SIDEBAR: {
      return {
        ...state,
        isPinnedSidebar: !state.isPinnedSidebar,
      }
    }
    default: {
      return state
    }
  }
}

export default sidebar
