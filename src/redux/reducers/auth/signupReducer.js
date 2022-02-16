export const signup = (state = { userRole: "admin" }, action) => {
    switch (action.type) {
      case "SIGNUP_WITH_JWT": {
        return { ...state, values: action.payload }
      }
      case "CHANGE_ROLE": {
        return { ...state, userRole: action.userRole }
      }
      default: {
        return state
      }
    }
  }
  