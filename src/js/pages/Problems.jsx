import React from "react";

export default class Problems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Please write codes"
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert("A solution code has been submitted: " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h1>Problems</h1>
                </div>
                <textarea value={this.state.value} onChange={this.handleChange}/>
                <input type="submit" value="Submit" />
            </form>

        );
    }
}
