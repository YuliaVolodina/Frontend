import React from "react"
import Textarea from "react-textarea-autosize";

export default class CreateProblems extends React.Component {
    problem = this.props;
    render() {

        return(
            <div>
                <p>Enter your problem in the box below</p>
                <Textarea style = {{width:900, height: 300}}/>
                <h1>{this.problem.name}</h1>
                <p>{this.problem.description}</p>

            </div>
        );
    }
}