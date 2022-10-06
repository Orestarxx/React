import {combineReducers} from "redux";
import {usersReducer,postsReducer,commentsReducer} from "../reducer";

const reducer = combineReducers({
    usersReducer,
    postsReducer,
    commentsReducer
})
export{reducer}