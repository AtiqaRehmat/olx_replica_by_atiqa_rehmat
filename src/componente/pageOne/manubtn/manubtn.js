import React from 'react';
import Banner from '../images/baner.png'
import {Link} from 'react-router-dom';
class Btn extends React.Component{
    render(){
        return(
          
              <div className=" col-12">
                  {/* <h5 className="mainmanubtn">ALL CATAGORIES</h5> */}
                  <CatagoriesBtn/>
                  <Link to="/mobile" className="manubtn">Mobile Phones</Link>
                  <Link className="manubtn">Car</Link>
                  <Link className="manubtn">Motorcycles</Link>
                  <Link className="manubtn">Houses</Link>
                  <Link className="manubtn">TV-Video-Audio</Link>
                  <Link className="manubtn">Tablets</Link>
                  <Link className="manubtn">Land & Plots</Link> 

              </div>
              
        )
    }
}

class OlxBanner extends React.Component
{
render(){
  return(
    <div >
    <img className="col-12 banerheight" src={Banner} alt="" srcset=""/ >
      </div>
  )
}
}

class CatagoriesBtn extends React.Component{
    render(){
        return(
            <div>
            <p>
            <a className="mainmanubtn" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            ALL CATAGORIES
            </a>
           
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body ">
<div className="ManuMainBox col-12">
              <div className="ManuBox col-3">
               <Link className="ManuMainBoxLink">Vehicles</Link> 
               <br/>
               <Link className="ManuOptionLink">Tractors & Trailers</Link>
               <br/>
               <Link className="ManuOptionLink">Boats</Link>
               <br/>
               <Link className="ManuOptionLink">Other Vehicles</Link>
               <br/>
               <Link className="ManuOptionLink">Rickshaw & Chingchi</Link>
               <br/>
               <Link className="ManuOptionLink">Buses, Vans & Trucks</Link>
               <br/>
               <Link className="ManuOptionLink">Spare Parts</Link>
               <br/>
               <Link className="ManuOptionLink">Cars Accessories</Link>
               <br/>
               <Link className="ManuOptionLink">Car On Installment</Link>
               <br/>
               <Link className="ManuOptionLink">Cars</Link>
               </div>
              <div className="ManuBox col-3">
              <Link className="ManuMainBoxLink">Animals</Link> 
               <br/>
               <Link className="ManuOptionLink">Other Animals</Link>
               <br/>
               <Link className="ManuOptionLink">Pet Food & Accessories</Link>
               <br/>
               <Link className="ManuOptionLink">Horses</Link>
               <br/>
               <Link className="ManuOptionLink">Livestock</Link>
               <br/>
               <Link className="ManuOptionLink">Dogs</Link>
               <br/>
               <Link className="ManuOptionLink">Cats</Link>
               <br/>
               <Link className="ManuOptionLink">Hans & Aseel</Link>
               <br/>
               <Link className="ManuOptionLink">Birds</Link>
               <br/>
               <Link className="ManuOptionLink">Fish & Aquariums</Link>
              </div>
              <div className="ManuBox col-3">
              <Link className="ManuMainBoxLink">Feshion & Beauty</Link> 
               <br/>
               <Link className="ManuOptionLink">Other Fashion</Link>
               <br/>
               <Link className="ManuOptionLink">Couture</Link>
               <br/>
               <Link className="ManuOptionLink">Lawn & Pret</Link>
               <br/>
               <Link className="ManuOptionLink">Wedding</Link>
               <br/>
               <Link className="ManuOptionLink">Watches</Link>
               <br/>
               <Link className="ManuOptionLink">Skin & Hair</Link>
               <br/>
               <Link className="ManuOptionLink">Make Up</Link>
               <br/>
               <Link className="ManuOptionLink">Jewellery</Link>
               <br/>
               <Link className="ManuOptionLink">Footwear</Link>
              </div>
              <div className="ManuBox col-3">
              <Link className="ManuMainBoxLink">Services</Link> 
               <br/>
               <Link className="ManuOptionLink">Fram & Fresh Food</Link>
               <br/>
               <Link className="ManuOptionLink">Catering & Restaurant</Link>
               <br/>
               <Link className="ManuOptionLink">Hame & office Repair</Link>
               <br/>
               <Link className="ManuOptionLink">Movers & Packers</Link>
               <br/>
               <Link className="ManuOptionLink">Maid & Domestic Help</Link>
               <br/>
               <Link className="ManuOptionLink">Health & Beauty</Link>
               <br/>
               <Link className="ManuOptionLink">Event Services</Link>
               <br/>
               <Link className="ManuOptionLink">Electronic & Computer Repair</Link>
               <br/>
               <Link className="ManuOptionLink">Other Services</Link>
              </div>
             </div>
            </div>
          </div>
            </div>
        
        )
    }
}

export
{
    Btn,
    OlxBanner

} 
  
