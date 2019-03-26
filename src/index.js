import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import App from './App';
import { GlobalStyle } from './style'

ReactDOM.render(
    <div>
        <GlobalStyle />
        <App />
    </div>
    , document.getElementById('root')
);



