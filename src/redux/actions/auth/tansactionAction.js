import axios from 'axios'
export const getAllTransactions = ()=> {
    return dispatch => {
      axios
        .get("http://localhost:5000/api/transaction",{
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        
        .then(response => {
       const getAllTransactions=response.data
            dispatch({
              type: "GET_ALL_TRANSACTION",
              payload: getAllTransactions
            })
            
    
        })
        .catch(err => console.log(err))
    }
  }
  