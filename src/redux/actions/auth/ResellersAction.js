import axios from 'axios'
export const getAllUser = ()=> {
    return dispatch => {
      axios
        .get("http://localhost:5000/api/users",{
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        
        .then(response => {
       const getAllUser=response.data
            dispatch({
              type: "GET_ALL_USERS",
              payload: getAllUser 
            })
        })
        .catch(err => console.log(err))
    }
  }
  