import {Loader} from "./Common/Lang/Loader";
import React from 'react';
import ReactDOM from 'react-dom';
import "reflect-metadata";
import App from './App';

// @ts-ignore
Loader.INSTANCE.importAll(require.context("./", true, /\.ts$/));

ReactDOM.render(<App/>, document.getElementById('root'));
