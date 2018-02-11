import React from "react";

import List from "../components/ProblemList.jsx";

export default class Problems extends React.Component {
    render() {
        const { query } = this.props.location;
        const { params } = this.props;
        const { article } = params;
        const { date, filter } = query;

        const Problems = [
            {
                name: "merge sort",
                description: "its fast"
            },
            {
                name: "quick sort",
                description: "its quick"
            },
            {
                name: "radix sort",
                description: "its rad"
            },
            {
                name: "insertion sort",
                description: "its slow"
            }
        ].map((problem, i) => <List key={i} problem={problem.name}/> );

        return (
            <div>
                <h1>Problems</h1>
                <div class="row">{Problems}</div>
            </div>
        );
    }
}
