import React from "react"
import Textarea from "react-textarea-autosize";

export default class Solutions extends React.Component {
    render() {
        return (
            <div>
                <p>Enter solution in the box below</p>
                <Textarea style = {{width:900, height: 300}}/>
            </div>
        );
    }
}