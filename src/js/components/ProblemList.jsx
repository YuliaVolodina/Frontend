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

        const setDiffRating = (newRating) => {
            //update value in backend with new rating, problem id and user id
            //window.alert(newRating)
        }
        const setRevRating = (newRating) => {
            //update value in backend, this does in fact work
            //window.alert(newRating)
        }
        return (
            <div class="col-md-4">
                <h4>{problem.name}</h4>
                <p>
                    by: {problem.author} <br/>
                    {problem.description} <br/>
                </p>
                <p id = "diff">difficulty: </p>
                <ReactStars count={5} value={getDiffRating(problem.id)} onChange = {setDiffRating} size={24} color2={'#fffe2b'}/>
                <p id = "rev">reviews: </p>
                <ReactStars count={5} value={getRevRating(problem.id)} onChange = {setRevRating} size={24} color2={'#fffe2b'}/>
                <a class="btn btn-default" href="#">Solve</a>
            </div>
        );
    }

}