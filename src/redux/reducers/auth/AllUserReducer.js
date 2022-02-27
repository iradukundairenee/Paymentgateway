export const reseller = (state = { userRole: "" }, action) => {
    switch (action.type) {
      case "GET_ALL_USERS": {
        return { ...state, values: action.payload }
      }
      default: {
        return state
      }
    }
  }
  