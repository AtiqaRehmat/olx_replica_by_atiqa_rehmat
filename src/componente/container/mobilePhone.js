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
class MobilePhone extends React.Component
{
  render(){
    return(
      <div >  
        <Nav/>
      <Btn/>
     
      <MobileSlider/>
      <OlxPlayStore/>
      <CatogeriesBox/>
      <Footer/>
      
      </div>
     
   
      
    )
  
  }
}




export default MobilePhone;