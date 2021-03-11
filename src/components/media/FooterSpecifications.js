import React from 'react';
import Touch from '../../assets/img/touch.png';
import Equalizer from '../../assets/img/equalizer.png';
import NoiseCancelation from '../../assets/img/noise_cancelation.png';


export const FooterSpecifications = ({ source, title }) => {

    const details = [
        {
            img: Touch,
            desciption: 'Customizable Touch Controls'
        },
        {
            img: Equalizer,
            desciption: 'Built-in Equalizer'
        },
        {
            img: NoiseCancelation,
            desciption: 'Active Noise Cancellation'
        }

    ]

    return (
        <ul className="flex justify-between flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-4">
            {
                details.map((item) => (
                    <li key={item.desciption} className="text-center">
                        <img className="mx-auto pb-2" src={item.img} alt={item.desciption} />
                        <p className="text-sm text-black">{item.desciption}</p>
                    </li>
                ))
            }
        </ul>
    );
}
