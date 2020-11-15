import {createStore,applyMiddleware,combineReducers} from "redux";

import thunk from "redux-thunk";
import manger from "./manger"
// manger存放着state:仓库存放的数据；reducer：对数据的操作
// combineReducers合并多个reducers
let rootReducers = combineReducers({manger})

export default createStore(rootReducers,applyMiddleware(thunk));