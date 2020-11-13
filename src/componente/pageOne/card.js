import React from 'react'
import MobileSecond from '../pageOne/images/mobile2.jpg';
import PotPic from '../pageOne/images/color pot2.jpg';
import MobileOne from '../pageOne/images/mobile.cms';
import MobileThird from '../pageOne/images/mobile4.jpg';
import MobileFourth from '../pageOne/images/mobile5.jpg';
import CarOne from '../pageOne/images/car.jpg';
import CarTwo from '../pageOne/images/car2.jpg';
import DollOne from '../pageOne/images/doll.jpg';
import DollTwo from '../pageOne/images/doll2.jpg';
import HouseOne from '../pageOne/images/house.jpg';
import HouseTwo from '../pageOne/images/house2.jpg';
import HouseThree from '../pageOne/images/house3.jpg';
import {Link} from 'react-router-dom';
class CardBoxFirst extends React.Component
{
    render() {
        return(


        <div className="box container-fluid col-10  " >
                
                <h2 className="cardheading">More on mobile phones</h2>
                <h5 className="cardheading">View more</h5>
       
               
            <div className="card-deck">
              <div className="card">
                <Link to="/mobileCardPage1">
                <img src={MobileOne} class="card-img-top cardpic" alt="..."/>
                </Link>
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


class CardBoxSecond extends React.Component
{
    render(){
        return(
            <div className="box2 container-fluid col-10  " >
                
            <h2 className="cardheading ">fresh recommendations</h2>
       
   
           
        <div className="card-deck">
          <div className="card">
            <img src={CarOne} class="card-img-top cardpic" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">?</p>
              <p className="card-text"><small class="text-muted">?</small></p>
            </div>
          </div>
          <div className="card">
            <img src={CarTwo}  class="card-img-top cardpic" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">?</p>
              <p className="card-text"><small class="text-muted">?</small></p>
            </div>
          </div>
          <div className="card">
            <img src={DollOne}  class="card-img-top cardpic" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">?</p>
              <p className="card-text"><small class="text-muted">?</small></p>
            </div>
          </div>
          <div className="card">
            <img src={PotPic}  class="card-img-top cardpic" alt="..."/>
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





class CardBoxThird extends React.Component
{
    render(){
        return(
            <div className="box3 container-fluid col-10  " >
                
           
       
   
           
        <div className="card-deck">
          <div className="card">
            <img src={HouseOne} class="card-img-top cardpic" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">?</p>
              <p className="card-text"><small class="text-muted">?</small></p>
            </div>
          </div>
          <div className="card">
            <img src={HouseTwo}  class="card-img-top cardpic" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">?</p>
              <p className="card-text"><small class="text-muted">?</small></p>
            </div>
          </div>
          <div className="card">
            <img src={HouseThree}  class="card-img-top cardpic" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">?</p>
              <p className="card-text"><small class="text-muted">?</small></p>
            </div>
          </div>
          <div className="card">
            <img src={DollTwo}  class="card-img-top cardpic" alt="..."/>
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






class CardBoxFourth extends React.Component
{
    render(){
        return(
            <div className="box4 col-sm-12  col-lg-3 " >
                
           
       
   
           
        <div className="card-deck">
          <div className="card">
            <img src={HouseOne} class="card-img-top cardpic" alt="..."/>
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









            {/* <div className="box container-fluid col-10 " >
<div className="card-deck">
  <div className="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">?</p>
      <p className="card-text"><small class="text-muted">?</small></p>
    </div>
  </div>
  <div className="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">?</p>
      <p className="card-text"><small class="text-muted">?</small></p>
    </div>
  </div>
  <div className="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">?</p>
      <p className="card-text"><small class="text-muted">?</small></p>
    </div>
  </div>
  <div className="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">?</p>
      <p className="card-text"><small class="text-muted">?</small></p>
    </div>
  </div>
</div>

                
                </div> */}
                   
    
//         <div className="row row-cols-1 row-cols-md-3">
//   <div className="col mb-4">
//     <div className="card">
//       <img src="..." class="card-img-top" alt="..."/>
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//       </div>
//     </div>
//   </div>
//   <div className="col mb-4">
//     <div className="card">
//       <img src="..." class="card-img-top" alt="..."/>
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//       </div>
//     </div>
//   </div>
//   <div className="col mb-4">
//     <div className="card">
//       <img src="..." class="card-img-top" alt="..."/>
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
//       </div>
//     </div>
//   </div>
//   <div className="col mb-4">
//     <div className="card">
//       <img src="..." class="card-img-top" alt="..."/>
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//       </div>
//     </div>
//   </div>
// </div>

{/* <div className="card border-success mb-3" >
  <div className="card-header bg-transparent border-success">Header</div>
  <div className="card-body text-success">
    <h5 className="card-title">Success card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div className="card-footer bg-transparent border-success">Footer</div>
</div> */}



    

export 
{
CardBoxFirst,
CardBoxSecond,
CardBoxThird,
CardBoxFourth
}

