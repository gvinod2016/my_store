import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config/config";
import { ToastContainer, toast } from 'react-toastify';

export default function Login() {
    const history = useNavigate();
    const [getData, setGetData] = useState(null)
    useEffect(() => {
        const email = sessionStorage.getItem('email');
        if (email) {
            history('/home');
        }
    })
    const loginPage = () => {
        const notify = () => toast("user detail are not correct!");
        const url = API_URL + "users?email=" + getData.email + "&password=" + getData.password
        axios.get(url).then((res) => {
            console.log(res.data, "res_111")
            const data = res.data
            if (data && data.length == 1) {
                const userData = data[0]
                sessionStorage.setItem("name", userData.name);
                sessionStorage.setItem("email", userData.email);
                sessionStorage.setItem("id", userData.id);
                history('/home')
            } else {
                notify()
            }
        }).catch((err) => {
            console.log('Please try later')
        })
    }
    const inputData = (e) => {
        const inputVal = e && e?.target?.value
        const inputName = e && e?.target?.name
        console.log("val:", inputVal, "name:", inputName)
        setGetData({ ...getData, [inputName]: inputVal })
    }
    return (
        <>
            <div className="login">
                <div className="text-center  fw-bold">
                    <h3 className="p-2">Login Form</h3>
                </div>
                <div className=" d-flex justify-content-center">
                    <div className="col-3 p-4 border">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" name="email" onChange={inputData} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" name="password" onChange={inputData} />
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>

                        <div className="d-flex justify-content-center">
                            <div>
                                <div class="py-2">
                                    <button type="submit" onClick={loginPage} class="btn btn-primary">Submit</button>
                                    <ToastContainer />
                                </div>
                                <div>
                                    <Link class="nav-link text-center" to="/signup" >SignUp</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}