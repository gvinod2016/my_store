import './image.css'
import { useNavigate } from "react-router-dom";

import Infermation from '../infarmation/infermation'
export default function Image(props) {
    const { small } = props
    const navigate = useNavigate();
    const goToDetailPage = (id) => {
        console.log('id....', id)
        navigate('/product-details/' + id)
    }
    return (
        
        <>  
            {
                small && small.map((row) => {
                    return (
                        <>
                            <div className='card p-3' onClick={() => {goToDetailPage(row.id)}}>
                                    <a href='#' className='d-flex'>
                                        <img className='w-100 h-250' src={row.image}></img>
                                    </a>
                                <Infermation small={row}></Infermation>
                            </div>

                        </>
                    )
                })
            }


        </>
    )
}