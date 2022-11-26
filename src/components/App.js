import React from 'react'
import '../styles/App.css';
const arr = JSON.parse(window.localStorage.getItem('props') || `["hello","world"]`) // do not change
const Join = (props) =>{
  let word=props.join(',');
  return(
    <div id ="join">
    <p>{props.words.join(",")}</p>
    </div>
  )
}
const App = () => {

  return (
    <div id="main">
      <Join  />
    </div>
  )
}


export default App;
