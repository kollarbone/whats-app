import { dialogReduser } from "./dialogReduser";
import { loginReduser } from "./loginReduser";
import {combineReducers} from "redux"
import { messageReduser } from "./messageReduser";

export const rootReducer = combineReducers ( {
    login: loginReduser,
    chat: dialogReduser,
    message: messageReduser
})

export type RootState = ReturnType<typeof rootReducer>