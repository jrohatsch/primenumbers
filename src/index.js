import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import DashBoard from './DashBoard.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < DashBoard MAX = { 1999 } />, document.getElementById('root'));

 serviceWorker.unregister();