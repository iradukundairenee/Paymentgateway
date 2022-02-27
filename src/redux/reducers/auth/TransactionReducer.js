export const getAllTransactions = (state = { userRole: "" }, action) => {
    switch (action.type) {
      case "GET_ALL_TRANSACTION": {
        return { ...state, values: action.payload }
      }
      default: {
        return state
      }
    }
  }