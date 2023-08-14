import './more.css'

export default function More(props) {
    const { large } = props
    return (
        <>
            <>
                <a className='nav-link px-4' href='#'>
                    <div className='more-details'>
                        <div className='d-flex pb-3'>
                            <div className='col-2'>{large.warranty}</div>
                            <div className='col'>{large.years}</div>
                        </div>
                        <div className='d-flex pb-3'>
                            <div className='col-2'>{large.storage}</div>
                            <div className='col h6 m-0'>{large.gb}</div>
                        </div>
                        <div className='d-flex pb-3'>
                            <div className='col-2'>{large.delivery}</div>
                            <div className='col-3 '>
                                <input className='border-bottom border-primary text-center' maxLength="6" type='text' placeholder='Enter Delivery Pincode'></input>
                            </div>
                            <span><a className='nav-link text-primary' href=' #'>{large.click}</a></span>
                        </div>
                        <div className='d-flex pb-3'>
                            <div className='col-2'>{large.highlights}</div>
                            <div className='col'>
                                <ul>
                                    <li>{large.ram}</li>
                                    <li>{large.cm} {large.inch} {large.display}</li>
                                    <li>{large.cam}</li>
                                    <li> {large.battery}</li>
                                    <li>{large.processor}</li>
                                </ul>
                            </div>
                        </div>
                        <div className='d-flex pb-3'>
                            <div className='col-2'>{large.payment}</div>
                            <div className='col'>
                                <ul>
                                    <li>{large.emi}</li>
                                </ul>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='col-2'>{large.options}</div>
                            <div className='col'>
                                <ul>
                                    <li>{large.cod}</li>
                                    <li>{large.card}</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </a>
            </>
        </>
    )
}