import React from 'react';
import ReactDOM from 'react-dom';
import Increment from './components/increment';
require('../src/styles.scss');

const title = 'this is the minimal webpack babel setup';

ReactDOM.render(
   <div>
      <h1 className="styles.h1">{title}</h1>
      <p>this is what is up</p>
      <h2>Hello Shannon!</h2>
      <Increment />
   </div>,
   document.getElementById('app')
);

module.hot.accept();
