import React, { Component } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import './Contact.css'
import { Button } from '@mui/material';
export class ContactUs extends Component {

  render() {
    return (
      <div>
        <section className='contact'>
          <div className='content'>
            <h2>Contact Us</h2>
            <p style={{ marginTop: "30px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet voluptatum, quaerat nam suscipit harum et!</p>
          </div>
          <div className='contactContainer'>
            <div className='contactInfo'>
              <div className='addressBox'>
                <div className='icon'>
                  <LocationOnIcon />
                </div>
                <div className=' text'>
                  <h3>Address</h3>
                  <p> 143 fising Road<br />Rajpamgarh <br />Bitalpur Nasyum </p>
                </div>
              </div>
              <div className='addressBox'>
                <div className='icon'>
                  <PhoneIcon />
                </div>
                <div className=' text'>
                  <h3>phone</h3>
                  <p> 234-435-676-464 </p>
                </div>
              </div>
              <div className='addressBox'>
                <div className='icon'>
                  <EmailIcon />
                </div>
                <div className=' text'>
                  <h3>Email</h3>
                  <p> Neaofem@live.com </p>
                </div>
              </div>
            </div>
            <div className='contactForm'>
              <form>
                <h2>Send Message</h2>
                <div className='inpBox'>
                  <input type='text' required name='' />
                  <span>Full Name</span>
                </div>
                <div className='inpBox'>
                  <input type='text' required name='' />
                  <span>Email</span>
                </div>
                <div className='inpBox'>
                  <textarea required></textarea>
                  <span>Type Your Message...</span>
                </div>
                <div className='inpBox'>
                  <input type='submit' required name='' value='send' />
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default ContactUs