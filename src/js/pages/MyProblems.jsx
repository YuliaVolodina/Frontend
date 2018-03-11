import React from "react";

import axios from "axios";


axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
import Select from "react-select";

import List from "../components/ProblemList.jsx";






export default class MyProblems extends React.Component {

    login = this.props.location.state.login;
    state = {
        showModal: false,
        Problems: [{
            name: "1",
            author: "yul",
            description: "sk8",
            difficulty: 1,
            good: 4,
            id: 1
        },
            {
                name: "2",
                author: "gui",
                description: "sk8",
                difficulty: 2,
                good: 3,
                id: 2
            },
            {
                name: "3",
                author: "laur",
                description: "sk8",
                difficulty: 3,
                good: 2,
                id: 3
            },
            {
                name: "4",
                author: "gab",
                description: "sk8",
                difficulty: 4,
                good: 1,
                id: 4
            }
        ].map((problem, i) => <List key={i} problem={problem}/>),
        selectedOption: '',
        searchTerm: '',
        username: "yuls"
    };

    Problems = [{
        name: "1",
        author: "yul",
        description: "sk8",
        difficulty: 1,
        good: 4,
        id: 1
    },
        {
            name: "2",
            author: "gui",
            description: "sk8",
            difficulty: 2,
            good: 3,
            id: 2
        },
        {
            name: "3",
            author: "laur",
            description: "sk8",
            difficulty: 4,
            good: 5,
            id: 3
        },
        {
            name: "4",
            author: "gab",
            description: "sk8",
            difficulty: 3,
            good: 1,
            id: 4
        }
    ];

    handleFilter() {


        const temp = [];
        for (let problem of this.Problems) {
            if (problem.author == "yul") {
                temp.push(problem);
            }
        }
        console.log(temp);
        const myProblems = temp.map((problem, i) => <List key={i} problem={problem}/>);
        this.setState({Problems: myProblems});
    }


    render() {

        return (
            <div>

                <h1>My Problems</h1>;



                <div class="row">{this.handleFilter.bind(this)}</div>


                <div class="row">{this.state.Problems}</div>



                <div class="row">{MyProblems}</div>
            </div>
        );
    }

}