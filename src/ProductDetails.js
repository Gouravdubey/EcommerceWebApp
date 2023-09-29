import React, { Component } from 'react'
import './ProductDetails.css'
import { Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DoneIcon from '@mui/icons-material/Done'; export class ProductDetails extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            Cart: []
        }
    }
    render() {
        console.log(window.location.pathname)
        return (
            <>
                <div className='outerContainer'>
                    <div className='productContainer'>
                        <div className='imgContainer'>
                            <img src='https://images.pexels.com/photos/8217403/pexels-photo-8217403.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' style={{ width: "30vw", height: "60vh", margin: '30px' }} />
                        </div>

                        <div className='contentContainer'>
                            <div className='headingcontainer'>
                                <h3>TWO POCKET COTTON SHIRT</h3>
                            </div>
                            <div style={{ marginTop: "20px", }}>
                                <hr style={{ border: '0.2px solid #E8E9E8' }} />
                            </div>
                            <div style={{ marginTop: "40px", height: "200px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

                                <div>
                                    <h3>2150 Rs<span style={{ fontSize: "13px", textDecoration: "line-through", margin: "10px" }}>2970.00</span> <span style={{ fontSize: "12px", color: "red" }}> 30% Off </span></h3>

                                </div>
                                <div>
                                    <h6>In Stock: dispatch in 5 working day</h6>
                                </div>
                                <div>
                                    Quantity <spana style={{ backgroundColor: "#E8E9E8" }}>
                                        <button onClick={() => this.setState({ count: this.state.count > 0 ? this.state.count - 1 : 0 })} style={{ border: "none", padding: "5px", marginRight: "10px", backgroundColor: "white" }}>-</button>{this.state.count}
                                        <button onClick={() => this.setState({ count: this.state.count + 1 })} style={{ border: "none", padding: "5px", marginLeft: "10px", backgroundColor: "white" }}>+</button>
                                    </spana>
                                </div>

                                <div style={{ display: "flex", justifyContent: "space-between", width: "20vw" }}>
                                    <Button variant='contained' sx={{ color: "black", backgroundColor: "#FCCF07", padding: "10px", paddingRight: '30px', paddingLeft: "30px", fontSize: "18px" }} onClick={() => (alert("Added to the cart Successfully"), this.state.Cart.push(1), console.log(this.state.Cart))}>Add to card</Button>
                                    <Button variant='outlined' sx={{ color: "black", borderColor: "yellow", padding: "10px", paddingRight: '30px', paddingLeft: "30px", fontSize: "18px" }}>Buy Now</Button>
                                </div>
                            </div>
                            <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                                <hr style={{ border: '0.2px solid #E8E9E8' }} />
                            </div>
                            <div>
                                <h5> Eligible for Delivery ?</h5>
                                <div style={{
                                    width: '200px',
                                    marginTop: '10px',
                                }}>
                                    <div style={{
                                        display: "flex", width: "600px"
                                    }}>
                                        <input type="text" style={{ border: "none", width: '100px', outline: "none", backgroundColor: '#F8F8F8', padding: "10px" }} />
                                        <ArrowForwardIcon sx={{
                                            position: 'relative',
                                            right: '30px',
                                            bottom: '-7px',
                                            backgroundColor: '#FCCF07',
                                            padding: '2px',
                                            borderRadius: '4px'
                                        }} />
                                        <DoneIcon sx={{
                                            backgroundColor: 'lightgreen',
                                            color: "white",
                                            borderRadius: "30px",
                                            width: "20px",
                                            height: "20px",
                                            marginTop: "10px",
                                            marginRight: '10px'

                                        }} />
                                        <p style={{ fontSize: "13px", marginTop: "10px" }}>The Product is diliverable to this address</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <FireTruckIcon sx={{ color: "lightgrey", border: "1px solid lightgrey", borderRadius: "30px", padding: '5px', marginRight: "10px", width: "30px", height: "30px" }} />
                                        <p style={{ fontSize: "13px" }}>Get it by Thus, 20 Aug</p>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <RestartAltIcon sx={{ color: "lightgrey", border: "1px solid lightgrey", borderRadius: "30px", padding: '5px', marginRight: "10px", width: "30px", height: "30px", color: "#FCCF07" }} />
                                        <p style={{ fontSize: "13px" }}>Get it by Thus, 20 Aug</p>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <CurrencyRupeeIcon sx={{ color: "lightgrey", border: "1px solid lightgrey", borderRadius: "30px", padding: '5px', marginRight: "10px", width: "30px", height: "30px" }} />
                                        <p style={{ fontSize: "13px" }}>Get it by Thus, 20 Aug</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                                <hr style={{ border: '0.2px solid #E8E9E8' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProductDetails