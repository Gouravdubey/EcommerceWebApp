import React, { Component } from 'react'
import './Services.css'
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import SettingsIcon from '@mui/icons-material/Settings';
export class Services extends Component {
    render() {
        return (

            <div className='mainContainer'>
                <div className='innerContainer'>
                    <div>

                        <div className='headingContainer'>
                            <h1>Our Services</h1>
                        </div>
                        <div className='headingContainer'>
                            <p> adipisicing elit. Ipsum, harum mollitia inventore dolorem vero eveniet</p>
                        </div>
                    </div>
                    <div className='btnContainer'>
                        <input type="button" value='CONTACT US' className='btnStyle' />
                    </div>
                    <div className='boxMainContainer'>
                        <div className='boxContent'>
                            <PhonelinkRingIcon sx={{backgroundColor:"#B2D3C1",width:"60px",height:"60px",borderRadius:"40px",color:"white",padding:"10px"}}/>
                            <h3>CONSULTATION</h3>
                            <p style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus distinctio ipsum amet deserunt dolores.</p>
                        </div>
                        <div className='boxContent'>
                            <TipsAndUpdatesIcon sx={{backgroundColor:"#B2D3C1",width:"60px",height:"60px",borderRadius:"40px",color:"white",padding:"10px"}}/>
                            <h3>BEST IDEA</h3>
                            <p style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus distinctio ipsum amet deserunt dolores.</p>
                        </div>
                        <div className='boxContent'>
                            <SettingsIcon sx={{backgroundColor:"#B2D3C1",width:"60px",height:"60px",borderRadius:"40px",color:"white",padding:"10px"}}/>
                            <h3>SIMPLE SETTING</h3>
                            <p style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus distinctio ipsum amet deserunt dolores.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services