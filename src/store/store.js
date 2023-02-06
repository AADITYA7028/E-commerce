import { createStore , applyMiddleware, compose} from "redux";
// import { legacy_createStore as createStore } from 'redux';
import logger from "redux-logger";
import { rootReducer } from "./root.reducer";

const middleWares = [logger];
const composedEnhancer = compose(applyMiddleware(... middleWares));

export const store = createStore(rootReducer, undefined,composedEnhancer);

