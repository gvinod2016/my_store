import './large.css'
import CardImage from './card/card-Image/cardImage'
import CardDetails from './card/card-details'
import More from './card/moreDetails/more'
export default function LargeCard(props) {
    const { large } = props
    return (
        <>
            <div className='large-card d-flex py-5 container'>
                <div className="col-4">
                    <CardImage large={large.card} ></CardImage>
                </div>
                <div className="details py-4 col-8">
                    <CardDetails large={large.card}></CardDetails>
                    <More large={large.card}></More>
                </div>
            </div>
        </>
    )
}