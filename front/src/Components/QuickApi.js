import React, {Component} from 'react';
import QuickSearch from './QuickSearch';
import '../Styles/QuickSearch.css'


const url = "http://localhost:5001/quicksearch";

// const url = "https://zomoapp.herokuapp.com/quicksearch";

class QuickApi extends Component {
    constructor(props) {
        super(props);

        this.state={
            QuickData:''
        }
    }
    render(){
        return(
            <>
            <div>
                <QuickSearch quickData={this.state.QuickData}/>
            </div>
            </>
        )
    }

    // api call
    componentDidMount(){
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            this.setState({QuickData:data})
        })
    }

}

export default QuickApi;