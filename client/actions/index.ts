
export const set_token = async (dispatch, token) => {
   await dispatch({
        type: 'SET_TOKEN',
        payload: token
      }) 
}