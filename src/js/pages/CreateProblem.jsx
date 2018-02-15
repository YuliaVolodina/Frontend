import React from "react"
import axios from "axios";

import Textarea from "react-textarea-autosize";

export default class CreateProblems extends React.Component {
    problem = this.props;
	

    constructor(props) {
        super(props);
        this.state = {title: '',
            description: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({title: event.target.value});
        console.log(this.state.title);
    }

    handleChange2(event) {
        this.setState({description: event.target.value});
        console.log(this.state.description);
    }

    handleSubmit(event) {
        axios.post("http://localhost:8000/restapi/problem/", {
            title: this.state.title,
            description: this.state.description,
            author: 'me',
            solution: 'rip',
            difficulty: 1,
            rating: 1,
            programming_language: 'python'
        })
        .then(function (response) {
           console.log(response);
       })
        .catch(function (error) {
            console.log(error);
        });

        console.log("hello");
        alert('A name was submitted: ' + this.state.title);
        console.log(this.state.title);
        event.preventDefault();
    }
    render() {

        return(
            <div>
			<form>
                <p>Enter the title of the problem in the box below</p>
				<p><input type="text"  onChange={this.handleChange}/></p>
				<p>Enter your problem in the box below</p>
                <p><input type="text"  onChange={this.handleChange2}/></p>
				<a class="btn btn-success" onClick={this.handleSubmit}>Submit</a>
                <h1>{this.problem.name}</h1>
                <p>{this.problem.description}</p>
			</form>
            </div>
        );
    }
}