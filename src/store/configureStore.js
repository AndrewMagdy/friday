import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware, { END } from "redux-saga";
import logger from "redux-logger";
import rootReducer from "../reducers/";
import rootSaga from "../sagas/";

const configureStore = initialState => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware, logger)
  );

  sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);
  return store;
};

export default configureStore;
