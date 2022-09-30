import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import MainLayout from "./layouts/main";
import Menu from "./pages/Menu/menu";
import Contact from "./pages/Contact/contact";
import AboutUs from "./pages/AboutUs/aboutUs";
import Cart from './pages/Cart/cart';
import ErrorPage from "./pages/ErrorPage/errorPage";

export const ProjectRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Home/>} />
                <Route path="/menu" element={<Menu/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/about" element={<AboutUs/>} />
                <Route path="/cart" element={<Cart/>} />
            </Route>
            <Route path='*' element={<ErrorPage />} />
        </Routes> 
    )
}
