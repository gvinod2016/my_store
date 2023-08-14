import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { API_URL } from "../../config/config"
export default function Signup() {
    const [getData, setGetData] = useState(null)
    const [passwordInput, setPasswordInput] = useState("password")
    const history = useNavigate();
    useEffect(() => {

    })
    // const getApiData=()=>{

    //     axios.get(url).then((res)=>{
    //         console.log(res.data,"res")
    //     })
    // }
    const inputData = (e) => {
        const inputVal = e && e?.target?.value
        const inputName = e && e?.target?.name
        // console.log("val:", inputVal, "name:", inputName)
        setGetData({ ...getData, [inputName]: inputVal })
        // console.log(getData, "val2")
    }
    const submitButton = () => {
        const url = API_URL + "users";
        axios.post(url, getData)
            .then((res) => {
                history('/login')
            }).catch((err) => { 
                console.log('Sinup is not insert. please try later')
            })
    }
    const showPassword = () => {
        if (passwordInput == "password") {
            setPasswordInput("text")
            return
        } else {
            setPasswordInput("password")
        }
    }
    return (
        <>
            <div className="signin py-3 d-flex justify-content-center">
                <div className="form col-3 p-4 border">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Id</label>
                        <input type="text" class="form-control" name="id" onChange={inputData} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" name="name" onChange={inputData} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Phone No</label>
                        <input type="text" class="form-control" name="phone" onChange={inputData} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" name="email" onChange={inputData} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Location</label>
                        <input type="text" class="form-control" name="location" onChange={inputData} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type={passwordInput} class="form-control" name="password" onChange={inputData} />
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" onClick={showPassword} class="form-check-input" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div>
                            <div class="py-2">
                                <button onClick={submitButton} class="btn btn-primary">Submit</button>
                            </div>
                            <div>
                                <Link class="nav-link text-center" to="/login" >Login</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}