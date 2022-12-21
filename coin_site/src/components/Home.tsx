import { useState } from 'react'
import './Home.css'
import Button from '@mui/material/Button';
import Footer from './Footer'



const Home = () => {
    const [text, setText] = useState('0xb78e7916B41D3d0fDcBE99049CeA415D6413C384');


    const copy = async () => {
        await navigator.clipboard.writeText(text);
    }
    return (
        <div className="app">
            <div className="home" >
                <h1>Yacht Club Coin</h1>
                <Button variant="contained">Swap on PancakeSwap</Button>
                <h2>Yacht Club Contract Address</h2>
                <div className="address">
                    <input type="text" value={text} />
                    <Button onClick={copy} variant="contained">Copy</Button>
                </div>
            </div>
            <div className="about">
                <h1>About</h1>
                <p>Yacht Club Coin is a deflationary cryptocurrency that is the main currency for the decentralized Yacht Club ecosystem. The coin is created by the Yacht Club team and is currently in development. The coin is currently in development and is not yet available for purchase.</p>
            </div>
            <div className="how-to-buy">
                <h1>How to Buy</h1>
                <p>To buy Yacht Club tickets, you must first send BNB to the yacht club contract address. Once you have sent ETH to the contract address, you can buy tickets by sending the yacht club coin to the yacht club contract address. The yacht club contract address is shown above.</p>
            </div>
            <div className="roadmap">
                <h1>Roadmap</h1>
                <p>The roadmap for Yacht Club Coin is currently in development. The roadmap will include the following:</p>
            </div>
            <Footer />
        </div>

    )
}

export default Home