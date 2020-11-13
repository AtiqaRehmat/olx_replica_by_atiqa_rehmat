import React from 'react';
import MobileSliderImage from '../pageOne/images/mobileSlider.png'
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SliderImage1 from './images/mobile2.jpg'
import CardManImage from './images/cardSeller.png'
import CardMapImage from './images/cardMap.png'

class MobileCardSlider extends React.Component{
    render(){
        return(
            
            <div >
               
               <Container fluid>
  <Row>
    <Col sm={7} className="Box">
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={SliderImage1} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={SliderImage1} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={SliderImage1} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
<br/>
<div className="row MobileSliderCardSpace">
  <div className="col-sm-12">
    <div className="card MobileSliderCardHeight4">
      <div className="card-body">
        <h5 className="card-title  MobileCardHeading2">Details</h5>
        
        <div className="CardManu">Make</div>
        <div className="CardManu CardMan2">Infinix</div>
        <div className="CardManu CardMan2">Condition</div>
        <div className="CardManu CardMan2">New</div>
        
      
          <br/>
          
          <h5 className=" Line"></h5>
          <h5 className="card-title  MobileCardHeading2">Description</h5>

          <h5 className="card-title  ">LAPNTAB

INSTALLMENT PLAN
<br/>
Advance: 8000
<br/>
6 x 5833 (6months)
<br/>
12 x 3267 (12monhts)
<br/>
.
<br/>
Processor: Octa core
<br/>
Ram: 8GB
<br/>
Rom: 128GB
<br/>
Display: 6.9 Inch
<br/>
OS: Android 10
<br/>
.
<br/>
For Booking (Requirments)
<br/>
* 1 CNIC Copy.
<br/>
* 1 Job Card Copy.
<br/>
* 1 Current Utility Bill Copy.
<br/>
* Posted Dated Cheques.
<br/>
* 1 Gurantor Required.
<br/>
-
<br/>
All Infinix Model Available in Warranty
<br/>
-
<br/>
Shop no FF-44 Lavish mall 1st floor at main Tariq Road Karachi.</h5>

          
     
  </div>
 
      </div>
  
    </div>
</div>
<Row className="MobileSliderCardSpace">
  <Col >
<div className="card" >
  <img src={SliderImage1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</Col>
<Col>
<div className="card" >
  <img src={SliderImage1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</Col>
<Col>
<div className="card" >
  <img src={SliderImage1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</Col>
<Col>
<div className="card" >
  <img src={SliderImage1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</Col>
</Row>
    </Col>
    <Col sm={5} className="Box">

    <div className="row">
  <div className="col-sm-12 "  >
    <div className="card MobileSliderCardHeight">
      <div className="card-body">
        <h6 className="card-title MobileCardHeading2">Rs 34,999 </h6>
        <h5 className="card-title MobileCardHeading2">
        
          Infinix Zero 8i (On Installment)</h5>
        <p className="card-text catogeriesHeadingOption">  Tariq Road Karachi Sindh </p>
        
      </div>
    </div>
  </div>
  
</div>


<div className="row MobileSliderCardSpace">
  <div className="col-sm-12">
    <div className="card MobileSliderCardHeight2">
      <div className="card-body">
        <h5 className="card-title  MobileCardHeading2">Seller Descriptio</h5>
        <h5 className="card-title MobileCardHeading2 ">
        <img src={CardManImage}  alt="..."/>
          Lapntab (Easy Installments)</h5>
          <br/>
        <p className="card-text catogeriesHeadingOption">Member since Jun 2020</p>
        <button className="MobileCardSliderButton col-12">Chat with seller</button>
       
      </div>
      
    </div>
  </div>
  
</div>






<div className="row MobileSliderCardSpace">
  <div className="col-sm-12">
    <div className="card MobileSliderCardHeight3">
      <div className="card-body">
        <h5 className="card-title  MobileCardHeading2">POSTED in</h5>
        <h5 className="card-title MobileCardHeading2 ">
          Tariq Road, karchi, Sindh</h5>
          <br/>
          <img className="MapCardImage col-11" src={ CardMapImage}  alt="..."/>
        
       
       
      </div>
      
    </div>
  </div>
  
</div>

    </Col>
  </Row>
</Container>
                </div>
               






                
        )
    }
}
















export default MobileCardSlider;