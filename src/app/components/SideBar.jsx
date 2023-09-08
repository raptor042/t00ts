import MegaPhoneIcon from "@iconscout/react-unicons/icons/uil-megaphone"
import WalletIcon from "@iconscout/react-unicons/icons/uil-wallet"
import FireIcon from "@iconscout/react-unicons/icons/uil-fire"
import TrophyIcon from "@iconscout/react-unicons/icons/uil-trophy"
import ShieldIcon from "@iconscout/react-unicons/icons/uil-shield-exclamation"
import GiftIcon from "@iconscout/react-unicons/icons/uil-gift"
import TelegramIcon from "@iconscout/react-unicons/icons/uil-telegram"
import Image from "next/image"

export default function SideBar() {
    const eth = "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880"
    const bnb = "https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png?1644979850"
    const arb = "https://assets.coingecko.com/coins/images/16547/small/photo_2023-03-29_21.47.00.jpeg?1680097630"
    const matic = "https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912"
    const cro = "https://assets.coingecko.com/coins/images/7310/small/cro_token_logo.png?1669699773"

    return (
        <div className="w-full py-2 shadow-md">
            <div className="flex flex-col space-y-2">
                <div className="flex flex-row p-2 justify-start space-x-2 cursor-pointer hover:bg-gray-200">
                    <TrophyIcon size={28} color="#FDBD01"/>
                    <h2 className="font-mono font-bold text-xl text-black">Top 100 Tokens</h2>
                </div>
                <div className="flex flex-row justify-center">
                    <ul>
                        <li className="hover:bg-gray-200 p-2 font-mono font-bold text-lg cursor-pointer text-black">1h Gainers</li>
                        <li className="hover:bg-gray-200 p-2 font-mono font-bold text-lg cursor-pointer text-black">24h Gainers</li>
                        <li className="hover:bg-gray-200 p-2 font-mono font-bold text-lg cursor-pointer text-black">New Listings</li>
                        <li className="hover:bg-gray-200 p-2 font-mono font-bold text-lg cursor-pointer text-black">Daily Top</li>
                        <li className="hover:bg-gray-200 p-2 font-mono font-bold text-lg cursor-pointer text-black">All Time Top</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col" >
                <div className="flex flex-row p-2 justify-start space-x-2 cursor-pointer hover:bg-gray-200">
                    <FireIcon size={28} color="#B22222"/>
                    <h2 className="font-mono font-bold text-xl text-black">NewBorn Tokens</h2>
                </div>
                <div className="flex flex-row justify-center">
                    <ul>
                        <li className="hover:bg-gray-200 p-2 flex flex-row space-x-3">
                            <Image src={bnb} width={24} height={24}/>
                            <span className="font-mono font-bold text-lg cursor-pointer text-black">Binance</span>
                        </li>
                        <li className="hover:bg-gray-200 p-2 flex flex-row space-x-3">
                            <Image src={eth} width={24} height={24}/>
                            <span className="font-mono font-bold text-lg cursor-pointer text-black">Ethereum</span>
                        </li>
                        <li className="hover:bg-gray-200 p-2 flex flex-row space-x-3">
                            <Image src={arb} width={24} height={24}/>
                            <span className="font-mono font-bold text-lg cursor-pointer text-black">Arbitrum</span>
                        </li>
                        <li className="hover:bg-gray-200 p-2 flex flex-row space-x-3">
                            <Image src={matic} width={24} height={24}/>
                            <span className="font-mono font-bold text-lg cursor-pointer text-black">Polygon</span>
                        </li>
                        <li className="hover:bg-gray-200 p-2 flex flex-row space-x-3">
                            <Image src={cro} width={24} height={24}/>
                            <span className="font-mono font-bold text-lg cursor-pointer text-black">Cronos</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col space-y-2">
                <div className="flex flex-row p-2 justify-start space-x-2 cursor-pointer hover:bg-gray-200">
                    <TelegramIcon size={28} color="#1974D2"/>
                    <h2 className="font-mono font-bold text-xl text-black">Telegram Signals</h2>
                </div>
                <div className="flex flex-row justify-center">
                    <ul>
                        <li className="hover:bg-gray-200 p-2 font-mono font-bold text-lg cursor-pointer text-black">@BSC SAFE Sniper</li>
                        <li className="hover:bg-gray-200 p-2 font-mono font-bold text-lg cursor-pointer text-black">@DoxxedChannel</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col my-4">
                <div className="flex flex-row p-2 justify-start space-x-2 cursor-pointer hover:bg-gray-200">
                    <GiftIcon size={28} color="#FDBD01"/>
                    <h2 className="font-mono font-bold text-xl text-black">Airdrops</h2>
                </div>
            </div>
            <div className="flex flex-col my-4">
                <div className="flex flex-row p-2 justify-start space-x-2 cursor-pointer hover:bg-gray-200">
                    <ShieldIcon size={28} color="#757575"/>
                    <h2 className="font-mono font-bold text-xl text-black">Contract Scanner</h2>
                </div>
            </div>
            <div className="flex flex-col my-4">
                <div className="flex flex-row p-2 justify-start space-x-2 cursor-pointer hover:bg-gray-200">
                    <WalletIcon size={28} color="#7F4E52"/>
                    <h2 className="font-mono font-bold text-xl text-black">Portfolio</h2>
                </div>
            </div>
            <div className="flex flex-col my-4">
                <div className="flex flex-row p-2 justify-start space-x-2 cursor-pointer hover:bg-gray-200">
                    <MegaPhoneIcon size={28} color="#000"/>
                    <h2 className="font-mono font-bold text-xl text-black">Advertise</h2>
                </div>
                <div className="flex flex-row justify-center">
                    <ul>
                        <li className="hover:bg-gray-200 p-2 font-mono font-bold text-lg cursor-pointer text-black">Promote Coin</li>
                        <li className="hover:bg-gray-200 p-2 font-mono font-bold text-lg cursor-pointer text-black">Banners</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}