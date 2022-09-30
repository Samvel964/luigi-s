import './bestSellers.scss';
import heading_logo from '../../../images/heading_logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { api_AddToCart, api_RemoveCart } from '../../../api/user';
import { useDispatch } from 'react-redux';
import { setChangeState } from '../../../features/userSlice';

const BestSellers = ({products}) => {
    const dispatch = useDispatch();
    const link = 'https://rae-pizza-server.herokuapp.com/';
    const cartId = useSelector(state => state.user.cartId);
    const token = localStorage.getItem("token");

    const addToCart = async (e, id) => {

        if (token) {
            e.target.className = "loader";
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
        <section className="story-area bg-seller color-white pos-relative">
            <div className="pos-bottom triangle-up"></div>
            <div className="pos-top triangle-bottom"></div>
            <div className="container">
                <div className="heading">
                    <img className="heading-img" src={heading_logo} alt="Heading logo" />
                    <h2 className='beauty-title best-sellers'>Best Sellers</h2>
                </div>
                <div className="row">
                    {products && products?.map(product => {
                        return(
                            <div className="col-lg-3 col-md-4  col-sm-6 " key={product?._id + 'item'}>
                                <div className="center-text mb-30">
                                    <div className="ïmg-200x mlr-auto pos-relative img-div">
                                        <img src={link + product?.productImage} alt="seller" />
                                        <div className='description'><span>{product.productNameEngDescription}</span></div>
                                    </div>
                                    <h5>{product?.productNameEng}</h5>
                                    <h4><b>{product?.productPrice}֏</b></h4>
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
                <h6 className="center-text mt-40 mt-sm-20 mb-30"><Link to="/menu" className="btn-primaryc plr-25">
                    <b>SEE OUR MENU</b></Link>
                </h6>
            </div>
        </section>
    )
}

export default BestSellers
