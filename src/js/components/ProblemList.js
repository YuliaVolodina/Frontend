import React from "react"
import ReactStars from "react-stars"

export default class ProblemList extends React.Component{

    render() {
        const{ problem } = this.props;

        const  getDiffRating = (problemID) => {
            //go get current rating from backend with problem id
            //return (problemID + 1)
        }
        const  getRevRating = (problemID) => {
            //go get current rating from backend with problem id
            //return (problemID - 1)
        }

        return (
            <div class="col-md-4">
                <h3>{problem.name}</h3>
                <p>
                    by: {problem.author} <br/>
                    {problem.description} <br/>
                </p>
                <p id = "diff">difficulty: </p>
                <ReactStars count={5} value={getDiffRating(problem.id)} size={24} color2={'#fffe2b'}/>
                <p id = "rev">reviews: </p>
                <ReactStars count={5} value={getRevRating(problem.id)} size={24} color2={'#fffe2b'}/>
                <a class="btn btn-success" href="#">View Problem</a>
            </div>
        );
    }

}