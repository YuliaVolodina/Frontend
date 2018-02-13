import React from "react"

export default class Solutions extends React.Component {

    problem = [];
    problem = this.props.location.state.testvalue;

    render() {
        console.log(this.problem);

        return(
            <div>
              <h1>{this.problem.name}</h1>
                <p>{this.problem.description}</p>
            </div>
        );
    }
}