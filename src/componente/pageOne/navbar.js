import React from 'react';
import Olx from '../pageOne/images/olxlogo.png';
import Sell from '../pageOne/images//sell.png';
import SearchIcon from '@material-ui/icons/Search';


//            Navigation Bar                  
 class Nav extends React.Component
{
  render(){
    return(
   <div className="col-12">
 <nav className="navbar navbar-light bg-light ">
      <form className="form-inline">
      <Olxlogo/>
      
        <LocationInput/>
        <SearchInput/>
 <LoginLink/>
< SellImage/>
      </form>
    </nav>
   </div>
     
 
       )
      }
    }

    //     Olx Logo Inside Navigation Bar             
    class Olxlogo extends React.Component
{
render(){
  return(
    <div >
    <img src={Olx} alt="" srcset=""/ >
      </div>
  )
}
}



//           Location Input Field Inside Navigation Bar
class LocationInput extends React.Component
{
  render(){
    return(
      <div className="logo ">
   <div className="input-group mb-3">
          <div className="input-group-prepend loccolor">
            <button className="btn btn-outline-secondary " type="button"><SearchIcon/></button>
          </div>
          <select className="custom-select" id="inputGroupSelect03" aria-label="Example select with button addon">
            <option selected>Pakistan</option>
            <option value={1}>Sindh</option>
            <option value={2}>Punjab</option>
            <option value={3}>Islamabad Capital Territory</option>
            <option value={3}>Khyber Pakhtunkhwa</option>
          </select>
        </div>
        
      </div>
    )
  }
}

class SearchInput extends React.Component{
  render(){
    return(
      <div className="logo size ">
     
      <div className="input-group mb-3 ">
        <input type="text" className="form-control " placeholder="Find Cars, Mobile Phones and more......" aria-label="Find Cars, Mobile Phones and more......" aria-describedby="button-addon2" />
        <div className="input-group-append sechicon">
          <button className="btn btn-outline-secondary" type="button" id="button-addon2"><SearchIcon/></button>
        </div>
      </div>
      
    </div>
    )
  }
}



class LoginLink extends React.Component{
  render(){
    return(
      <div className="loginbtn"><link rel="stylesheet" href=""/><h5>Login</h5></div>
      
    )
  }
}

class SellImage extends React.Component{
  render(){
    return(
      <div className="logo">  <img src={Sell} alt=""/></div>
    
    )
  }
}


    export
    {
      Nav,
      Olxlogo,
      LocationInput
    }

