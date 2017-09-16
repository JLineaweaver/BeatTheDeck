import React from 'react';
import ReactDOM from 'react-dom';
import './Styling/index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './containers/App';
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer)
console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider> , document.getElementById('root')
);