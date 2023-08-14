import { json, useNavigate } from "react-router-dom"
import "./add-cart.css"
export default function AddCart(props) {
   const navigator = useNavigate()
    const { large, id } = props

    const cartButton=()=>{
        let prodects =[]
        const allId = sessionStorage.getItem("allId")
        if(allId){
            prodects = JSON.parse(allId)
            prodects.push(id)

        }else{
            prodects.push(id)
        }
        sessionStorage.setItem("allId",JSON.stringify(prodects))
        // console.log(id,"add-card...")
        navigator("/add-prodect")
    }
    return (
        <>
            <div className="add-cart d-flex py-3">
                <div className="col-6 pe-1">
                    <button onClick={()=>cartButton()} className="col-12 upper py-3 h6 border-0 bg-warning text-white">{large.add}</button>
                </div>
                <div className="col-6 ps-1">
                    <button className="col-12 upper py-3 h6 border-0 bg-danger text-white">{large.by}</button>
                </div>
            </div>
        </>
    )
}