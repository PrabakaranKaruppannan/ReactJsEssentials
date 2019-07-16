import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Message from './Message';
import * as serviceWorker from './serviceWorker';
import Hiking from "./Hiking";
import Library from "./Library";
import ColorForm from "./ColorForm";

let hikingData = {
    totalNoOfDays: 100,
    hikingDays: 25,
    remainingDays: 75
};

ReactDOM.render(<Message msg="how are you" color="blue" min={10}/>,
    document.getElementById('root1'));

ReactDOM.render(<Hiking data={hikingData}/>,
    document.getElementById('root2'));

let bookData = [{
        title: "Praba Biography",
        author: "Prabakaran",
        pages: 75
    },
    {
        title: "Shidi Biography",
        author: "Shidi",
        pages: 25
    },
    {
        title: "Khoo Biography",
        author: "Khoo",
        pages: 15
    },
];

ReactDOM.render(<Library books={bookData}/>,
    document.getElementById('root3'));

ReactDOM.render(<ColorForm />,
    document.getElementById('root4'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
