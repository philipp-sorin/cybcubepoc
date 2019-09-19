import React, {Component} from 'react';
import {CatListView} from "./View/Cat/CatListView";

class App extends Component {
    public render() {
        return (
            <div className="App">
                <CatListView/>
            </div>
        );
    }
}

export default App;
