import { useDispatch } from "react-redux"
import {bindActionCreators} from "redux"
import * as LoginActionCreators from '../redux/actions'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(LoginActionCreators, dispatch)
}