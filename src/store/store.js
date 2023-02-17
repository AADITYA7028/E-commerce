import { createStore , applyMiddleware, compose} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root.reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistconfig = {
    key: "root",
    storage,
    whilelist: ["cart"]
}

const persistedReducer = persistReducer(persistconfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== "production" && logger, thunk].filter(Boolean);

const composedEnhancer = compose(applyMiddleware(... middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancer);

export const persistor = persistStore(store);