import { useState, useEffect } from "react"
import "./add-prodect.css"
import axios from "axios"
import { API_URL } from "../../config/config"
import CartImage from "../../compontent/cards/cart-image"
import CartDetails from "./cart-details"
import { MOVE_TO_CART, SAVE_LATER, REMOVE_CART } from "./config"
import { useNavigate } from "react-router-dom"
// import { useParams } from "react-router-dom"
//  
export default function AddProdect() {
    const [prodectData, setProdectData] = useState(null)
    const [saved, setSaved] = useState(null)
    const allId = sessionStorage.getItem("allId");
     const history = useNavigate()
    // const {id} = useParams();
    useEffect(() => {
        navegate();
    }, [])
    function navegate() {
        console.log(allId, "all...")
        if (allId) {
            const idList = JSON.parse(allId);
            let urlId = idList.map((row) => {
                return 'id=' + row
            })
            if (urlId.length) {
                urlId = urlId.join('&')
                const url = API_URL + "items?" + urlId
                console.log(url, 'rulllll')
                axios.get(url).then((res) => {
                    const data = res.data;
                    // console.log(res.data, "res...data")
                    setProdectData(data);

                }).catch((err) => {
                    console.log('error-product deatils..')
                })
            }
            else {
                setProdectData([])
            }
        }

    }
    const removeCard = (id, type) => {
        const idList = JSON.parse(allId);
        console.log(idList, "id..list", allId)
        if (type == 'addCart') {
            const cartData = prodectData.filter((row) => {
                if (row.id != id) {
                    return row
                }
            })
            const urlId = idList && idList.filter((row) => {
                if (row !== id) {
                    // console.log(row, "roeeee", id, "id...")
                    return row
                }

            })
            // console.log(urlId, "remove....")
            sessionStorage.setItem("allId", JSON.stringify(urlId))
            setProdectData(cartData)
        } else {
            const cartData = saved.filter((row) => {
                if (row.id != id) {
                    return row
                }
            })
            const urlId = idList && idList.filter((row) => {
                if (row !== id) {
                    // console.log(row, "roeeee", id, "id...")
                    return row
                }

            })
            // console.log(urlId, "remove....")
            sessionStorage.setItem("allId", JSON.stringify(urlId))
            setSaved(cartData)
        }
    }
    const gotoCart = (id, type) => {
        const idList = JSON.parse(allId);

        if (type == 'addCart') {
            const saveData = saved ? saved : [];
            const saveDataid = []
            const cartDataid = [] 
            const cartData = prodectData.filter((row) => {
                if (row.id != id) {
                    cartDataid.push(row.id)
                    return row
                } else {
                    saveData.push(row)
                    saveDataid.push(row.id)
                }
            })
            // const urlId = idList && idList.filter((row) => {
            //     if (row !== id) {
            //         // console.log(row, "roeeee", id, "id...")
            //         return row
            //     }

            // })
            // console.log(urlId, "remove....")
            sessionStorage.setItem("allId", JSON.stringify(cartDataid))
            sessionStorage.setItem("saveddata", JSON.stringify(saveDataid))

            setProdectData(cartData)
            setSaved(saveData)
        } else {
            const addData = prodectData ? prodectData : [];
            const cartData = saved.filter((row) => {
                if (row.id != id) {
                    return row
                } else {
                    addData.push(row)
                }
            })
            // const urlId = idList && idList.filter((row) => {
            //     if (row !== id) {
            //         // console.log(row, "roeeee", id, "id...")
            //         return row
            //     }

            // })
            // // console.log(urlId, "remove....")
            // sessionStorage.setItem("allId", JSON.stringify(urlId))
            setProdectData(addData)
            setSaved(cartData)
        }
    }
    const showtheTotalDetails = (data) => {
        const value = data
        const totalAmout = value.reduce((total, obj, index, arr) => {


            const n = Number(total.amount) + Number(obj.new)
            const d = Number(total.discount) + (Number(obj.wold) * (Number(obj.disc)) / 100)
            let del = total.delivaryfee
            if ('number' == typeof obj.delivaryfee) {
                if (typeof del == 'string') {
                    del = obj.delivaryfee
                } else {
                    del = del + obj.delivaryfee
                }
            }
            console.log(d, "dis...", n, "total", del, "del")
            return { ...total, ['amount']: n, ['discount']: Math.round(d), ['delivaryfee']: del }
        }, {
            title: 'total', amount: 0, discount: 0,
            delivaryfee: 'free'
        })
        return <div>
            <span>Total Price (Items {data.length})</span>
            <span>:</span> <span>{totalAmout.amount}Rs</span>,
            <span>Discount</span> <span>: {totalAmout.discount}Rs</span>,
            <span>Delivary Free</span> <span>: {totalAmout.delivaryfee}</span>
        </div>
    }
     const goTOPlaceOrder = ()=>{
        history("/placeOrder")
     }

    if (!prodectData) {
        return <div>Loading....</div>
    }
    return (
        <>
            <div className="cart d-flex px-5">
                <div className="col-7 px-4 mb-4">
                    <div className=" bg-white p-2">
                        <div className="border-bottom">
                            <h5>
                                Cart
                            </h5>
                        </div>
                        {
                            prodectData && prodectData.map((row, index) => {
                                return (
                                    <div className="d-flex border-bottom my-3" key={index + 'addcart'}>
                                        <div className="col-2 pb-3">
                                            <CartImage large={row}></CartImage>
                                        </div>
                                        <CartDetails type={"addCart"} cartlabel={SAVE_LATER} removeLabel={REMOVE_CART} gotoCart={gotoCart} removeCard={removeCard} large={row} ></CartDetails>
                                    </div>
                                )
                            })
                        }
                        <div className="d-flex justify-content-end">
                            <button className="border border-danger p-2 bg-danger text-white"onClick={goTOPlaceOrder} >place Order</button>
                        </div>
                    </div>

                </div>
                <div className=" px-4 mb-4 col-5">
                    <p className="bg-white">{showtheTotalDetails(prodectData)}</p>
                </div>
            </div>
            <div className="cart d-flex px-5">
                {
                    saved ?
                        <div className="col-7 px-4 mb-4">
                            <div className=" bg-white p-2">
                                <div className="border-bottom">
                                    <h5>
                                        Save For Larter
                                    </h5>
                                </div>
                                {
                                    saved && saved.map((row, index) => {
                                        return (
                                            <div className="d-flex border-bottom my-3" key={index + 'saveCartF'}>
                                                <div className="col-2 pb-3">
                                                    <CartImage large={row}></CartImage>
                                                </div>
                                                <CartDetails type={"saveCart"} cartlabel={MOVE_TO_CART} removeLabel={REMOVE_CART} removeCard={removeCard} gotoCart={gotoCart} large={row} ></CartDetails>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                        </div>
                        :
                        <div className="col-7 px-4 mb-4">
                            <div className=" bg-white p-2">
                                <h5>
                                    Save For Larter
                                </h5>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}