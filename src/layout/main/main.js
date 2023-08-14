import { Outlet } from "react-router-dom";
import Header from "../../compontent/header";
import Footer from "../../compontent/footer";

export default function Main() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}