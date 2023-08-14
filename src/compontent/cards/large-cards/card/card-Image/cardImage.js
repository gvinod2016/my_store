import './cardImage.css'

export default function CardImage(props) {
    const { large } = props
    return (
        <>
            <div className='card p-3 '>
                <img className='w-100 h-100' src={large?.image} />
            </div>
        </>
    )
}   