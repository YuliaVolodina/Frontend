import React from "react";
import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

import List from "../components/ProblemList.jsx";

export default class Problems extends React.Component {
    state = {
        Problems: [{
            name: "ass",
            author: "fast",
            description: "sk8",
            difficulty: null,
            good: null,
            id: 1
        }].map((problem, i) => <List key={i} problem={problem}/> )
    };

    componentDidMount() {
        axios.get("http://localhost:8000/restapi/problems/")
            .then(response => {
                console.log(response);
                const Problems = response.data.map((ent) => {
                    ent["difficulty"] = null;
                    ent["good"] = null;
                    return ent
                }).map((problem, i) => <List key={i} problem={problem}/> );
                this.setState({Problems})
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const { query } = this.props.location;
        const { params } = this.props;
        const { article } = params;
        const { date, filter } = query;


        // const Problems = [
        //     {
        //         name: "merge sort",
        //         author: "Billy Joel",
        //         description: "its fast",
        //         difficulty: null,
        //         good: null,
        //         id: 1
        //     },
        //     {
        //         name: "quick sort",
        //         author: "Scooby Doo",
        //         description: "its quick",
        //         difficulty: null,
        //         good: null,
        //         id: 2
        //     },
        //     {
        //         name: "radix sort",
        //         author: "X",
        //         description: "its rad",
        //         difficulty: null,
        //         good: null,
        //         id: 3
        //     },
        //     {
        //         name: "insertion sort",
        //         author: "Y",
        //         description: "its slow",
        //         difficulty: null,
        //         good: null,
        //         id :4
        //     }
        // ].map((problem, i) => <List key={i} problem={problem}/> );


        return (
            <div>
                <h1>Problems</h1>
                <div class="row">{this.state.Problems}</div>
            </div>
        );
    }
}
