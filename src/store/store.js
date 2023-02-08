import { createStore , applyMiddleware, compose} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root.reducer";

const loggerMiddleware = (store) => (next) => (action) =>{
    if(!action.type) return next(action);

    console.log("TYPE : ", action.type);
    console.log("PAYLOAD : " , action.payload);
    console.log("CURRENT_STATE : " , store.getState());

    next(action);

    console.log("NEXT_STATE : ", store.getState());
}

const middleWares = [loggerMiddleware];
const composedEnhancer = compose(applyMiddleware(... middleWares));

export const store = createStore(rootReducer, undefined,composedEnhancer);

