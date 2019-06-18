import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './Reducers/appReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  appReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
