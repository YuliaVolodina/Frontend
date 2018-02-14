import React from "react"
import Textarea from "react-textarea-autosize"

export default class CreateProblem extends React.Component {
    problem = this.props;


    constructor(props) {
        super(props);

        this.state = {
            value:'',
            field1: '',
            field2: '',
            field3:'',
            field4: '',
            field5:''

        };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleChange4 = this.handleChange4.bind(this);
        this.handleChange5 = this.handleChange5.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange1(event) {
        this.setState({field1: event.target.value});

        console.log(this.state);

    }

    handleChange2(event) {
        this.setState({field2: event.target.value});
        console.log(this.state);
    }

    handleChange3(event) {
        this.setState({field3: event.target.value});
        console.log(this.state);
    }

    handleChange4(event) {
        this.setState({field4: event.target.value});
        console.log(this.state);
    }

    handleChange5(event) {
        this.setState({field5: event.target.value});
        console.log(this.state);
    }

    handleSubmit(event) {
        console.log("hello");
        alert('A name done: ' + this.state.field1);
        alert('A thing : ' + this.state.field2);
        alert('A name was submitted: ' + this.state.field3);
        alert('A name was submitted: ' + this.state.field4);
        alert('A name was submitted: ' + this.state.field5);

        if (this.state.field1 == "" || this.state.field2 == "" || this.state.field3 == "" || this.state.field4 == "" || this.state.field5 == "") {
            alert("Please enter something!!!!")
        } else {
            console.log(this.state.field1);

            console.log(this.state.field2);
            console.log(this.state.field3);
            console.log(this.state.field4);
            console.log(this.state.field5);
            event.preventDefault();
            //This is where the backend comes in...
        }
    }
        render()
        {


            console.log(this.problem);

            return (
                <div>

                    <form>
                        <p>Enter the title of the problem in the box below</p>
                        <p><input type="text" onChange={this.handleChange1}/></p>
                        <p>Enter the problem type below</p>
                        <p><input type="text" onChange={this.handleChange2}/></p>
                        <p>Enter the estimated difficulty level on a scale from 1-5</p>
                        <p><input type="text" onChange={this.handleChange3}/></p>
                        <p>Enter your problem in the box below</p>
                        <p><Textarea style={{width: 300, height: 300}} onChange={this.handleChange4}/></p>
                        <p>Enter your solution to the problem</p>
                        <p><Textarea style={{width: 300, height: 300}} onChange={this.handleChange5}/></p>
                        <a class="btn btn-default" onClick={this.handleSubmit}>Submit</a>
                        <h1>{this.problem.name}</h1>
                        <p>{this.problem.description}</p>
                    </form>
                </div>
            );
        }
    }
