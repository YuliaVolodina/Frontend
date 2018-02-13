import React from "react"
import Textarea from "react-textarea-autosize";

export default class Solutions extends React.Component {

    problem = [];
    problem = this.props.location.state.testvalue;

    handleChange(event){
        console.log(event);
    }

    handleSubmit(event){

    }

    render() {
        console.log(this.problem);

        return(
            <div>
              <h1>{this.problem.name}</h1>
                <p>{this.problem.description}</p>
                <p>Enter solution in the box below</p>
                <Textarea style = {{width:900, height: 300}} onChange={this.handleChange()}/>
                <a class="btn -btn-default" onChange={this.handleSubmit}>Submit</a>
            </div>
        );
    }
}