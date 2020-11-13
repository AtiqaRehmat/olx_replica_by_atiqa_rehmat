import React from 'react';
// import AppRouter from '../src/componente/config/router'
import {Nav, Olxlogo, LocationInput} from '../pageOne/navbar';
import {Btn, OlxBanner} from '../pageOne/manubtn/manubtn';
import {CardBoxFirst, CardBoxSecond, CardBoxThird, CardBoxFourth} from '../pageOne/card'; 
// import './App.css';
import OlxPlayStore from '../pageOne/olxPlayStore';
import CatogeriesBox from '../pageOne/Catogeries';
import Footer from '../pageOne/footer';

class Home extends React.Component
{
  render(){
    return(
      <div >  
        <Nav/>
      <Btn/>
     
      <OlxBanner/>
   
      <CardBoxFirst/>
      <CardBoxSecond/>
      <CardBoxThird/>
      <CardBoxFourth/>
      <OlxPlayStore/>
      <CatogeriesBox/>
      <Footer/>
      </div>
     
   
      
    )
  
  }
}




export default Home;