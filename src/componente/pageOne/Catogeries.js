
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';

import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import OlxPlayStorePic from '../pageOne/images/playicon.png';
import GooglePlay from '../pageOne/images/googleplay.png' 
class CatogeriesBox extends React.Component{
    render(){
        return(
            <div className="catogeriesBox col-12"> 
<div className="col-2 catogeriesInerBox">
    <h5 className="catogeriesHeading">POPULAR CATOGERIES</h5>
    <h6 className="catogeriesHeadingOption">Car</h6>
    <h6 className="catogeriesHeadingOption">Flat for rent</h6>
    <h6 className="catogeriesHeadingOption">Jobs</h6>
    <h6 className="catogeriesHeadingOption">Mobile phones</h6>
</div>
<div className="col-2 catogeriesInerBox">
<h5  className="catogeriesHeading">TRENDING SEARCHES </h5>
    <h6 className="catogeriesHeadingOption">Bikes</h6>
    <h6 className="catogeriesHeadingOption">Watches</h6>
    <h6 className="catogeriesHeadingOption">Book</h6>
    <h6 className="catogeriesHeadingOption">Dog</h6>
</div>
<div className="col-2 catogeriesInerBox">
<h5  className="catogeriesHeading">ABOUT US </h5>
    <h6 className="catogeriesHeadingOption">About OLX group</h6>
    <h6 className="catogeriesHeadingOption">OLX blog</h6>
    <h6 className="catogeriesHeadingOption">Contact us</h6>
    <h6 className="catogeriesHeadingOption">OLX for businesses</h6>
</div>
<div className="col-2 catogeriesInerBox">
<h5  className="catogeriesHeading">OLX </h5>
    <h6 className="catogeriesHeadingOption">Help</h6>
    <h6 className="catogeriesHeadingOption">Sitemap</h6>
    <h6 className="catogeriesHeadingOption">Leagal & privacy information</h6>
   
</div>
<div className="col-4 catogeriesInerBox">
<h5  className="catogeriesHeading">FOLLOW US </h5>
<div >
<FacebookIcon className="Icon"/>
    <TwitterIcon className="Icon"/>
    < YouTubeIcon className="Icon"/>
    < InstagramIcon className="Icon"/>
</div>


<PlayStoreIcon/>


   
</div>
            </div>
        )
    }

}


class PlayStoreIcon extends React.Component{
    render(){
        return(
            <div >
<img src={OlxPlayStorePic} alt="" srcset="" className="playStoreIcon"/ >
<img src={GooglePlay} alt="" srcset="" className="playStoreIcon"/ >
    </div>
        )
    }
}


export default CatogeriesBox;
    

