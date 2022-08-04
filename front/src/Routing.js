import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Listing from './Components/listingApi';
import Home from './Components/Home';
import RestDetails from './Components/DetailsRestaurant';
import PlaceOrder from './Components/placeOrder';
import ViewOrderApi from './Components/viewOrderAPI';
import Register from './Components/resister';
import Login from './Components/login';
const Routing = () => {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/list/:mealId" component={Listing}/>
            <Route path="/details/:restId" component={RestDetails}/>
            <Route path="/placeOrder/:restName" component={PlaceOrder}/>
            <Route path="/viewOrderApi" component={ViewOrderApi}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
        </BrowserRouter>
    )
}

export default Routing