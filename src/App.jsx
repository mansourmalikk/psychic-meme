import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import NavBar from "./ComponentNav";
// import MainImg from "./Main-img";
// import Safe from "./ComponentSafe";
// import FluidLorem from "./ComponentFluid";
// import FluidFooter from "./FluidFooter";
// import { ComponentApi } from "../Components/ComponentApi";
// import { ComponentHook } from "./ComponentHooks";
const images = [
  //0
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //1
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //2
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //3
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //4
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];
function App() {
  const [current, setCurrent] = useState(0); // it means we start from first index image
  // we are updating current with setCurrent functton
  const nextSlide = () => {
    // and also we are setting the current the data, we are updating it
    setCurrent(current === images.length - 1 ? 0 : current + 1); // it means tat if our image is reached to end we should use zero again to start from 0
  }; // if else that our image has not reached to end plus it by 1
  const prevSlide = () => {
    // it means if current is 0 2-update the data of current to image of length minus 1, 5-1=4
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };// in up if 0===0 5-1=4 2-setCurrent(4) if 1===0 false 

  return (
    <>
      <h2> Project 1 : Carousel</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
        
           {images.map(
            (image, index) =>
              current === index &&  (// if this condtion current===index is true it will render the div
             <div key={image} className="slide">
              <img src={image} alt="images" />
                </div>
             
                
              )
          )}
      </div>
    </>
  );
}
// function App() {
//   // const [count, setCount] = useState(0);

//   return (
//     <>
// <ComponentApi />
//       <NavBar />
//       {/* <ComponentHook /> */}
//       <MainImg />
//       <Safe />
//       <FluidLorem />
//       <FluidFooter />
//       <NavBar />

//       <h1>This is my first react app</h1>
//       {/* <div>
//         <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank" rel="noreferrer">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div> */}
//       {/* <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   );
// }

export default App;
