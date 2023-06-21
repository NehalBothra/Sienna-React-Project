import React from 'react'
export default class Web extends React.Component{
    constructor(props){
        super(props)
        this.state={
            course:"Web Develoment",
        }
    }
    render(){
        return(
            <>
            <h2>We are learning about {this.state.course}</h2>
            <h1>My name is {this.props.name}</h1>
            </>
        )
    }
}