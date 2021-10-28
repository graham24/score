import React from "react";

import Players from './Players'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { people: [] };
    }
    render() {
        return (
            <div>
                <Players />
            </div>
        );
    }
}

export default App;