import React from 'react'; 
import SearchBox from '../SearchBox/SearchBox'
import Header from '../Header/Header';
import './App.css';


class App extends React.Component {

    constructor(){
        super();

        this.state = {
            headerText: 'Name It!',
            headerExpanded: true,
        };
    }

    handleInputChange = (inputText) => {
        this.setState({ headerExpanded: !inputText });
    }

    state = {
        headerText: "Name It!",
    };

    render() {
        return(
            <div>
                    <Header headerExpanded={this.state.headerExpanded} headTitle = {this.state.headerText} />
                    <SearchBox onInputChage = {this.handleInputChange} />
            </div>
        )
    }
}

export default App;
