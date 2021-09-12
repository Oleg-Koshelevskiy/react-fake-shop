import React from 'react'
import ReactDOM from 'react-dom'

// const el = React.createElement("h1",null,"Hello Reeact.js")

// JSX

const list = (
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
      <li>List item 4</li>
    </ul>
  );

const title = (
    <h1 id="test">
        <span>Hello React!!!</span>
    </h1>
);

const el = (
    <div>
      {title}
      {list}
    </div>
  );

 

ReactDOM.render(el, document.getElementById("root"));