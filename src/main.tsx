import ReactDOM from 'react-dom'

import {BrowserRouter} from 'react-router-dom';
import App from './App';



// ReactDOM.render(<App />, document.querySelector('#root'));
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector('#root'));