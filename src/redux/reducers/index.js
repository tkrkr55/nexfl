// reducer을  합치는 combineReducers을 만들거임

import {combineReducers} from "redux"
import movieReducer from "./movieReducer"

export default combineReducers({
  movie:movieReducer,
})