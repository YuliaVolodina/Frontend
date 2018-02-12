import React from "react";
import axios from "axios";
import { IndexLink, Link } from "react-router";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
import Select from 'react-select';

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
        const createProblemClass = location.pathname.match(/^\/createProblem/) ? "active" : "";


        const options = [
            'one', 'two', 'three'
        ];
        const defaultOption = options[0];

        const { selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;
        const filtered = [];

        const filter = () => {
            for(let problems of Problems){
                if(selectedOption.label.equals("Difficulty")) {
                    if (problems.difficulty.equals(selectedOption)) {
                        filtered.push(options);
                    }
                }
                if(selectedOption.label.equals("Rating")){
                    if (problems.good.equals(selectedOption)) {
                        filtered.push(options);
                    }
                }
            }
        }


        return (
            <div>
                <h1>Problems</h1>
                <div class="row">{this.state.Problems}</div>
                <a  className={createProblemClass}>
                    <Link class="btn btn-success" to="createProblem">Add Problem</Link>
                </a>
                <Select
                    name="form-field-name"
                    value={value}
                    onChange={this.handleChange}
                    options={[
                        { value: 'Difficulty', label: 'Difficulty' },
                        { value: 'Rating', label: 'Rating' },
                    ]}
                />
                <div class="row">{Problems}</div>
            </div>
        );
    }
}
