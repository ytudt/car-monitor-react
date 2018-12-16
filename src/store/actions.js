export function setUserInfo(data) {
    return (dispatch) => {
        dispatch({ type: 'UPDATE_USER_INFO', data: data })
    }
}
