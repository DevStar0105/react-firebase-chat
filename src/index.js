import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from 'firebase/app';

import registerServiceWorker from './registerServiceWorker';
//import { firebaseConfig } from './config';

const firebaseConfig = {
    apiKey: "AIzaSyDBAi77uaZgEpUnD3MFSKJQ9-4g6STFSjI",
    authDomain: "lambchat.firebaseapp.com",
    projectId: "lambchat",
    storageBucket: "lambchat.appspot.com",
    messagingSenderId: "857557659627",
    appId: "1:857557659627:web:144ff2938fa4cdb06e73ae",
    measurementId: "G-DW0CKD00HX",
    databaseURL: "https://lambchat-default-rtdb.firebaseio.com/"
  };
initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
