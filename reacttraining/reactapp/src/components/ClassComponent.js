import React,{Component} from "react"
export default class ClassComponent extends Component{
    constructor(props){
        super(props)
        console.log("constructor : ",props)
    }
    render(){
        return(
            <div>
                <h1>Class Component</h1>
                <h2>Course Name - {this.props.course.name}</h2>
            </div>
        )
    }
}
