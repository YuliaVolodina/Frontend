import React from "react"

export default class ProblemList extends React.Component{

    render() {
        const{ problem } = this.props;

        return (
            <div class="col-md-4">
                <h4>{problem.name}</h4>
                <p>
                    by: {problem.author} <br/>
                    {problem.description} <br/>
                </p>
                <a class="btn btn-default" href="#">Solve</a>
            </div>
        );
    }

}