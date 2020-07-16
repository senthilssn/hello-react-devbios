import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import devActions from './reducers/devBios';
import watchGetAllBiosRequest from './sagas/developers';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  devActions.reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(watchGetAllBiosRequest);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();