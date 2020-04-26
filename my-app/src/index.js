import React from 'react';
import ReactDOM from 'react-dom';


//PROPS (PROPERTIES)=ARGUMENTS TO COMPONENTS
//function sayName(name){
  //console.log(name)
//}

//sayName("john")

function People(){

  const friends=[
    {name:'hamza',
  job:'designer'
  },
  {name:'ali',
  job:'apple'
  }
  ]
  return(
<section>
 <Person person={friends[0]}/>
 <Person person={friends[1]}/>
 {/* <Person name="ahmed" job="cloudnative" age="22" company="apple"/> */}


 

</section>

  );
}

const person={
  name:"hammad",
  age:26
};
const{name}=person;
console.log(name)
const Person=props=>{
  // console.log(props);
  const {name,job}=props.person;
  return(

 
    <article>
      <h1>{name}</h1>
      <p>{job}</p>
      <hr/>
    </article>
  )
}





ReactDOM.render(<People />,document.getElementById('root'));