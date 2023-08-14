import Header from "../compontent/header";
import { Outlet } from "react-router-dom";
import Footer from "../compontent/footer";
export default function Layout() {
    return (
        <>
            <Header/>
            <Outlet></Outlet>
            <Footer/>
        </>
    )
}