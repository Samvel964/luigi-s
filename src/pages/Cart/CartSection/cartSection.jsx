import './cartSection.scss';
import { useEffect, useState } from 'react';
import { setCartCountUpdate, setChangeState } from '../../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import emptyCart from '../../../images/emptyCart.png'
import registrationRequired from '../../../images/registrationRequired.webp'
import { api_RemoveCart } from '../../../api/user';

const CartSection = () => {
    const cartProducts = useSelector(state => state.user.cart);
    const dispatch = useDispatch();
    const [totalProducts, setTotalProducts] = useState(0);
    const [taxes, setTaxes] = useState(0);
    const [total, setTotal] = useState(0);
    const link = 'https://rae-pizza.onrender.com/';
    const token = localStorage.getItem('token');

    useEffect(() => {
        let num = 0
        cartProducts.forEach(item => {
            if (item !== null) {
                num += item.productPrice * item.quantity
            }
        })
        setTotalProducts(num);
    },[cartProducts])

    useEffect(() => {
        setTaxes(totalProducts * 5 / 100);
        setTotal(totalProducts + taxes + 500);
    },[totalProducts,taxes])

    

    const onChangeCartQuantity = (e, id) => {
        dispatch(setCartCountUpdate({id, operator: e.target.innerText}));
    }

    const removeCart = async (e, id) => {
        e.target.className = 'loader-black'
        e.target.innerText = ""
        const res = await api_RemoveCart(id);
        if (res) {
            dispatch(setChangeState());
        }
    }
    
    return(
        <div className='container'>
            {token ? 
            <>            
            {cartProducts.length > 0 ? 
            <>
            <h3 className='text-center mt-5 mb-5 tit'><b>Products in your cart</b></h3>
            <div className='table'>
            <Table  bordered hover>
                <thead>
                    <tr>
                        <th className='text-center'>Image</th>
                        <th className='text-center'>Product</th>
                        <th className='text-center'>Price</th>
                        <th className='text-center'>Quantity</th>
                        <th className='text-center'>Total</th>
                        <th className='text-center'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {!!cartProducts && cartProducts.map(product => {
                if (product !== null) {
                    return(
                        <tr key={product?._id + 'ok' + 0}>
                            <td className=' image '>
                                <img className="br-3" src={link + product.productImage} alt="Menu Image" />
                            </td>
                            <td className=' product'>
                                <b className='name'>{product.productNameEng}</b><br/>
                                <span className='description'>{product.productNameEngDescription}</span>
                            </td>
                            <td className='center-text price'>
                                <div className="div"><span>{product.productPrice}֏</span></div>
                            </td>
                            <td className='quantity'>
                                <div className='div'>
                                    <div className='float-right quantity-body'>
                                        <div 
                                            className='minus center-text' 
                                            onClick={(e) => onChangeCartQuantity(e, product._id)} >-</div>
                                        <div className='quantity center-text'>{product.quantity}</div>
                                        <div 
                                            className='plus center-text' 
                                            onClick={(e) => onChangeCartQuantity(e, product._id)}>+</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className='div'><span>{product.productPrice * product.quantity}</span></div>
                            </td>
                            <td>
                                <div className='div'><span className='delete' onClick={(e) => removeCart(e, product._id)}>Del</span></div>
                            </td>
                        </tr>
                        )                
                    }                
                })} 
                </tbody>
            </Table>
            </div>
            
            <div className='sum'>
                <table>
                    <tbody>
                        <tr>
                            <td><span className='services '>Products</span></td>
                            <td className='price-section text-end'><span className='prices'>{totalProducts.toFixed(0)} ֏</span></td>
                        </tr>
                        <tr>
                            <td><span className='services'>Taxes</span></td>
                            <td className='price-section text-end'><span className='prices'>{taxes.toFixed(0)} ֏</span></td>
                        </tr>
                        <tr>
                            <td> <span className='services'>Delivery</span></td>
                            <td className='price-section text-end'><span className='prices'>500 ֏</span></td>
                        </tr>
                        <tr>
                            <td> <span className='services-total'>TOTAL</span></td>
                            <td className='text-end'><span className='total-price'>{total.toFixed(0)} ֏</span></td>
                        </tr>
                    </tbody>                                            
                </table>
            </div>
            <div className='checkout-btn'><button className=''>Checkout</button></div>
            </>            
            : 
                <div className='div img'>
                    <img src={emptyCart} className='empty-cart' alt='Empty cart' />
                </div>}
            </>
            : 
                <div className='registration-div'>
                    <img src={registrationRequired} className='registrImage' alt='Registration Required' />
                </div>}
        </div>
    )
}

export default CartSection
