import { ChatActionTypes, ChatState, ChatAction } from "../../types"

const initialState: ChatState  = {
    error: null,
    chatInfo: []
}

export const dialogReduser = (state = initialState, action: ChatAction) : ChatState => {
    switch (action.type) {
      case ChatActionTypes.FETCH_CHAT:
        return {
          error: null,  chatInfo: [...state.chatInfo]
        }
      case ChatActionTypes.FETCH_CHAT_SUCCESS:
        return {
          error: null,  chatInfo: [...state.chatInfo, action.payload]
        }
      case ChatActionTypes.FETCH_CHAT_ERROR:
        return {
          error: action.payload,  chatInfo: []
        }
      case ChatActionTypes.FETCH_DELETE:
        return {
          error: "",  chatInfo: []
        }
      default:
        return state
    }
  }