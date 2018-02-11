import React from "react";

export default class Problems extends React.Component {
    options = {
        set0: ['Option 1', 'Option 2'],
        set1: ['First Option', 'Second Option', 'Third Option']
    };
    displayList(array) {
        let list = document.createElement('ul');
        for(let i = 0; i < array.length; i++) {
            // Create the list item:
            let item = document.createElement('li');
            // Set its contents:
            item.appendChild(document.createTextNode(array[i]));
            // Add it to the list:
            list.appendChild(item);
        }
        // Finally, return the constructed list:
        return list;
    }

    render() {
        return (
            <div>
                <h1>Problems</h1>
                <p id="demo"></p>
                <script>{
                    document.getElementById("demo").appendChild(
                        this.displayList(this.options.set0)
                    )
                }</script>
            </div>
        );
    }
}
