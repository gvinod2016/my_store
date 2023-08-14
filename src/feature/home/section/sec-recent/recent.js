import "./recent.css"
import { useEffect, useState } from "react";
import Heading from "../../../../compontent/heading";
import { API_URL } from "../../../../config/config";
import SmallCards from "../../../../compontent/cards/small-cards"
// import LargeCard from "../../../../compontent/cards/large-cards";
import axios from "axios";

export default function Recent() {
    const [details, setDetails] = useState(null)
    useEffect(() => {
        const url = API_URL + "items"
        axios.get(url).then((res) => {
            console.log(res.data, "res_222")
            const data = res.data;
            const recentList = data.filter((row) => {
                if (row.type == 'recent') {
                    return row
                }
            })
            const newList = data.filter((row) => {
                if (row.type == 'new') {
                    return row
                }
            })
            const populareList = data.filter((row) => {
                if (row.type == 'populare') {
                    return row
                }
            })
            
            const producList = [];
            const recItemsList = {
                "title": "Recent smartphones",
                "more": "VIEW ALL",
                "card": recentList.slice(0,5)
            }
            producList.push(recItemsList);
            const newItemsList = {
                "title": "New smartphones",
                "more": "VIEW ALL",
                "card": newList 
            }
            producList.push(newItemsList);
            const popuItemsList = {
                "title": "Recent smartphones",
                "more": "VIEW ALL",
                "card": populareList
            }
            producList.push(popuItemsList);

            setDetails(producList);
        })
    }, [])
    return (
        <>
            <div className="sec-recent px-4">
                {
                    details && details.map((row) => {
                        return (
                            <>
                                <div className="title nav-tabs px-3 py-2" >
                                    <Heading heading={row}></Heading>
                                </div>
                                <div className="products py-4" >
                                    <SmallCards small={row}></SmallCards>
                                </div>
                                {/* <div className="products py-4" >
                                    <LargeCard large={row}></LargeCard>
                                </div> */}
                            </>
                        )
                    })

                }

            </div>
        </>
    )
}