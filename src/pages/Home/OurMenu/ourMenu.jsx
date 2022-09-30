import './ourMenu.scss';
import heading_logo from '../../../images/heading_logo.png';
import Tags from './Tags/tags';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { api_AddToCart, api_RemoveCart } from '../../../api/user';
import { setChangeState } from '../../../features/userSlice';


const OurMenu = ({products}) => {
    const dispatch = useDispatch();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const link = 'https://rae-pizza-server.herokuapp.com/';
    const cartId = useSelector(state => state.user.cartId);
    const token = localStorage.getItem("token");

    useEffect(() => {
        setFilteredProducts(products?.filter(product => product.productTag === "Pizza 24"));
    },[products])

    const selectedName = (e) => {
        setFilteredProducts(products?.filter(product => product.productTag === e.target.innerText));
    }

    const addToCart = async (e, id) => {
        if (token) {
            e.target.className = "loader-small";
            e.target.innerText = "";
            if (!cartId.includes(id)) {
                const res = await api_AddToCart(id);
                if (res) {
                    dispatch(setChangeState());
                    e.target.className = "";
                    e.target.innerText = "Added";
                } 
            } else {
                const res = await api_RemoveCart(id);
                if (res) {
                    dispatch(setChangeState());
                    e.target.className = "";
                    e.target.innerText = "Add";
                } 
            }
        } else {
            alert('need registration');
        }        
    }

    return(
        <section>
            <div className="container">
                <div className="heading">
                    <img className="heading-img" src={heading_logo} alt="" />
                    <h2 className='beauty-title our-menu'>Today's menu</h2>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <Tags tagName={selectedName}/>                        
                    </div>
                </div>

                <div className="row">
                    {!!filteredProducts && filteredProducts.slice(0,8).map(product => {
                        return(
                            <div className="col-md-6 food-menu" key={product._id + 'ok'}>
                                <div className="sided-90x mb-30 ">
                                    <div className="s-left"><img className="br-3" src={link + product.productImage} alt="Menu Image" /></div>
                                    <div className="s-right">
                                        <h5 className="mb-10">
                                            <b className='name'>{product.productNameEng}</b>
                                            <b className="color-primary float-right">{product.productPrice}֏</b>
                                        </h5>
                                        <span className='float-right mt-2 add'>
                                            <span onClick={(e) => addToCart(e, product._id)}>{cartId.includes(product._id) ? "Added" : "Add"}</span>
                                        </span>                                        
                                        <p className="pr-70 our-description">{product.productNameEngDescription}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <h6 className="center-text mt-40 mt-sm-20 mb-30" >
                    <Link to="/menu" className="btn-primaryc plr-25"><b>SEE TODAY'S MENU</b></Link>
                </h6>
            </div>
        </section>
    )
}

export default OurMenu
