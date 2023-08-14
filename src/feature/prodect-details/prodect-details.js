import './prodect-details.css';
import { useParams } from 'react-router-dom';
import CardImage from '../../compontent/cards/large-cards/card/card-Image'
import { useEffect, useState } from 'react';
import { API_URL } from '../../config/config';
import axios from 'axios';
import CardDetails from '../../compontent/cards/large-cards/card/card-details';
import More from '../../compontent/cards/large-cards/card/moreDetails/more';
import AddCart from '../../compontent/cards/large-cards/card/add-cart/add-cart';
export default function     ProdectDetails() {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState(null)
    const imageList = [{
        "id":1,
        "type":"recent",
        "image": "/images/mobile/original-imag1.webp",
        "name": "Realme 11 Pro 5G1 ",
        "color": "Oasis Green",
        "gb": "128 GB",
        "icon": "/images/mobile/star_icon.svg",
        "point":4.5,
        "review": "169 Ratings",
        "new": "₹23,999",
        "wold": "₹25,999",
        "persent": "7% off",
        "warranty":"Warranty",
        "years":"1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for In-Box Accessories",
        "storage":"Storage",
        "delivery":"Delivery",
        "click":"Click",
        "highlights":"Highlights",
        "ram":"8 GB RAM | 128 GB ROM",
        "display":"Full HD+ Display",
        "cm":"17.02 cm",
        "inch":"(6.7 inch)",
        "cam":"100MP (OIS) + 2MP | 16MP Front Camera",
        "battery":"5000 mAh Battery",
        "processor":"Dimensity 7050 Processor" ,
        "payment" :"Easy Payment",
        "emi": "No cost EMI starting from ₹4,000/month",
        "options":"Options",
        "cod":"Cash on Delivery",
        "card":"Net banking & Credit/ Debit/ ATM card"
      }]
    useEffect(() => {
        // console.log(id, 'loading...id')
        const url = API_URL + "items/"+ id
        axios.get(url).then((res) => {
            const data = res.data;
            setProductDetails(data)
        }).catch((err) => {
            console.log('error-product deatils..')
            setProductDetails([])
        })
    }, [])
    if (!productDetails) {
        return 'loading....'
    }
    if (productDetails?.length == 0) {
        console.log(productDetails,"deee")
        return (
            <div>No data for display.</div>
        )
    }
    return (
        <>
        
            <div className='prodect d-flex p-4'>
                <div className=' col-4 p-3 pb-0 bg-white' >
                    <CardImage large={productDetails}></CardImage>
                    <AddCart id={id} large={productDetails}></AddCart>
                </div>
                <div className='col-8 bg-white p-2'>
                    <CardDetails large={productDetails}></CardDetails>
                    <More large={productDetails}></More>
                </div>
            </div>
        </>
    )
}