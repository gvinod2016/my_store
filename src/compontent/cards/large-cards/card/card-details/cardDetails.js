import "./cardDetails.css"
export default function CardDetails(props) {
    const { large } = props
    return (
        <>
            <>
                <a className='nav-link px-4 pb-3' href='#'>
                    <div className="d-flex align-items-center">
                        <p className="m-0 h5">{large.name}</p>
                        <p className="m-0 h5">({large.color}</p>
                        <p className="m-0 h5">{large.gb})</p>
                        <p className="m-0 h5">({large.ram})</p>
                    </div>
                    <div className='d-flex align-items-center  py-2'>
                        <div className='d-flex bg-success text-white px-2    rounded-1'>
                            <p className='pe-1 m-0'>{large.point}</p>
                            <div className='d-flex align-items-center'>
                                <img className='W-100 ' src={large.icon}></img>
                            </div>
                        </div>
                        <p className="m-0 text-black-50 px-2 h6">{large.review} </p>
                        <p className="h6 text-black-50 m-0"> & 25 Review</p>
                    </div>
                    <div className='price d-flex align-items-end '>
                        <p className="m-0 h2">₹{large.new}</p>
                        <p className='decoration text-black-50 h5 m-0 px-2'>₹{large.wold}</p>
                        <p className='m-0 h6 text-success'>{large.persent}</p>
                    </div>
                </a>
            </>
        </>
    )
}