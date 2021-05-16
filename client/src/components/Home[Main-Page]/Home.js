import React, { useState, useEffect } from 'react';
import { Container, Paper, Grid , AppBar} from '@material-ui/core';
import { Link } from 'react-router-dom';
import  './HomeCss.css';
import useStyles from './styles';
//**********************************All*Importing*Imports*******************************************************//
import BitesHomePicture from '../../images/SweetVibesMain.jpg';
import WhiteCocoImage from '../../images/WhiteCoco.jpg';
import CookiesBrown from '../../images/CookiesBrown.jpg';
import CornoFlexImagejpg from '../../images/SweetVibesCornFlex.jpg';
import SweetVibesLatus from '../../images/SweetVibesLatus.jpg';
import SweetVibesPretzel from '../../images/SweetVibesPretzel.jpg';
import SweetVibesWafer from '../../images/SweetVibesWafer.jpg';
import SweetVibesLove from '../../images/SweetVibesLove.jpg';
import SweetVibesNewBites from '../../images/SweetVibesNewBites.jpg';
import SweetVibesSmallPicture from '../../images/SweetVibesSmallPicture.jpg';
import SweetVibesSmallPicture2 from '../../images/SweetVibesSmallPicture2.jpg';
import SweetVibesSmallPicture3 from '../../images/SweetVibesSmallPicture3.jpg';
import Nogat from '../../images/Nogat.jpg';
import Marshmelo from '../../images/Marshmelo.jpg';
import HalfPictureOne from '../../images/New1.jpg';
import HalfPictureTow from '../../images/New2.jpg';
import ShutterSpeedIcon from '@material-ui/icons/ShutterSpeed';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import InstagramIcon from '@material-ui/icons/Instagram';
import ChatIcon from '@material-ui/icons/Chat';
import RamadanPicture from '../../images/Ramadan.jpg';
//**********************************All*Pictures*Imports*********************************************************//
const Home = () => {
  const classes = useStyles();
  //[ All UseState Consting + LocalStorage
  const [currentId, setCurrentId] = useState(0); // the id for the products to link them
  const [MainPicture, SetMainPicture] = useState(BitesHomePicture); // chaneging main picture if ramdan mode is activatied
  const [LabelLogo, SetLabelLogo] = useState('#A87DAB'); // changeing labels color if ramdan mode is activatied
  const RamadanMode = JSON.parse(localStorage.getItem('ramadanmode')); // ramdan mode activation
  //]
  

      useEffect(() => {
      if(currentId !== ''){
        localStorage.setItem('ordercurrentidfromhome' , JSON.stringify(currentId));
       } // if the user clicked on button 'SHOP NOW' on the image products , so on click it will save in localstorage the id 
       // number that it will link it in store page
      if(RamadanMode === true){
        SetMainPicture(RamadanPicture);
        SetLabelLogo('#F7CC70');
      } else if(RamadanMode === false){
        SetMainPicture(BitesHomePicture);
        SetLabelLogo('#A87DAB');
      }
      }); // Ramdan Mode activtion

      const Shopnowbutton = () => {
        localStorage.setItem('fullproductview' , true);
      } // if Button 'SHOP NOW' clicked in the image products so it will save in localstorage 'TRUE' that when will 
      // go to shop page it will know that it need to active the full view product mode

      //**********************************All*Consting***************************************************************//
  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
         <Grid container spacing={3}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
          <img className="BitesHomePicture1" src={MainPicture} alt="BitesHomePicture" />
          </Paper>
          </Grid>
          <Grid item xs={12}>
          <h1 className="Main_label">DELICIOUS BITES</h1>
         </Grid>
         {/* ------------------------------------ The Main Picture 2--------------------------------------------------- */}
         <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <figure class="snip0015" onMouseEnter={ () =>{{setCurrentId('6095d6e265ba8f000729b006')}}}>
	        <img className="WhiteCocoImage" src={Nogat} alt="WhiteCocoImage" />
	        <figcaption>
          <h2>Dulce de  <span> &nbsp;de</span> &nbsp;leche bites</h2>
          <p><Link to="/shop" style={{ color: 'white'}}><a onClick={Shopnowbutton}>SHOP NOW</a></Link></p>
	        </figcaption>			
          </figure>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <figure class="snip0015" onMouseEnter={ () =>{{setCurrentId('6095d70665ba8f000729b007')}}}>
          <img className="WhiteCocoImage" src={Marshmelo} alt="WhiteCocoImage2"/>
	        <figcaption>
		      <h2>S'mores <span> &nbsp;bites </span></h2>
          <p><Link to="/shop" style={{ color: 'white'}}><a onClick={Shopnowbutton}>SHOP NOW</a></Link></p>
	        </figcaption>			
          </figure>
          </Paper>
        </Grid>
        {/* ------------------------------------ The Main Picture 3--------------------------------------------------- */}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <figure class="snip0015">
	        <img className="WhiteCocoImage" src={HalfPictureOne} alt="WhiteCocoImage" />
	        <figcaption>
          <h2>DM  <span>&nbsp;us</span>&nbsp; for orders</h2>
          <p><Link to="/shop" style={{ color: 'white'}}><a >SHOP NOW</a></Link></p>
	        </figcaption>			
          </figure>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <figure class="snip0015">
          <img className="WhiteCocoImage" src={HalfPictureTow} alt="WhiteCocoImage2"/>
	        <figcaption>
          <h2>DM  <span>&nbsp;us</span>&nbsp; for orders</h2>
          <p><Link to="/shop" style={{ color: 'white'}}><a>SHOP NOW</a></Link></p>
	        </figcaption>			
          </figure>
          </Paper>
        </Grid>
          {/* ------------------------------------ The Main Picture --------------------------------------------------- */}
          <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <figure class="snip0015" onMouseEnter={ () =>{{setCurrentId('6095d52465ba8f000729affe')}}}>
	        <img className="WhiteCocoImage" src={WhiteCocoImage} alt="WhiteCocoImage" />
	        <figcaption>
          <h2>Cocopops Bites Whith <span>&nbsp;White</span> &nbsp;is Chocolate</h2>
          <p><Link to="/shop" style={{ color: 'white'}}><a onClick={Shopnowbutton}>SHOP NOW</a></Link></p>
	        </figcaption>			
          </figure>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <figure class="snip0015" onMouseEnter={ () =>{{setCurrentId('6095d54865ba8f000729afff')}}}>
          <img className="WhiteCocoImage" src={CornoFlexImagejpg} alt="WhiteCocoImage2"/>
	        <figcaption>
		      <h2>Cornflakes <span>&nbsp;bites </span></h2>
          <p><Link to="/shop" style={{ color: 'white'}}><a onClick={Shopnowbutton}>SHOP NOW</a></Link></p>
	        </figcaption>			
          </figure>
          </Paper>
        </Grid>
         {/* ------------------------------------ The Second Tow  Products --------------------------------------------------- */}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <figure class="snip1361" onMouseEnter={ () =>{{setCurrentId('6095d5f665ba8f000729b001')}}}>
          <img className="WhiteCocoImage" src={SweetVibesLatus} alt="SweetVibesLatus" />
          <figcaption>
          <h3>Lotus Bites</h3>
          <p>Lotus Bites With Noga And Chocolate.</p>
          </figcaption>
          <Link to="/shop" ><a onClick={Shopnowbutton}></a></Link>
          </figure>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <figure class="snip1361" onMouseEnter={ () =>{{setCurrentId('6095d5ac65ba8f000729b000')}}}>
          <img className="WhiteCocoImage" src={SweetVibesPretzel} alt="SweetVibesPretzel"/>
          <figcaption>
          <h3>Pretzel Bites</h3>
          <p>Pretzel Bites With Chocolate.</p>
          </figcaption>
          <Link to="/shop" ><a onClick={Shopnowbutton}></a></Link>
          </figure>
          </Paper>
        </Grid>
         {/* ------------------------------------ The Third Tow  Products --------------------------------------------------- */}
        <Grid item xs={12}>
         <h1 className="Main_label">And Much More ...</h1>
        </Grid>
        <Grid item xs={6} sm={4} className={classes.mobilesettings}>
          <Paper className={classes.paperlast}>
          <figure class="snip1190"  onMouseEnter={ () =>{{setCurrentId('6095d61965ba8f000729b002')}}}>
          <img className="WhiteCocoImage" src={CookiesBrown} alt="CookiesBrown"/>
          <figcaption>
          <div class="square">
          <div></div>
          </div>
          <h2>Sweet<span> Vibes</span></h2>
          <p>THE DIFFERENT FLAVORS WE OFFER</p>
          </figcaption>
          <Link to="/shop" ><a onClick={Shopnowbutton}></a></Link>
          </figure>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paperlast}>
          <figure class="snip1190" onMouseEnter={ () =>{{setCurrentId('6095d65565ba8f000729b003')}}}>
          <img className="WhiteCocoImage" src={SweetVibesWafer} alt="SweetVibesWafer"/>
          <figcaption>
          <div class="square">
          <div></div>
          </div>
          <h2>Sweet<span> Vibes</span></h2>
          <p>THE DELICIOUS BITES</p>
          </figcaption>
          <Link to="/shop" ><a onClick={Shopnowbutton}></a></Link>
          </figure>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paperlast}>
          <figure class="snip1190" onMouseEnter={ () =>{{setCurrentId('6095d6a565ba8f000729b004')}}}>
          <img className="SweetVibesLove" src={SweetVibesLove} alt="SweetVibesLove"/>
          <figcaption>
          <div class="square">
          <div></div>
          </div>
          <h2>Sweet<span> Vibes</span></h2>
          <p>THE DELICIOUS BITES</p>
          </figcaption>
          <Link to="/shop" ><a onClick={Shopnowbutton}></a></Link>
          </figure>
          </Paper>
        </Grid>
    {/* ------------------------------------ The Four Picture --------------------------------------------------- */}
        <Grid item xs={12}>
           <h1 className="Main_label">THE DELICIOUS BITES</h1>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
          <ul class="Effeft4">
          <li>
          <img  src={SweetVibesNewBites} alt="SweetVibesNewBites" height= "190" width="220" />
          <p>SweetVibes 😍</p>
          </li>
          <li>
          <img  src={SweetVibesSmallPicture} alt="SweetVibesNewBites"  height= "210" width="220" />
          <p>SweetVibes 😋</p>
          </li>
          <li>
          <img  src={SweetVibesSmallPicture2} alt="SweetVibesNewBites" height= "200" width="220" />
          <p>SweetVibes 🤤</p>
          </li>
          <li>
          <img  src={SweetVibesSmallPicture3} alt="SweetVibesNewBites" width="220" />
          <p>SweetVibes 😲</p>
          </li>
          </ul>
          <div class="light"></div>
          <br/><br/><br/><br/><br/><br/><br/><br/>
          </Paper>
        </Grid>
     {/* ------------------------------------ The Last Season --------------------------------------------------- */}
        <Grid item xs={12}>
          <br/><br/>
          <h1 className="lAST_LABEL">WHY CHOOSE US</h1>
        </Grid>
        <Grid item xs={6} sm={4}>
          <div >
          <ShutterSpeedIcon className="icon"></ShutterSpeedIcon>
          <p className="SpeedLabel"> Fast Deleviry To Everywhere</p>
          </div>
        </Grid>
        <Grid item xs={6} sm={4}>
          <div >
          <ChatIcon className="icon"></ChatIcon>
          <p className="SpeedLabel"> Outstanding customer service</p>
          </div>
        </Grid>
        <Grid item xs={6} sm={4}>
          <div >
          <AttachMoneyIcon className="icon"></AttachMoneyIcon>
          <p className="SpeedLabel"> Outstanding customer service</p>
          </div>
          <br/><br/>
        </Grid>
         {/* ------------------------------------ The Last Season Social --------------------------------------------------- */}
        <Grid item xs={12}>
          <br/><br/>
          <a href="https://www.instagram.com/sweetvibes_bites/" target="_blank" rel="instagram" className="LinkForwordInstigram"> <InstagramIcon className="InstigramIcon"></InstagramIcon></a>
          <a href="https://www.instagram.com/sweetvibes_bites/" target="_blank" rel="instagram" className="LinkForwordInstigram"><p className="SpeedLabel">Follow Us On Instigram</p></a>
        </Grid>
        <AppBar className={classes.appBar} position="static" color="inherit">
        <Grid item xs={12}>
          <p className="FooterLabel" style={{color : LabelLogo}}>©SweetVibes 2021</p>
        </Grid>
        </AppBar>
      </Grid>
      </div>
    </Container>
  )
}
export default Home;

//************************************************************************************************************//
//                                        Home Page                                                           //
//                                                                                                            //
// This is the main home page for the store                                                                   //
//                                                                                                            //
//                                                                                                            //
//                                                                                                            //
//************************************************************************************************************//