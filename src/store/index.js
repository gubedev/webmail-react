import * as reduxModule from "redux"
import { applyMiddleware, compose, createStore } from "redux"
import createSagaMiddleware from "redux-saga"
import rootSaga from "store/sagas"
import createReducer from "store/reducers"

/*
Fix for Firefox redux dev tools extension
https://github.com/zalmoxisus/redux-devtools-instrument/pull/19#issuecomment-400637274
 */
// @ts-ignore
reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = "@@redux/INIT"

const composeEnhancers =
  // @ts-ignore
  process.env.NODE_ENV !== "production" && typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(createReducer(), enhancer)

store.asyncReducers = {}

export const injectReducer = (key, reducer) => {
  if (store.asyncReducers[key]) {
    return
  }
  store.asyncReducers[key] = reducer
  store.replaceReducer(createReducer(store.asyncReducers))
  return store
}

sagaMiddleware.run(rootSaga)

export default store
