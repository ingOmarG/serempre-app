import React, { useState } from 'react';
import Typography from '../common/Typography';


const Tabs = () => {

    const [active, SetActive] = useState(1);

    const handleTabActive = (e) => {
        SetActive(parseInt(e.target.id));
    }
    return (
        <div className="w-full">
            <div className="w-full flex space-x-4">
                <button id={1} onClick={handleTabActive} className={`focus:outline-none ${active === 1 ? "text-black border-b-2 border-black" : "text-gray-500"}`}>Overview</button>
                <button id={2} onClick={handleTabActive} className={`focus:outline-none ${active === 2 ? "text-black border-b-2 border-black" : "text-gray-500"}`}>Features</button>
                <button id={3} onClick={handleTabActive} className={`focus:outline-none ${active === 3 ? "text-black border-b-2 border-black" : "text-gray-500"}`}>What's in the box?</button>
            </div>
            <div className="w-full pt-3">
                {active === 1 &&
                    <>
                        <Typography variant="body">For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True Wireless 2 is no different. Thanks to leading audio technology and innovation, these new earbuds deliver the best listening experience anytime, anywhere. With improved ergonomics designed for full day wearing and refined touch controls for a more personalised experience, they have been finely crafted for the most discerning listener and aim to simplify your life by enhancing your everyday.</Typography>
                    </>
                }
                {active === 2 &&
                    <>
                        <Typography variant="body">Voice Assistant support</Typography>
                        <Typography variant="body">Customizable controls</Typography>
                        <Typography variant="body">Customizable controls</Typography>
                        <Typography variant="body">Customizable controls</Typography>
                    </>
                }
                {active === 3 &&
                    <>
                       <Typography variant="body">For the past 75 years, Sennheiser has put sound first.</Typography>
                       <Typography variant="body">For the past 75 years, Sennheiser has put sound first.</Typography>
                       <Typography variant="body">For the past 75 years, Sennheiser has put sound first.</Typography>
                       <Typography variant="body">For the past 75 years, Sennheiser has put sound first.</Typography>
                    </>
                }
            </div>
        </div>
    );
}

export default Tabs;