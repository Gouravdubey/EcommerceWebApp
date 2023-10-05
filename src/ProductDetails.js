import React, { Component } from 'react'
import './ProductDetails.css'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DoneIcon from '@mui/icons-material/Done'; import { appRouter } from './hoc';
export class ProductDetails extends Component {
    constructor() {
        super()
        this.state = {
            count: 1,
            Cart: []
        }
    }
    itemAdded = async () => {
        let item = this.props.location.state;
        item = {
            ...item,
            quantity: this.state.count
        }
        let storedItem = localStorage.getItem("item");
        if (storedItem !== null && storedItem !== undefined) {
            let isAvailable = false
            let prevItem = await JSON.parse(localStorage.getItem("item"));
            prevItem.map((element, index) => {
                if (element.id == item.id) {
                    let tempObj = {
                        ...element,
                        quantity: this.state.count
                    }
                    prevItem[index] = tempObj;
                    isAvailable = true
                }
            });
            localStorage.setItem("item", JSON.stringify(prevItem));
            if (!isAvailable) {
                prevItem = [...prevItem, item];
                console.log("Prev Item", prevItem);
                localStorage.setItem("item", JSON.stringify(prevItem));
            }
            console.log("After Changes", prevItem);
        } else {
            let arr = [item];
            localStorage.setItem("item", JSON.stringify(arr));
        }

    }
    render() {
        return (
            <>
                <div className='outerContainer'>
                    <div className='productContainer'>
                        <div className='imgContainer'>
                            <img src={this.props.location.state.image} style={{ width: "30vw", height: "60vh", margin: '30px' }} />
                        </div>
                        <div className='contentContainer'>
                            <div className='headingcontainer'>
                                <h3>{this.props.location.state.name}</h3>
                            </div>
                            <div style={{ marginTop: "20px", }}>
                                <hr style={{ border: '0.2px solid #E8E9E8' }} />
                            </div>
                            <div style={{ marginTop: "40px", height: "200px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

                                <div>
                                    <h3>{this.props.location.state.Price} Rs<span style={{ fontSize: "13px", textDecoration: "line-through", margin: "10px" }}>2970.00</span> <span style={{ fontSize: "12px", color: "red" }}> 30% Off </span></h3>

                                </div>
                                <div>
                                    <h6>{this.props.location.state.inStock} In Stock: dispatch in 5 working day</h6>
                                </div>
                                <div>
                                    Quantity <spana style={{ backgroundColor: "#E8E9E8" }}>
                                        <button onClick={() => this.setState({ count: this.state.count > 0 ? this.state.count - 1 : 0 })} style={{ border: "none", padding: "5px", marginRight: "10px", backgroundColor: "white" }}>-</button>{this.state.count}
                                        <button onClick={() => this.setState({ count: this.state.count + 1 })} style={{ border: "none", padding: "5px", marginLeft: "10px", backgroundColor: "white" }}>+</button>
                                    </spana>
                                </div>

                                <div style={{ display: "flex", justifyContent: "space-between", width: "20vw" }}>
                                    <Button

                                        variant='contained'
                                        onClick={() => { this.itemAdded() }}
                                        component={Link} to='/cart'
                                        sx={{ color: "black", backgroundColor: "#FCCF07", padding: "10px", paddingRight: '30px', paddingLeft: "30px", fontSize: "13px", maxWidth: "160px",'@media(max-width:1140px)':{
                                            fontSize:'5px'
                                        } }} >Add to cart</Button>
                                    <Button variant='outlined' sx={{ color: "black", borderColor: "yellow", padding: "10px", fontSize: "13px", }}>Buy Now</Button>
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
                                        <p style={{ fontSize: "13px" }}>Get it by<br />{this.props.location.state.getItBy}</p>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <RestartAltIcon sx={{ color: "lightgrey", border: "1px solid lightgrey", borderRadius: "30px", padding: '5px', marginRight: "10px", width: "30px", height: "30px", color: "#FCCF07" }} />
                                        <p style={{ fontSize: "13px" }}>Easy Return<br /> {this.props.location.state.easyReturn}</p>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <CurrencyRupeeIcon sx={{ color: "lightgrey", border: "1px solid lightgrey", borderRadius: "30px", padding: '5px', marginRight: "10px", width: "30px", height: "30px" }} />
                                        <p style={{ fontSize: "13px" }}>Cash On delivery<br /> {this.props.location.state.cashOnDelivery}</p>
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

export default appRouter(ProductDetails)