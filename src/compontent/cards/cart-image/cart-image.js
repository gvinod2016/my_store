import "./cart-image.css"

export default function CartImage(props) {
    const { large } = props

    return (
        <>
            <div className='card p-3 '>
                <img className='w-100 h-90' src={large?.image} />
            </div>
        </>
    )
}