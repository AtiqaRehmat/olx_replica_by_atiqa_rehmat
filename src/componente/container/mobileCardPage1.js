import React from 'react';
// import AppRouter from '../src/componente/config/router'
import  {Nav, Olxlogo, LocationInput} from '../pageOne/navbar';
import {Btn, OlxBanner} from '../pageOne/manubtn/manubtn';
// import {CardBoxFirst, CardBoxSecond, CardBoxThird, CardBoxFourth} from '../pageOne/card'; 
// import './App.css';
import OlxPlayStore from '../pageOne/olxPlayStore';
import CatogeriesBox from '../pageOne/Catogeries';
import Footer from '../pageOne/footer';
import MobileSlider from '../mobilePage/slider'
import MobileCardBaner from '../pageOne/mobileCardBaner'
import MobileCardSlider from '../pageOne/mobileCardSlider'
class MobileCardPage1 extends React.Component
{
  render(){
    return(
      <div >  
        <Nav/>
      <Btn/>
     <MobileCardBaner/>
     <MobileCardSlider/>
      {/* <MobileSlider/> */}
      <OlxPlayStore/>
      <CatogeriesBox/>
      <Footer/>
      
      </div>
     
   
      
    )
  
  }
}




export default MobileCardPage1 ;