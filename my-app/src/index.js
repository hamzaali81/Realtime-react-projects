import React from 'react';
import ReactDOM from 'react-dom';


//PROPS (PROPERTIES)=ARGUMENTS TO COMPONENTS
//function sayName(name){
  //console.log(name)
//}

//sayName("john")

function People(){
  return(
<section>
 <Person name="hamza" job="developer"/>
 <Person name="ali" job="designer"/>


 {/* <Person1 /> */}

</section>

  );
}

const Person=props=>{
  console.log(props);
  return(

 
    <article>
      <h1>{props.name}</h1>
      <p>{props.job}</p>
      <hr/>
    </article>
  )
}

// const Person1=props=>{

//   console.log(props);
//   return(
//     <article>
//       <h1>Ali</h1>
//       <p>designer</p>
//       <hr/>
//     </article>
//   )
// }





ReactDOM.render(<People />,document.getElementById('root'));