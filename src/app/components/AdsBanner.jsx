"use client"

import Image from "next/image"
import zpunks from "../../../public/zpunks.webp"
import nestx from "../../../public/nestx.webp"
import artyfact from "../../../public/artyfact.webp"
import Carousel from "nuka-carousel"

export default function AdsBanner() {
    return (
        <div className="w-full shadow-lg bg-white h-1/5">
            <Carousel autoplay={true}>
                <Image src={zpunks} className="w-full h-full"/>
                <Image src={artyfact} className="w-full h-full"/>
                <Image src={nestx} className="w-full h-full"/>
            </Carousel>
        </div>
    )
}