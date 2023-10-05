import React, { Component } from 'react'
import './AddToCart.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import CancelIcon from '@mui/icons-material/Cancel';
export class AddToCart extends Component {
    constructor() {
        super()
        this.state = {
            count: 1,
            Cart: [],
            subtotle: ""
        }
    }

    componentDidMount() {
        this.getItem();
    }

    getItem() {
        let a = localStorage.getItem("item")
        let cartData = JSON.parse(a)
        this.setState({ Cart: cartData })
    }


    deleteProduct = (id) => {
        let a = localStorage.getItem("item")
        let prevItem = JSON.parse(a)
        let newArray = prevItem.filter((item, index) => item.id !== id)
        localStorage.setItem("item", JSON.stringify(newArray))
        // console.log("new",newArray)
        this.getItem();
    }

    render() {
        let totle = 0
        return (
            <div className='outerContainer'>
                <div className='productContainer1'>
                    <div className='itemDescription1'>
                        <div className='headerMainContainer'>
                            <div><h4>Product</h4></div>
                            <div className='headerInnerContainer'>
                                <div><h4>Price</h4></div>
                                <div><h4>Quantity</h4></div>
                                <div><h4>Subtotal</h4></div>
                            </div>
                        </div>
                        {/* <div>
                            <hr style={{ border: '0.2px solid #E8E9E8', marginTop: '20px', marginBottom: "30px" }} />
                        </div> */}
                        {
                            this.state.Cart.map((item, index) =>
                                <div className='productContentContainer'>
                                    <div style={{ display: "none" }}>{totle = totle + (item.Price * item.quantity)}</div>
                                    <div className='productIdentity'>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <img src={item.image} width={'90px'} height={'90px'} />
                                            <CancelIcon onClick={() => this.deleteProduct(item.id)} sx={{ position: "relative", bottom: 40, right: 20, }} />
                                        </div>
                                        <h4 className='productName'>{item.name}</h4>
                                    </div>
                                    <div className='itemDetails'>
                                        <div>{item.Price} Rs</div>
                                        <div>
                                            <spana>{item.quantity}</spana>
                                        </div>
                                        <div><h4>{item.Price * item.quantity} Rs</h4></div>
                                    </div>
                                </div>)}
                        <div className='discountCodeContainer'>
                            <div className='inputFieldContainer'>
                                <input type='text' placeholder='Discount code' className='inputField' />
                                <button className='btnApply'  >Apply</button>

                            </div>
                        </div>
                    </div>
                    <div className='cartTotalContainer'>
                        <div className='cartTotalInnerContainer'>
                            <div> <h3>CART TOTAL</h3></div>
                            <div className='subTotalContainer'>
                                <h4 className='subTotalText'>Subtotal</h4>
                                <h4 className='subTotalText'>{totle} Rs</h4>
                            </div>
                            <div>
                                <hr style={{ border: '0.2px solid #E8E9E8', marginTop: '10px', marginBottom: "30px" }} />
                            </div>
                            <div className='itemDetailsContainer'>
                                <h4>Shipping</h4>
                                <div className='deliveryDetails'>
                                    <div className='roundGreyBox'></div>
                                    <h6 className='productDetailText'>Free Shipping</h6>
                                </div>
                                <div className='deliveryDetails'>
                                    <div className='roundGreyBox'></div>
                                    <h6 className='productDetailText'>Local Delivery</h6>
                                </div>
                                <div className='deliveryDetails flatRate '>
                                    <div style={{ display: "flex" }}>
                                        <div className='roundGreyBox'></div>
                                        <h6 className='productDetailText'>Flat rate</h6>
                                    </div>
                                    <div><h6 className='productDetailText'>5 Rs</h6></div>
                                </div>
                            </div>
                            <div className='addressContainer'>
                                <h4>Shipping</h4>
                                <div className='selectContainer'>
                                    <select name="country" id="cars">
                                        <option value="" disabled selected>Select Country</option>
                                        <option value="India">India</option>
                                        <option value="China">China</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Argentina">Argentina</option>
                                    </select>
                                </div>
                                <div>
                                    <input type='number' className='inputContainer' placeholder='Postcode' />
                                </div>
                                <div>
                                    <button className='btnContainer'>Postcode</button>
                                </div>
                            </div>
                            <div className='totalAmount'>
                                <div><h4>Total</h4></div>
                                <div><h4>{totle} Rs</h4></div>
                            </div>
                            <div>
                                <button className='btncheckout'   >Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddToCart