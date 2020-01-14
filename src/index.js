import _ from 'lodash';
import * as React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const element = document.createElement('div');
element.id = 'app';
document.body.append(element);
ReactDom.render(<App />, element);
