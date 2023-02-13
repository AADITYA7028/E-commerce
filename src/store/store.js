import { createStore , applyMiddleware, compose} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root.reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const loggerMiddleware = (store) => (next) => (action) =>{
    if(!action.type) return next(action);

    console.log("TYPE : ", action.type);
    console.log("PAYLOAD : " , action.payload);
    console.log("CURRENT_STATE : " , store.getState());

    next(action);

    console.log("NEXT_STATE : ", store.getState());
}

const persistconfig = {
    key: "root",
    storage,
    blacklist: ["user"]
}

const persistedReducer = persistReducer(persistconfig, rootReducer);

const middleWares = [loggerMiddleware];
const composedEnhancer = compose(applyMiddleware(... middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancer);

export const persistor = persistStore(store);