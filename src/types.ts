
export interface LoginState {
    IdInstance: string,
    ApiTokenInstance: string,
    error: null | string,
    stateInstance: string
}

export enum LoginActionTypes {
    FETCH_LOGIN = "FETCH_LOGIN",
    FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS",
    FETCH_LOGIN_ERROR = "FETCH_LOGIN_ERROR",
    FETCH_UNLOGIN = "FETCH_UNLOGIN"
}

interface fetchLoginAction {
    type: LoginActionTypes.FETCH_LOGIN
}
interface fetchLoginSuccessAction {
    type: LoginActionTypes.FETCH_LOGIN_SUCCESS
    payload: string
    id: string 
    token: string 
}
interface fetchLoginErrorAction {
    type: LoginActionTypes.FETCH_LOGIN_ERROR
    payload: string
}
interface fetchUnloginAction {
    type: LoginActionTypes.FETCH_UNLOGIN
}
export type LoginAction = fetchUnloginAction | fetchLoginAction | fetchLoginSuccessAction | fetchLoginErrorAction


export interface ChatState {
    error: null | string,
    chatInfo: any[]
}

export enum ChatActionTypes {
    FETCH_CHAT = "FETCH_CHAT",
    FETCH_CHAT_SUCCESS = "FETCH_CHAT_SUCCESS",
    FETCH_CHAT_ERROR = "FETCH_CHAT_ERROR",
    FETCH_DELETE = "FETCH_DELETE"
}

interface fetchChatAction {
    type: ChatActionTypes.FETCH_CHAT
}
interface fetchChatSuccessAction {
    type: ChatActionTypes.FETCH_CHAT_SUCCESS
    payload: any[] 
    id: string
}
interface fetchChatErrorAction {
    type: ChatActionTypes.FETCH_CHAT_ERROR
    payload: string
}
interface fetchDeleteAction {
    type: ChatActionTypes.FETCH_DELETE
}
export type ChatAction = fetchDeleteAction | fetchChatAction | fetchChatSuccessAction | fetchChatErrorAction

export interface MessageState {
    error: null | string,
    idMessage: any[],
    messages: any[]
}

export enum MessageActionTypes {
    FETCH_MESSAGE = "FETCH_MESSAGE",
    FETCH_MESSAGE_SUCCESS = "FETCH_MESSAGE_SUCCESS",
    FETCH_MESSAGE_ERROR = "FETCH_MESSAGE_ERROR",
    FETCH_DELETE = "FETCH_DELETE"
}
export enum SendActionTypes {
    FETCH_SEND = "FETCH_SEND",
    FETCH_SEND_SUCCESS = "FETCH_SEND_SUCCESS",
    FETCH_SEND_ERROR = "FETCH_SEND_ERROR",
}
interface fetchSendAction {
    type: SendActionTypes.FETCH_SEND
}
interface fetchSendSuccessAction {
    type: SendActionTypes.FETCH_SEND_SUCCESS
    payload: any[] 
}
interface fetchSendErrorAction {
    type: SendActionTypes.FETCH_SEND_ERROR
    payload: string
}

interface fetchMessageAction {
    type: MessageActionTypes.FETCH_MESSAGE
}
interface fetchMessageSuccessAction {
    type: MessageActionTypes.FETCH_MESSAGE_SUCCESS
    data: any[]
}
interface fetchMessageErrorAction {
    type: MessageActionTypes.FETCH_MESSAGE_ERROR
    payload: string
}
interface fetchDeleteMessageAction {
    type: MessageActionTypes.FETCH_DELETE
}

export type MessageAction = fetchDeleteMessageAction | fetchMessageAction | fetchMessageSuccessAction | fetchMessageErrorAction | fetchSendAction | fetchSendSuccessAction | fetchSendErrorAction