import React from 'react';
import ReactDOM from 'react-dom/client';

// Vue
import {AppVue} from './vue/App.vue'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppVue />
  </React.StrictMode>
);

