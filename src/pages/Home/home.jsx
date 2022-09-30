import './home.scss';
import BannerTop from './BannerTop/bannerTop';
import StoryArea from './StoryArea/storyArea';
import BestSellers from './BestSellers/bestSellers';
import OurMenu from './OurMenu/ourMenu';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../api/products';

const Home = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getAllProducts().then(res => {
            setProducts(res.data);
        })
    },[])    

    const bestSellers = products
    .filter(item => item.productTag === "Pizza 24" || item.productTag === "Pizza 31");
    
    return(
        <>        
        <BannerTop />
        <StoryArea />
        <BestSellers products={bestSellers.slice(0,8)}/>
        <OurMenu products={products} />
        </>
    )
}

export default Home
