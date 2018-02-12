import React from "react";

export default class Problems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Please enter the title of the problem",
			problem: "Please write your problem"
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({title: event.target.title});
		 this.setState({problem: event.target.problem});
    }

    handleSubmit(event) {
        alert("Your problem \"" +  this.state.title + "\" has been created");
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h1>Problems</h1>
                </div>		
                <p><input type="text" value={this.state.title} onChange={this.handleChange}/></p>
				<p><textarea value={this.state.problem} onChange={this.handleChange}/></p>
                <input type="submit" class = "btn btn-success" value="Submit" />
            </form>

        );
    }
}


