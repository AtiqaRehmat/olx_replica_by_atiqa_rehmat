import React from 'react';
import MobileSliderImage from '../pageOne/images/mobileSlider.png'
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MobileOne from '../pageOne/images/mobile.cms';
import MobileSecond from '../pageOne/images/mobile2.jpg';
import MobileThird from '../pageOne/images/mobile4.jpg';
import MobileFourth from '../pageOne/images/mobile5.jpg';
class MobileSlider extends React.Component{
    render(){
        return(
            <div>
            <div className="mobileSlider container-fluid col-12 ">
               
                <div className="BtnBox col-12"> 
                <div className="MobilePageManuFirstBtn">Popular-Serches:</div>
                 <Link to="" className="MobilePageManuBtn">iphone -</Link>
                  <Link className="MobilePageManuBtn">samsung -</Link>
                  <Link className="MobilePageManuBtn">oppo -</Link>
                  <Link className="MobilePageManuBtn">infix -</Link>
                  <Link className="MobilePageManuBtn">vivo s1 -</Link>
                  <Link className="MobilePageManuBtn">huawei -</Link>
                  <Link className="MobilePageManuBtn">nokia </Link> 
                  </div>
                <img className="col-12 mobileSliderImage" src={MobileSliderImage} alt="" srcset=""/ >
                   
                </div>
                <div className="MobileCardHeading"> 
                <Link to="/" className="MobilePageManuBtn">Home</Link>
                <Link to="" className="MobilePageManuBtn">/Mobile</Link>
                  </div>
                  <div className="MobileCardHeading2"> 
                  Mobile Phones
                 
</div>

<h5 className="Mobilefilter">Filter</h5>


<Container fluid>
  <Row >
    <Col xs={3} className="Box">
    <MobileLeftPortion1/>
    </Col>
    <Col xs={9} className="Box ">
     <MobilePageCards/>
    </Col>
  </Row>
  <Row >
  
    <Col   xs={{ span: 9, offset: 3 }} className="Box">
    
    <MobilePageCards2/>
    </Col>
    
  </Row>
  <Row >
  
  <Col   xs={{ span: 9, offset: 3 }} className="Box">
  
  <MobilePageCards2/>
  </Col>
  
</Row>
</Container>






                  </div>
        )
    }
}

class MobileLeftPortion1 extends React.Component{
    render(){
        return(
           <div className="container-fluid "> 
           <div className="Line">
           <p>
 <a class="Filter" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">CATEGORIES</a>
 
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
       <Link className="MobileColspaceLink">All Categories</Link>
       <Link className="MobileColspaceLink">Mobiles</Link>
       <Link className="MobileColspaceLink">Tablets</Link>
       <Link className="MobileColspaceLink">Accessories</Link>
      </div>
    </div>
  </div>

</div>
</div>


<div className="Line">
<p>
<a class="Filter" data-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">LOCATIONS</a>

</p>
<div class="row">
 <div class="col">
   <div class="collapse multi-collapse" id="multiCollapseExample2">
     <div class="card card-body">
      <Link  className="MobileColspaceLink">Punjab</Link>
      <Link  className="MobileColspaceLink">Sindh</Link>
      <Link  className="MobileColspaceLink">Khyber Pakhtunkhwa (13096)</Link>
      <Link  className="MobileColspaceLink">Islamabad Capital Terrttory (947)</Link>
      <Link  className="MobileColspaceLink">Balochistan (1573)</Link>
     </div>
   </div>
 </div>

</div>

</div>







<div className="Line">
<p>
<a class="Filter" data-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">MAKE</a>

</p>
<div class="row">
 <div class="col">
   <div class="collapse multi-collapse" id="multiCollapseExample3">
     <div class="card card-body">
      <Link  className="MobileColspaceLink">Samsung (43118)</Link>
      <Link  className="MobileColspaceLink">Apple (39176)</Link>
      <Link  className="MobileColspaceLink">Huwei (18875)</Link>
      <Link  className="MobileColspaceLink">OPPO (17490)</Link>
      <Link  className="MobileColspaceLink">Vivo (10251)</Link>
     </div>
   </div>
 </div>

</div>

</div>





<div className="Line">
<p>
<a class="Filter" data-toggle="collapse" href="#multiCollapseExample4" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">PRICE</a>

</p>
<div class="row">
 <div class="col">
   <div class="collapse multi-collapse" id="multiCollapseExample4">
     <div class="card card-body">
      
      < BasicTextFields/>
     </div>
   </div>
 </div>

</div>

</div>







<div className="Line">
<p>
<a class="Filter" data-toggle="collapse" href="#multiCollapseExample5" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">CONDITION</a>

</p>
<div class="row">
 <div class="col">
   <div class="collapse multi-collapse" id="multiCollapseExample5">
     <div class="card card-body">
     <Checkboxes/><Link  className="MobileColspaceLink OneLine">  Used (43118)</Link>
     <Checkboxes/><Link  className="MobileColspaceLink OneLine">  New (43118)</Link>
     
     </div>
   </div>
 </div>

</div>

</div>




</div>

         
         
        
        )
    }
}


{/* <div className="Line">
           <p>
 <a class="Filter" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">CATEGORIES</a>
 
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
       <Link className="MobileColspaceLink">All Categories</Link>
       <Link className="MobileColspaceLink">Mobiles</Link>
       <Link className="MobileColspaceLink">Tablets</Link>
       <Link className="MobileColspaceLink">Accessories</Link>
      </div>
    </div>
  </div>

</div>
</div>


<div className="Line">
<p>
<a class="Filter" data-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">LOCATIONS</a>

</p>
<div class="row">
 <div class="col">
   <div class="collapse multi-collapse" id="multiCollapseExample2">
     <div class="card card-body">
      <Link  className="MobileColspaceLink">Punjab</Link>
      <Link  className="MobileColspaceLink">Sindh</Link>
      <Link  className="MobileColspaceLink">Khyber Pakhtunkhwa (13096)</Link>
      <Link  className="MobileColspaceLink">Islamabad Capital Terrttory (947)</Link>
      <Link  className="MobileColspaceLink">Balochistan (1573)</Link>
     </div>
   </div>
 </div>

</div>

</div>







<div className="Line">
<p>
<a class="Filter" data-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">MAKE</a>

</p>
<div class="row">
 <div class="col">
   <div class="collapse multi-collapse" id="multiCollapseExample3">
     <div class="card card-body">
      <Link  className="MobileColspaceLink">Samsung (43118)</Link>
      <Link  className="MobileColspaceLink">Apple (39176)</Link>
      <Link  className="MobileColspaceLink">Huwei (18875)</Link>
      <Link  className="MobileColspaceLink">OPPO (17490)</Link>
      <Link  className="MobileColspaceLink">Vivo (10251)</Link>
     </div>
   </div>
 </div>

</div>

</div>





<div className="Line">
<p>
<a class="Filter" data-toggle="collapse" href="#multiCollapseExample4" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">PRICE</a>

</p>
<div class="row">
 <div class="col">
   <div class="collapse multi-collapse" id="multiCollapseExample4">
     <div class="card card-body">
      
      < BasicTextFields/>
     </div>
   </div>
 </div>

</div>

</div>







<div className="Line">
<p>
<a class="Filter" data-toggle="collapse" href="#multiCollapseExample5" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">CONDITION</a>

</p>
<div class="row">
 <div class="col">
   <div class="collapse multi-collapse" id="multiCollapseExample5">
     <div class="card card-body">
     <Checkboxes/><Link  className="MobileColspaceLink OneLine">  Used (43118)</Link>
     <Checkboxes/><Link  className="MobileColspaceLink OneLine">  New (43118)</Link>
     
     </div>
   </div>
 </div>

</div>

</div>




</div>

           </div> */}



{/* ///---------------------------InputField------------------------ */}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

 function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Min" />
      <TextField id="standard-basic" label="Max" />
    </form>
  );
}





{/* /////-------------------------CheckBox-------------------------------------- */}
 function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      
      <Checkbox
        defaultChecked
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
     
    </div>
  );
}


class MobilePageCards extends React.Component{
  render(){
    return(
      <div className="Line">
      <div className="card-deck">
              <div className="card">
                <img src={MobileOne} class="card-img-top cardpic" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">?</p>
                  <p className="card-text"><small class="text-muted">?</small></p>
                </div>
              </div>
              <div className="card">
                <img src={MobileSecond}  class="card-img-top cardpic" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">?</p>
                  <p className="card-text"><small class="text-muted">?</small></p>
                </div>
              </div>
              <div className="card">
                <img src={MobileThird}  class="card-img-top cardpic" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">?</p>
                  <p className="card-text"><small class="text-muted">?</small></p>
                </div>
              </div>
              <div className="card">
                <img src={MobileFourth}  class="card-img-top cardpic" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">?</p>
                  <p className="card-text"><small class="text-muted">?</small></p>
                </div>
              </div>
            </div>
            
      </div>
    )
  }
}




class MobilePageCards2 extends React.Component{
  render(){
    return(
      <div className="">
      <div className="card-deck">
              <div className="card">
                <img src={MobileOne} class="card-img-top cardpic" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">?</p>
                  <p className="card-text"><small class="text-muted">?</small></p>
                </div>
              </div>
              <div className="card">
                <img src={MobileSecond}  class="card-img-top cardpic" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">?</p>
                  <p className="card-text"><small class="text-muted">?</small></p>
                </div>
              </div>
              <div className="card">
                <img src={MobileThird}  class="card-img-top cardpic" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">?</p>
                  <p className="card-text"><small class="text-muted">?</small></p>
                </div>
              </div>
              <div className="card">
                <img src={MobileFourth}  class="card-img-top cardpic" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">?</p>
                  <p className="card-text"><small class="text-muted">?</small></p>
                </div>
              </div>
            </div>
            
      </div>
    )
  }
}


export default MobileSlider;