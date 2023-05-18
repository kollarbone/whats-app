import { LoginActionTypes, LoginState, LoginAction } from "../../types"


const initialState: LoginState  = {
    IdInstance: "",
    ApiTokenInstance: "",
    error: null,
    stateInstance: ""
}

export const loginReduser = (state = initialState, action: LoginAction) : LoginState => {
    switch (action.type) {
        case LoginActionTypes.FETCH_LOGIN:
            return {
                error: null, IdInstance: "", ApiTokenInstance: "", stateInstance: "" 
            }
        case LoginActionTypes.FETCH_LOGIN_SUCCESS: 
            return {
                error: null, IdInstance: action.id, ApiTokenInstance: action.token, stateInstance: action.payload    
            }
        case LoginActionTypes.FETCH_LOGIN_ERROR: 
            return {
                error: action.payload, IdInstance: "", ApiTokenInstance: "", stateInstance: ""
            }
        case LoginActionTypes.FETCH_UNLOGIN:
            return {
                error: null, IdInstance: "", ApiTokenInstance: "", stateInstance: ""   
            }
        default:
            return state
    }
}