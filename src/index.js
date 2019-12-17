import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import DashBoard from './DashBoard.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < DashBoard MAX = { 5000 }
        />, document.getElementById('root'));

        serviceWorker.unregister();