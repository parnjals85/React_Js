import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";

const App = () => {
  // function clickbtn() {
  //   console.log("button is Clicked!");
  // }
 function scroll(elem){
  console.log(elem)
 }
return (
  // <div>
  //   <button onDoubleClick={clickbtn} className="">
  //     Click Me!!
  //   </button>
  //  <button onClick={function(){
  //   console.log("Hello Pranjal")
  //  }}>Click Me</button>
  // </div>
  <>
  {/* <input onChange={function(elem){
    console.log(elem.target.value);
  }} type="text" placeholder="Enter your name"></input> */}
{/* 
  <div onMouseLeave={function(val){
    console.log(val.clientY)
  }} className="Box">

  </div> */}
  <div onWheel={function(elem){
    scroll(elem.deltaX)
  }} className="Box1">Div_1</div>
  <div className="Box2"></div>
  <div className="Box3"></div>
  </>
);
};
export default App;
