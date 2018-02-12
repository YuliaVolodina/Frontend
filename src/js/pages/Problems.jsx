import React from "react";

import List from "../components/ProblemList.js";

export default class Problems extends React.Component {
    render() {
        const { query } = this.props.location;
        const { params } = this.props;


        const Problems = [
            {
                name: "Question1",
                author: "Charles",
                description: "How to get 100% without studying.",
                difficulty: null,
                good: null,
                id: 1
            },
            {
                name: "Question2",
                author: "Justin",
                description: "How to cheat your girlfriend without geting caught.",
                difficulty: null,
                good: null,
                id: 2
            },
            {
                name: "Question3",
                author: "Gabriel",
                description: "How to write code without typing.",
                difficulty: null,
                good: null,
                id: 3
            },
            {
                name: "Question4",
                author: "Guillaume",
                description: "No code!",
                difficulty: null,
                good: null,
                id :4
            }
        ].map((problem, i) => <List key={i} problem={problem}/> );

        return (
            <div>
                <h1>Problems</h1>
				<div class="well text-center">
				<h2>Problems List</h2>
				</div>
                <div class="row">{Problems}</div>
            </div>
        );
    }
}
