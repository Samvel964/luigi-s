import './chooseFood.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api_AddToCart, api_RemoveCart } from '../../../api/user';
import { useSelector, useDispatch } from 'react-redux';
import { setChangeState } from '../../../features/userSlice';


const ChooseFood = ({title, products, productTag, productTag2, id}) => {
    const link = 'https://rae-pizza.onrender.com/'
    const dispatch = useDispatch();
    const [printProduct, setPrintProduct] = useState([]);
    const [maxProducts, setMaxProducts] = useState(8);
    const [showBtn, setShowBtn] = useState();
    const cartId = useSelector(state => state.user.cartId);
    const token = localStorage.getItem("token");

    useEffect(() => {
        setPrintProduct(products
            .filter(product => product.productTag === productTag || product.productTag === productTag2)
        );
    },[products])

    useEffect(() => {
        if (printProduct.length !== 0 && printProduct.length > maxProducts) {
            setShowBtn(true);
        } else {
            setShowBtn(false);
        }

    },[printProduct, maxProducts])
    
    const addToCart = async (e, id) => {
        if (token) {
            e.target.className = "loader-black";
            e.target.innerText = "";
            if (!cartId.includes(id)) {
                const res = await api_AddToCart(id);
                if (res) {
                    dispatch(setChangeState());
                    e.target.className = "plr-25";
                    e.target.innerText = "Added";
                } 
            } else {
                const res = await api_RemoveCart(id);
                if (res) {
                    dispatch(setChangeState());
                    e.target.className = "plr-25";
                    e.target.innerText = "Add to cart";
                } 
            }
        } else {
            alert('need registration');
        }        
    }

    return(
        <section className="story-area left-text center-sm-text">
            <div className="container">
                <div className="heading"><h3 className='beauty-title food-title' id={id}>{title}</h3></div>
                <div className="row">
                {printProduct && printProduct.slice(0,maxProducts).map(product => {
                    return(
                        <div className="col-lg-3 col-md-4  col-sm-6" key={product.productNameArm + 'prod'}>
                        <div className="center-text mb-30">
                            <div className="ïmg-200x mlr-auto pos-relative img-div">
                                <img src={link + product.productImage} alt="product" />
                                <div className='description'><span>{product.productNameEngDescription}</span></div>
                            </div>
                            <h5 className="">{product.productNameEng}</h5>
                            <h4 className="color-primary"><b>{product.productPrice}֏</b></h4>
                            <h6 className="mt-20">
                                <Link  to="" className="btn-brdr-primary but">
                                    <b>
                                        <span 
                                            className='plr-25' 
                                            onClick={(e) => addToCart(e,product._id)}>{cartId.includes(product._id) ? "Added" : "Add to cart"}
                                        </span>
                                    </b>
                                </Link> 
                            </h6>
                        </div>
                    </div>
                    )
                })}                
                </div>
                {showBtn ? 
                <h6 
                    className="center-text mt-40 mt-sm-20 mb-30"
                    onClick={() => setMaxProducts(maxProducts + 8)} ><Link to="" className="btn-primaryc plr-25"><b>SHOW MORE</b></Link>
                </h6> : 
                null}
                
            </div>
        </section>
    )
}

export default ChooseFood
