import React from 'react';
export default class Class15 extends React.Component{
   constructor(){
    super()
    this.state={
        color:"red",
        name:"Nehal",
        age:24
    }
   }
   render(){
    return(
        <>
        <h4>My name is {this.state.name} and I am {this.state.age} years old.</h4>
        <h5>My car is in {this.state.color} color</h5>
        </>
    )
   }
}