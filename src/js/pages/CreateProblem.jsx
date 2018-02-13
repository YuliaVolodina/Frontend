import React from "react"

export default class CreateProblems extends React.Component {
    problem = this.props;
    render() {

        return(
            <div>
                <h1>"Create New Problem"</h1>
                <h1>{this.problem.name}</h1>
                <p>{this.problem.description}</p>

            </div>
        );
    }
}