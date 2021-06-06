import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { compose, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootreducer from './store/reducers/rootreducer';
import { Provider } from 'react-redux';

const composeEnhancers =
	(typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

const store = createStore(
	rootreducer,
	composeEnhancers(applyMiddleware(ReduxThunk)),
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
