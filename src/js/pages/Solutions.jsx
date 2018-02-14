import React from "react"
import Textarea from "react-textarea-autosize";

export default class Solutions extends React.Component {

    problem = [];
    problem = this.props.location.state.testvalue;

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        if (this.state.value == ""){
            alert("Please enter a value");

        }else {
            alert(this.state.value);
            //backend code
        }
        event.preventDefault();
    }

    render() {

        return(
            <div>
              <h1>{this.problem.name}</h1>
                <p>{this.problem.description}</p>
                <p>Enter solution in the box below</p>
                <Textarea style = {{width:900, height: 300}} onChange={this.handleChange}/>
                <a class="btn -btn-default" onClick={this.handleSubmit}>Submit</a>
            </div>
        );
    }
}