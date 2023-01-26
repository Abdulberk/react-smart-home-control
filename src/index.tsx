import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FontStyles from './fontStyle/fontStyle';





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
<FontStyles />
    <App />
  </>
  
);

