import { useEffect, useState } from "react"
import "./placeOrder.css"
import API_URL from "../add-prodect/add-prodect"
import axios from "axios"
import { PLACE_ORDER, NAME, EMAIL, ADDRESS, ADD_ADDRESS, SUBMIT } from "./config"
export default function FPlaceOrder() {
    const [nameData, setNameData] = useState(null)
    const [emailData, setEmailData] = useState(null)
    const [addressData, setAddressData] = useState(null)

    useEffect(() => {
        setEmailData(email)
        setNameData(name)
    })
    const placeorder = () => {

    }
    const inputData = (e) => {
        const inputVal = e && e?.target?.value
        const inputName = e && e?.target?.name
        console.log("val:", inputVal, "name:", inputName)
        setAddressData({ ...addressData, [inputName]: inputVal })
    }
    const addAddress = () => {
        const id = sessionStorage.getItem("id")
        console.log(id, "aaa", addressData, "id../")
        const url = API_URL + "items/" + id
        axios.put(url).then(() => {
            // const data = res.data;
            // console.log(data,"data...")
            // setProductDetails(data)
        }).catch((err) => {
            console.log('error address')
            // setProductDetails([])
        })
    }
    const email = sessionStorage.getItem("email")
    const name = sessionStorage.getItem("name")
    return (
        <>
            <div className="place-order px-5 py-4 ">
                <div className="border col-8 bg-white text-dark">
                    <div className=" px-4 py-3 bg-primary">
                        <h5 className=" mb-0 text-white">{PLACE_ORDER}</h5>
                    </div>
                    <div className="px-4 py-2">
                        <div className="col-5">
                            <div class="form-group">
                                <lable className="h6">{NAME} :</lable>
                                <input class="form-control" type="text" readonly value={nameData}></input>
                            </div>
                            <div class="form-group">
                                <lable className="h6">{EMAIL} :</lable>
                                <input class="form-control" type="text" readonly value={emailData}></input>
                            </div>
                            <div class="form-inline">
                                <div class=" mb-2">
                                    <label class="sr-only h6 m-0">{ADDRESS}</label>
                                    <textarea class="form-control" onChange={inputData} placeholder="Address" />
                                </div>
                                <button type="submit" class="btn btn-primary mb-2" onClick={addAddress}>{ADD_ADDRESS}</button>
                            </div>
                            <div className="text-center">
                                <button type="submit" class="btn btn-primary" onClick={placeorder} >{SUBMIT}</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}