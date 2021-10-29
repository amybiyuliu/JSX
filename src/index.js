//import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
// const App = function() {
const App = () => { // ES2015
  return(
    <div>
      <label class='label' for='name'>Enter name: </label>
      <input id='name' type='text'/>
      <button style={{backgroundColor: 'blue', color: 'white'}}> Submit</button>
    </div>
  )
}

// Take the react component and show it on ther screen
ReactDOM.render(<App />, document.querySelector('#root'));