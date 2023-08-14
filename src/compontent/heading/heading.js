import "./header.css"
export default function Heading(props) {
    const { heading } = props
    return (
        <>
            <div className="title-main d-flex justify-content-between">
                <h3 className="m-0">{heading.title}</h3>
                <p>{heading.more}</p>
            </div>
        </>
    )
}   