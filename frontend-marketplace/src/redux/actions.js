export const userPostFetch = user => {
    return dispatch => {
        return fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                  },
                  body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                if (data.token) {
                    localStorage.token = data.token
                    dispatch(loginUser(data.user))
                    // this.props.history.goBack()
                }
            });
    }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})


export const userLoginFetch = user => {
    return dispatch => {
        return fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                if (data.token) {
                    localStorage.token = data.token
                    dispatch(loginUser(data.user))
                    // this.props.history.goBack()
                }
            });
    }
}

export const getProfileFetch = () => {
    return dispatch => {
        const token = localStorage.token
        if (token) {
            fetch('http://localhost:3000/profile', {
                headers: {
                    Authorization: token
                }
            })
            .then(res => res.json())
            .then(profileData => {
                // debugger
                dispatch(loginUser(profileData))
            })
        }
    }
}


export const logoutUser = () => ({
    type: 'LOGOUT_USER'
})