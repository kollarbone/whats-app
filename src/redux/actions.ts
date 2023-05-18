import axios from "axios"
import { LoginActionTypes, LoginAction, ChatAction, ChatActionTypes, MessageAction, MessageActionTypes, SendActionTypes } from "../types"
import {Dispatch} from "redux"

export const fetchLogin = (idInstance:string, apiTokenInstance:string) => {
    return async (dispatch: Dispatch<LoginAction>) => {
        try {
            dispatch({type: LoginActionTypes.FETCH_LOGIN})
            const response = await axios.get(`https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`)
            dispatch({
                type: LoginActionTypes.FETCH_LOGIN_SUCCESS,
                payload: response.data.stateInstance,
                id: idInstance,
                token: apiTokenInstance
            })
        } catch (e) {
            dispatch({
                type: LoginActionTypes.FETCH_LOGIN_ERROR, 
                payload: "Произошла ошибка при авторизации"
            })
        }
    }
}
export const fetchUnlogin = () => {
  return async (dispatch: Dispatch<LoginAction>) => {
    dispatch({
        type: LoginActionTypes.FETCH_UNLOGIN,
    })
  }
}
export const fetchChat = (chatId: string, idInstance: string, apiTokenInstance: string) => {
    return async (dispatch: Dispatch<ChatAction>) => {
      try {
        dispatch({ type: ChatActionTypes.FETCH_CHAT });
        const response = await axios.post(
          `https://api.green-api.com/waInstance${idInstance}/getContactInfo/${apiTokenInstance}`,
          { chatId },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        dispatch({
          type: ChatActionTypes.FETCH_CHAT_SUCCESS,
          payload: response.data,
          id: chatId
        });
      } catch (e) {
        dispatch({
          type: ChatActionTypes.FETCH_CHAT_ERROR,
          payload: "Произошла ошибка при авторизации"
        });
      }
    };
  };
  export const fetchDeleteChat = () => {
    return async (dispatch: Dispatch<ChatAction>) => {
      dispatch({
          type: ChatActionTypes.FETCH_DELETE,
      })
    }
  }
  export const fetchMessage = (chatId: string, idInstance: string, apiTokenInstance: string, message:string) => {
    return async (dispatch: Dispatch<MessageAction>) => {
      try {
        dispatch({ type: SendActionTypes.FETCH_SEND });
        const response = await axios.post(
          `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
          { chatId, message },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        dispatch({
          type: SendActionTypes.FETCH_SEND_SUCCESS,
          payload: response.data.idMessage,
          data: []
        });
      } catch (e) {
        dispatch({
          type: SendActionTypes.FETCH_SEND_ERROR,
          payload: "Произошла ошибка при авторизации"
        });
      }
    };
  };

  export const getMessage = (chatId: string, instance: string, apiToken: string) => {
    return async (dispatch: Dispatch<MessageAction>) => {
      try {
        dispatch({ type: MessageActionTypes.FETCH_MESSAGE });
        const count = 100
        const response = await axios.post(
          `https://api.green-api.com/waInstance${instance}/getChatHistory/${apiToken}`,
          { chatId, count }
        );
        dispatch({
          type: MessageActionTypes.FETCH_MESSAGE_SUCCESS,
          data: response.data
        });
      } catch (e) {
        dispatch({
          type: MessageActionTypes.FETCH_MESSAGE_ERROR,
          payload: 'Произошла ошибка при получении сообщения',
        });
      }
    };
  };
  export const fetchDeleteMessages = () => {
    return async (dispatch: Dispatch<MessageAction>) => {
      dispatch({
          type: MessageActionTypes.FETCH_DELETE,
      })
    }
  }