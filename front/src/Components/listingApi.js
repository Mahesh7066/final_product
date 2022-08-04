import React,{Component} from 'react';
import axios from 'axios';
import Header from './Header'
import ListingDisplay from './displayList';
import CuisineFilter from './cuisineFilter';
import CostFilter from './costFilter';
import '../Styles/listing.css';

// const url = "https://zomoapp.herokuapp.com/restaurant?mealtype_id="
const url = "http://localhost:5001/mealtype_id="

class Listing extends Component {
    constructor(props){
        super()

        this.state={
            restaurantList:''
        }
    }

    setDataAsPerFilter = (sortData) => {
        this.setState({restaurantList:sortData})
    }

    render(){
        return(
            <>
                <Header/>
                <div className="row mainContainer">
                    <div className="col-sm-3 ml-2 mt-4 filter">
                        <h3>Filters</h3>
                        <CuisineFilter restPerCuisine={(data) => {this.setDataAsPerFilter(data)}}/> 
                        <CostFilter restPerCost={(data) => {this.setDataAsPerFilter(data)}}/>     
                    </div>
                    <div className="col-lg-6 col-md-4 cl-sm-3 mt-4">
                        <ListingDisplay listData={this.state.restaurantList}/>
                    </div>
                </div>
            </>
        )
    }

    // callapi local
    componentDidMount(){
        let mealId = this.props.match.params.mealId;
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${url}${mealId}`)
        .then((res) => {this.setState({restaurantList:res.data})})
    }
}

//<Pagination count={4} variant="outlined" color="secondary" />

export default Listing;