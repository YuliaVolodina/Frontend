import React from "react"

export default class ProblemList extends React.Component{

    render() {
        const{ problem } = this.props;

        return (
            <div class="col-md-4">
                <h4>{problem}</h4>
                <p>problem description</p>
                <a class="btn btn-default" href="#">Solve</a>
            </div>
        );
    }

}