import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer.js';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
// import { store, persistor } from './createStore'

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
