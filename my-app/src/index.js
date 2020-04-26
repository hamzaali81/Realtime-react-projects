import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css'

// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


//stateless functional component
//always return JSX


//Es6 Nested Component and react tools
// function Books(){
//    return (
  
// <section className="books">
// <Book />
//   <Book />
//   <Book />
//   <Book />
//   <Book />

// </section>
  


//    );

//   //  const Person = () => <h2>Hamza</h2>;
  
// }
// // function Greetings(){
// //   return React.createElement('h1',{},"hello world");
// // }
// // const Person = () => <h2>Hamza</h2>;
// // const Message = () => <p>Hamza</p>;

// const Book=()=>{
//  return (<article className="book">
//  <CoverImage />
//  <Title />
//   <Author />
//  </article>)
// }
// const CoverImage=()=>(
//   <img src="https://images-na.ssl-images-amazon.com/images/I/81TBdGvgJtL._AC_UL200_SR200,200_.jpg" alt="kids book" />
// )

// const Title=()=> <h1 style={{ fontSize: "2rem", color: "green"}}>Big Kindergarten</h1>;
// const authorStyling={
//   letterSpacing: "10px",
//   color:"red"
// };

// const Author=()=> <p style={authorStyling}>by Craig & Smith</p>


//three arguments elements,prosObject, children





function Person(){

  const btn='search button';
  const fname='hamza';
  const lname='ali';
  return (<section>
  
  <button>{btn}</button>
  <h2>{fname+" "+lname}</h2>
  <p>info</p>
  </section>)
}

























ReactDOM.render(<Person />,document.getElementById('root'));