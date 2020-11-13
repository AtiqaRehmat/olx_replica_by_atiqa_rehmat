import React from 'react';
import {BrowserRouter as Router, Route, } from "react-router-dom";
import Home from '../container/home';
import MobilePhone from '../container/mobilePhone';
// import Contact from '../container/contact';
import MobileCardPage1 from '../container/mobileCardPage1';
class AppRouter extends React.Component{
render(){
    return(
<Router>
    <Route exact path='/' component={Home} />
     <Route exact path='/mobile' component={MobilePhone} />
    <Route exact path='/mobileCardPage1' component={MobileCardPage1} /> 
    </Router>
    )
}
}

export default AppRouter;