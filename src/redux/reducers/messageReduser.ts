import { MessageActionTypes, MessageState, MessageAction, SendActionTypes } from "../../types"

const initialState: MessageState  = {
    error: null,
    idMessage: [],
    messages: []
}

export const messageReduser = (state = initialState, action: MessageAction) : MessageState => {
    switch (action.type) {
      case MessageActionTypes.FETCH_MESSAGE:
        return {
          error: null,  idMessage: [state.idMessage], messages:[]
        }
      case MessageActionTypes.FETCH_MESSAGE_SUCCESS:
        return {
          error: null,  idMessage: [state.idMessage], messages:action.data
        }
      case MessageActionTypes.FETCH_MESSAGE_ERROR:
        return {
          error: action.payload,  idMessage: [], messages: []
        }
      case MessageActionTypes.FETCH_DELETE:
        return {
          error: "",  idMessage: [], messages: []
        }
      case SendActionTypes.FETCH_SEND:
        return {
          error: null,  idMessage: [state.idMessage], messages: state.messages
        }
      case SendActionTypes.FETCH_SEND_SUCCESS:
        return {
          error: null,  idMessage: [...state.idMessage, action.payload], messages: state.messages
        }
      case SendActionTypes.FETCH_SEND_ERROR:
        return {
          error: action.payload,  idMessage: [], messages: []
        }
      default:
        return state
    }
  }