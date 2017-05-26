import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBtbpsJ_Qh4fTKRBA-5tmc-vhZhQeIxU5A';

const App = () => <div><SearchBar /></div>;

ReactDOM.render(<App />, document.querySelector('.container'));
