import React from "react";

class Person extends React.Component {
    constructor(props) {
        super(props);

        this.state = { people: "test" };
    }
    render() {
        return (
            <div>
                <span>{this.props.name}</span>
                {this.state.people}
            </div>
        )
    }
}

export default Person;