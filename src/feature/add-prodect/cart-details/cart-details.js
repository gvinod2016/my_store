import "./cart-details"

export default function CartDetails(props) {
    const { gotoCart, large, type, cartlabel, removeCard, removeLabel } = props

    return (
        <>

            <div className="px-4 py-2 ">
                <div className='d-flex align-items-center'>
                    <h5 className="mb-1">{large.name}</h5>
                    <p className='px-2 h5 m-1'>({large.color},</p>
                    <p className="h5 m-1">{large.gb})</p>
                </div>
                <p className="text-black-50 m-0">{large.ram}</p>
                <p className="text-black-50 m-0">{large.seller}</p>

                <div className='price d-flex align-items-center'>
                    <p className="m-0 h5">₹{large.new}</p>
                    <p className='decoration text-black-50 h6 m-0 px-2'>₹{large.wold}</p>
                    <p className='color text-success m-0 h6'>{large.persent}</p>
                </div>
                <a className="nav-link d-flex" href="#">
                    <p className="pe-4 m-0" onClick={() => { gotoCart(large.id, type) }}>{cartlabel}</p>
                    <p className="m-0" onClick={() => { removeCard(large.id, type) }}>{removeLabel}</p>
                </a>
            </div>
           

        </>
    )
}