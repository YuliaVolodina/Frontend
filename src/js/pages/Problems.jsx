import React from "react";
import Select from 'react-select';

import List from "../components/ProblemList.jsx";

export default class Problems extends React.Component {

    state = {
        selectedOption: '',
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }


    render() {
        const { query } = this.props.location;
        const { params } = this.props;
        const { article } = params;

        const Problems = [
            {
                name: "merge sort",
                author: "Billy Joel",
                description: "its fast",
                difficulty: null,
                good: null,
                id: 1
            },
            {
                name: "quick sort",
                author: "Scooby Doo",
                description: "its quick",
                difficulty: null,
                good: null,
                id: 2
            },
            {
                name: "radix sort",
                author: "X",
                description: "its rad",
                difficulty: null,
                good: null,
                id: 3
            },
            {
                name: "insertion sort",
                author: "Y",
                description: "its slow",
                difficulty: null,
                good: null,
                id :4
            }
        ].map((problem, i) => <List key={i} problem={problem}/> );

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
