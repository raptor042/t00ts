"use client"

import { useEffect, useState } from "react"

export default function PriceBox({ name, id }) {
    const [price, setPrice] = useState()
    const [price_change, setPriceChange] = useState()

    useEffect(() => {
        setInterval(() => {
            getCoinInfo(id)
        }, 1000)
    }, [price, price_change])

    const getCoinInfo = async (id) => {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        const data = await response.json()
        const price_in_usd = data.market_data.current_price.usd
        const price_change_24hr = data.market_data.price_change_percentage_24h

        setPrice(price_in_usd)
        setPriceChange(price_change_24hr)
    }

    return (
        <div className="flex flex-col p-2 items-center justify-between bg-gray-200 shadow-inner rounded-md cursor-pointer">
            <div className="space-x-2">
                <span className="font-mono font-bold text-xl text-stone-600">
                    {name}
                </span>
                <span className={price_change < 0 ? "font-mono font-bold text-xl text-red-600 animate-ping" : "font-mono font-bold text-xl text-green-600 animate-ping"}>
                    {price_change}%
                </span>
            </div>
            <div className="flex justify-center">
                <span className="font-mono font-bold text-xl text-black animate-pulse">${price}</span>
            </div>
        </div>
    )
}