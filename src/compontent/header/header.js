import './header.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Header() {
    const [loginName, setLoginName] = useState(null)
    const [loginEmail, setLoginEmail] = useState(null)
    const getName = sessionStorage.getItem("name");
    const getMail = sessionStorage.getItem("email");
    useEffect(() => {
        setLoginName(getName)
        setLoginEmail(getMail)
    }, [])
    function clearData() {
        sessionStorage.clear();
    }
    return (
        <>
            <div class="header">

                {
                    loginName ?
                        <div className="d-flex container p-2">
                            <div className='col-6'>
                                <div className='d-flex'>
                                    <div><h2 ><Link className='nav-link' to='/home'>STORE</Link></h2></div>
                                    <div className='col px-3'><input className="col-12 p-2" type="text" placeholder="Search for products, brands and more"></input></div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='d-flex justify-content-around'>
                                <div className='bg-white text-primary col-3 text-center fw-bold py-2'>
                                        < Link class="nav-link" to="/add-prodect">Cart</Link>
                                    </div>
                                    <div className='bg-white text-primary col-3 text-center fw-bold py-2'>
                                        < Link class="nav-link" onClick={clearData} to="/login">Logout</Link>
                                    </div>
                                    <div className='fw-bold py-2' >
                                        <label >{loginName}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='p-2 d-flex justify-content-center'>
                            < Link class="nav-link bg-white text-primary col-1 text-center fw-bold py-2 " to="/signup">SignUp</Link>

                        </div>
                }



            </div >
        </>
    )
}