import { userService } from '../../services/userService'

// Thunk - Action Dispatcher

export function setUser() {
    return async dispatch => {
        const user = await userService.getUser()
        dispatch({ type: 'SET_USER', user })
    }
}

export function saveUser(user) {
    return async dispatch => {
        const savedUser = await userService.saveUser(user)
        dispatch({ type: 'SET_USER', user: savedUser })
    }
}

export function transferFund(contactId, transferAmount) {
    return async (dispatch) => {
        const savedUser = await userService.transferFund(transferAmount)
        dispatch({ type: 'SET_USER', user: savedUser })
    }
}