import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return(
        <>
        <Header/>
        <Outlet />
        <Footer/>
        </>
    )
}

export default MainLayout
