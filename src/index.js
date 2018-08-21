import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reducer from './reducers/counter';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

// 监听事件发生
// store.subscribe(() => console.log("State updated!", store.getState()));

const render = () => {
    ReactDOM.render(
        <App 
            onIncrement={() => store.dispatch({
                type: 'INCREMENT'
            })}
            onDecrement={() => store.dispatch({
                type: 'DECREMENT'
            })}
            value={store.getState()} />, 
            document.getElementById('root')
    );
}

render();

store.subscribe(render);

registerServiceWorker();
