import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

import App from './components/App';


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);


window.onbeforeunload = function() {
    return "Dude, are you sure you want to leave? Think of the kittens!";
}