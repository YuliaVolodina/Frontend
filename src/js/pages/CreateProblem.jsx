import React from "react"
import Textarea from "react-textarea-autosize";

export default class CreateProblems extends React.Component {
    problem = this.props;
	

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state);
    }

    handleSubmit(event) {
        console.log("hello");
        alert('A name was submitted: ' + this.state.value);
        console.log(this.state.value);
        event.preventDefault();
    }
    render() {

        return(
            <div>
			<form>
                <p>Enter the title of the problem in the box below</p>
				<p><input type="text"  onChange={this.handleChange}/></p>
				<p>Enter your problem in the box below</p>
                <p><Textarea style = {{width:300, height: 300}} /></p>
				<a class="btn btn-success" onClick={this.handleSubmit}>Submit</a>
                <h1>{this.problem.name}</h1>
                <p>{this.problem.description}</p>
			</form>
            </div>
        );
    }
}