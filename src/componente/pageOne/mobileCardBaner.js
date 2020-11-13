import React from 'react';
import MobileSliderImage from '../pageOne/images/mobileSlider.png'
import {Link} from 'react-router-dom';


class MobileCardBaner extends React.Component{
    render(){
        return(
            <div>
            <div className="mobileSlider container-fluid col-12 ">
               
                <div className="BtnBox col-12"> 
                <Link to="/" className="MobilePageManuBtn">Home /</Link>
                 <Link to="/mobile" className="MobilePageManuBtn">Mobiles /</Link>
                  <Link className="MobilePageManuBtn">Mobiles Phones /</Link>
                  <Link className="MobilePageManuBtn">Mobile Phones in Sindh /</Link>
                  <Link className="MobilePageManuBtn">Mobile Phones in Karachi /</Link>
                  <Link className="MobilePageManuBtn">Mobile Phones in M.A Jinnah Road /</Link>
                  <Link className="MobilePageManuBtn">Motorola in M.A Jinnah Road /</Link>
         
                  </div>
                <img className="col-12 mobileSliderImage" src={MobileSliderImage} alt="" srcset=""/ >
                   
                </div>
               






                  </div>
        )
    }
}

export default MobileCardBaner;