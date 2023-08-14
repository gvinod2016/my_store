import './small.css'
import Image from './image'
import Infermation from './infarmation/infermation'
export default function SmallCards(props) {
    const { small } = props
    return (
        <>
            <div className='grid'>
                <Image small={small.card}></Image>
            </div>
        </>
    )
}