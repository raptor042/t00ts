"use client"

import BarsIcon from "@iconscout/react-unicons/icons/uil-bars"
import TimesIcon from "@iconscout/react-unicons/icons/uil-times" 
import Image from "next/image"
import t00ts from "../../public/t00ts.jpg"
import SearchBar from "./components/SearchBar"
import PriceBox from "./components/PriceBox"
import AdsBanner from "./components/AdsBanner"
import SideBar from "./components/SideBar"
import { useState } from "react"

export default function HomePage() {
    const [sideBar, setSideBar] = useState(false)

    const handleSideBar = event => {
        event.preventDefault()

        sideBar ? setSideBar(false) : setSideBar(true)
    }

    return (
        <div id="app" className="">
            <div id="header" className="flex flex-row bg-white items-center shadow-lg h-1/12 p-2">
                <div className="basis-1/3 flex flex-row justify-start items-center space-x-6">
                    <div className="flex justify-center items-center cursor-pointer" onClick={handleSideBar}>
                        {sideBar ? <TimesIcon size={32} color="#000"/> : <BarsIcon size={32} color="#000"/>}
                    </div>
                    <div className="flex justify-center items-center cursor-pointer">
                        <Image src={t00ts} alt="t00ts" width={140} height={70}/>
                    </div>
                </div>
                <div className="basis-1/3 flex flex-row justify-stretch items-center cursor-ponter">
                    <SearchBar/>
                </div>
                <div className="basis-1/3 flex flex-row justify-center space-x-4 items-center">
                    <PriceBox name="ETH" id="ethereum"/>
                    <PriceBox name="BNB" id="binancecoin"/>
                </div>
            </div>
            <div id="body" className="flex flex-row bg-gray-200">
                <div className={sideBar ? "basis-1/5 mr-2 mt-1 bg-white" : "hidden"}>
                    <SideBar/>
                </div>
                <div className={sideBar ? "basis-4/5 flex flex-col mt-4" : "flex flex-col mt-4"}>
                    <AdsBanner/>
                </div>
            </div>
        </div>
    )
}