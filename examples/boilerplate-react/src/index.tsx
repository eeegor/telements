import React, { HTMLAttributes } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { defineCustomElements, JSX as EnhancedJSX } from '@telements/components/loader';
import App from './App';
import './index.css';

type StencilToReact<T> = {
  [P in keyof T]?: T[P] & Omit<HTMLAttributes<Element>, 'className'> & {
    class?: string;
  };
} ;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  export namespace JSX {
    interface IntrinsicElements extends StencilToReact<EnhancedJSX.IntrinsicElements> {}
  }
}

defineCustomElements(window)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
