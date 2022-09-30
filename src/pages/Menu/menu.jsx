import './menu.scss'
import MenuBanner from './MenuBanner/menuBanner';
import { getAllProducts } from '../../api/products';
import { useEffect, useState } from 'react';
import ChooseFood from './ChooseFood/chooseFood';
import BlackLine from './BlackLine/blackLine';

const Menu = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getAllProducts().then(res => {
            setProducts(res.data);
        })
    },[])

    const clickHandler = (e) => {
        window.location.href = `#${e.target.innerText}`
    }

    return(
        <>
        <MenuBanner />
        <div className='menu-items'>
            <span onClick={(e) => clickHandler(e)}>Pizza</span>
            <span onClick={(e) => clickHandler(e)}>Salads</span>
            <span onClick={(e) => clickHandler(e)}>Pasta</span>
            <span onClick={(e) => clickHandler(e)}>Soups</span>
            <span onClick={(e) => clickHandler(e)}>SandWiches and Burgers</span>
            <span onClick={(e) => clickHandler(e)}>Rolls</span>
            <span onClick={(e) => clickHandler(e)}>Calzone</span>
            <span onClick={(e) => clickHandler(e)}>Appetizers</span>
            <span onClick={(e) => clickHandler(e)}>Drinks</span>
        </div>     
        <ChooseFood 
            title={'Choose from Pizza'} 
            products={products} 
            productTag={'Pizza 24'} 
            productTag2={'Pizza 31'}
            id={'Pizza'}
        />

        <BlackLine text={'Add a fresh Salad to your order'}/>
        <ChooseFood 
            title={'Choose from salads'} 
            products={products} 
            productTag={'Salads'}
            id='Salads'
        />

        <BlackLine text={'Add a Pasta to your order'}/>
        <ChooseFood 
            title={'Choose from Pastas'} 
            products={products} 
            productTag={'Pasta'}
            id='Pasta'
        />

        <BlackLine text={'Add a Soups to your order'}/>
        <ChooseFood 
            title={'Choose from Soups'} 
            products={products} 
            productTag={'Soups'}
            id='Soups'
        />

        <BlackLine text={'Add a Sandwiches and Burgers to your order'}/>
        <ChooseFood 
            title={'Choose from Sandwiches and Burgers'} 
            products={products} 
            productTag={'Sandwiches and Burgers'}
            id='SandWiches and Burgers'
        />

        <BlackLine text={'Add a Rolls to your order'}/>
        <ChooseFood 
            title={'Choose from Rolls'} 
            products={products} 
            productTag={'Rolls'}
            id='Rolls'
        />

        <BlackLine text={'Add a Calzone to your order'}/>
        <ChooseFood 
            title={'Choose from Calzone'} 
            products={products} 
            productTag={'Calzone'}
            id='Calzone'
        />

        <BlackLine text={'Add a Appetizers to your order'}/>
        <ChooseFood 
            title={'Choose from Appetizers'} 
            products={products} 
            productTag={'Appetizers'}
            id='Appetizers'
        />

        <BlackLine text={'Add a Drinks to your order'}/>
        <ChooseFood 
            title={'Choose from Drinks'} 
            products={products} 
            productTag={'Drinks'}
            id='Drinks'
        />
        </>
    )
}

export default Menu
