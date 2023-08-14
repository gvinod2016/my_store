import './infermation.css'

export default function Infermation(props) {
    const { small } = props;
   
    return (
        <>
            <a className='nav-link px-2 pt-3' href='#'>
                <h5 className="m-0 ">{small.name}</h5>
                <div className='d-flex'>
                    <p className='pe-2'>{(small.color)}</p>
                    <p>{small.gb}</p>
                </div>
                <div className='d-flex'>
                    <div className='d-flex bg-success text-white px-2 me-2 rounded-1'>
                        <p className='pe-1 m-0'>{small.point}</p>
                        <div className='d-flex align-items-center'>
                            <img className='W-100 ' src={small.icon}></img>
                        </div>
                    </div>
                    <p className='m-0'>{small.review}</p>
                </div>
                <div className='price d-flex'>
                    <p>₹{small.new}</p>
                    <p className='decoration px-2'>₹{small.wold}</p>
                    <p className='color'>{small.persent}</p>
                </div>
            </a>
        </>
    )
}