import React from "react"
import ReactStars from "react-stars"

export default class ProblemList extends React.Component{

    render() {
        const{ problem } = this.props;
        const diffRatingChanged = (newRating, problemID, userID) => {
            console.log(newRating, problemID, userID)
        }
        const revRatingChanged = (newRating, problemID, userID) => {
            console.log(newRating, problemID, userID)
        }
        return (
            <div class="col-md-4">
                <h4>{problem.name}</h4>
                <p>
                    by: {problem.author} <br/>
                    {problem.description} <br/>
                </p>
                <p id = "diff">difficulty: </p>
                <ReactStars count={5} onChange = {diffRatingChanged()} size={24} color2={'#fffe2b'}/>
                <p id = "rev">reviews: </p>
                <ReactStars count={5} onChange = {revRatingChanged()} size={24} color2={'#fffe2b'}/>
                <a class="btn btn-default" href="#">Solve</a>
            </div>
        );
    }

}