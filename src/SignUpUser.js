import React, { Component } from 'react'
import singupimg from "./assets/SignUpAsset.png";
import "./SignUp.css";

export class SignUpScreen extends Component {
    render() {
        return (
            <div className='container'>
                <div className='main-container'>
                    <div className='imgMainContainer'>
                        {/* <img src={singupimg} alt="horse" className='login_image' /> */}
                    </div>
                    <div className='formMainContainer'>
                        <div className='formInnerContainer'>
                            <h1>Registration</h1>
                            <div className='progressLine'></div>
                            <form action="">
                                <div className='formFirstRow'>
                                    <div className='fullNameContainer'>
                                        <label>Full Name</label>
                                        <input className='inputBoxStyle' placeholder='Enter Your Name' type='text' />
                                    </div>
                                    <div className='fullNameContainer'>
                                        <label >Position you are applying for</label>
                                        <select className='inputSelect' >
                                            <option>HTML</option>
                                            <option>CSS</option>
                                            <option>JAVASCRIPT</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='formFirstRow'>
                                    <div className='fullNameContainer'>
                                        <label>Email</label>
                                        <input className='inputBoxStyle' placeholder='Enter Your Name' type='text' />
                                    </div>
                                    <div className='fullNameContainer'>
                                        <label>Phone number</label>
                                        <input className='inputBoxStyle' placeholder='Enter Your Name' type='text' />
                                    </div>
                                </div>
                                <div className='formFirstRow'>
                                    <div className='fullNameContainer'>
                                        <label>Country</label>
                                        <input className='inputBoxStyle' placeholder='Enter Your Name' type='text' />
                                    </div>
                                    <div className='fullNameContainer'>
                                        <label>City</label>
                                        <input className='inputBoxStyle' placeholder='Enter Your Name' type='text' />
                                    </div>
                                </div>
                                <div className='formFirstRow'>
                                    <div className='fullNameContainer'>
                                        <label>Password</label>
                                        <input className='inputBoxStyle' placeholder='Enter Your Name' type='text' />
                                    </div>
                                    <div className='fullNameContainer'>
                                        <label>Confirm Password</label>
                                        <input className='inputBoxStyle' placeholder='Enter Your Name' type='text' />
                                    </div>
                                </div>
                                <div className='genderContainer'>
                                    <div>
                                        <label>Gender</label>
                                    </div>
                                    <div className='radioButtonContainer'>

                                        <div className='radioButton'>
                                            <input type='radio' name="gender" /><label>Male</label>
                                        </div>
                                        <div className='radioButton'>
                                            <input type='radio' name="gender" /><label>Female</label>
                                        </div>
                                        <div className='radioButton'>
                                            <input type='radio' name="gender" /><label>Other</label>
                                        </div>
                                        <div className='radioButton'>
                                            <input type='radio' name="gender" /><label>Prefer not to say</label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className='btn' >Next Step</button>
                                </div>
                                <div>
                                    <p className='signin-btn'>    Already have an account? <a href='https://instagram.com'>Sign in</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUpScreen