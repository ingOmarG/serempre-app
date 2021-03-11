import React, { useEffect, useState } from 'react';
import Card from './Card';

import Tabs from '../navigation/tabs';

import MediaProduct from '../media/MediaProduct';
import { FooterSpecifications } from '../media/FooterSpecifications';
import { useDispatch, useSelector } from 'react-redux';
import { Setfeatures, SetfinalPrice, SetFinish, SetWarranty } from '../../actions/app';

export const MainContent = () => {

    const dispatch = useDispatch();
    const { Initialprice, Initfinish, Initwarranty, Initfeatures } = useSelector(state => state.purchase);
    const { purchase } = useSelector(state => state);



    const [data, SetData] = useState({ finish: Initfinish, warranty: Initwarranty, feature: Initfeatures });
    const { finish, warranty, feature } = data;


    useEffect(() => {
        SetData({ finish: Initfinish, warranty: Initwarranty, feature: Initfeatures });
    }, [Initfinish, Initwarranty, Initfeatures, Initialprice]);

    useEffect(() => {
        finalPrice();
    }, [warranty, feature]);


    const purshase = {
        finish: [
            {
                id: 1,
                title: 'Ivory White',
                description: 'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True. ',
                price: 0
            },
            {
                id: 2,
                title: 'Matte Black',
                description: 'Of all of the celestial bodies that capture our attention and fascination as astronomers.',
                price: 0
            }
        ],
        warranty: [
            {
                id: 1,
                title: '2 years coverage',
                description: 'For the past 75 years, Sennheiser has put sound first.',
                price: 0
            },
            {
                id: 2,
                title: '3 years coverage',
                description: 'For the past 75 years, Sennheiser has put sound first.',
                price: 75
            },
        ],
        features: [
            {
                id: 1,
                description: 'Voice Assistant support ',
                price: 0
            },
            {
                id: 2,
                description: 'Customizable controls',
                price: 25
            }
        ]
    }


    const handleSetFinish = (finish) => {
        dispatch(SetFinish(finish));
    }

    const handleWarranty = (warranty) => {
        dispatch(SetWarranty(warranty));
    }

    const handleFeature = (feature) => {
        dispatch(Setfeatures(feature));
    }

    const finalPrice = () => {
        const total = Object.values(data).reduce((a, v) => a + v.price, Initialprice);
        dispatch(SetfinalPrice(total));
    }



    return (
        <div className="w-11/12 md:w-3/4 xl:w-11/12 mx-auto flex flex-wrap lg:flex-nowrap pt-10 h-full md:space-x-8">

            <div className="w-full lg:w-1/2 md:pb-10">
                <MediaProduct />
            </div>

            <div className="w-full lg:w-1/2 pt-10 md:pt-0">
                <p className="text-sm text-red-500 uppercase pb-6">New release</p>
                <h1 className="text-4xl md:text-5xl font-normal pb-2">MOMENTUM True Wireless 2</h1>
                <h2 className="text-gray-500 text-xl md:text-3xl font-normal pb-10">Earbuds that put sound first</h2>
                <h5 className="text-gray-400 uppercase pb-2">Starting at</h5>
                <h2 className="text-black text-5xl font-normal pb-10">$295.95</h2>
                <Tabs />
                <div className="block sm:hidden pt-10">
                    <FooterSpecifications />
                </div>
                <h5 className="text-black text-lg font-normal py-3 pt-10">Choose your finish.</h5>
                <div className="flex flex-wrap md:flex-nowrap space-y-4 md:space-y-0 md:space-x-4 pb-8">
                    {
                        purshase.finish.map((item) => (
                            <Card key={item.id} handleclick={() => handleSetFinish(item)} active={item.id === finish.id || false}>
                                <h5 className="text-sm">{item.title}</h5>
                                <p className="text-sm text-gray-500">{item.description}</p>
                            </Card>
                        ))
                    }
                </div>
                <h5 className="text-black text-lg font-normal pb-3">Would you like to add extended <span className="hidden md:inline-block">warranty coverage?.</span></h5>
                <div className="flex flex-wrap space-y-4 pb-20">
                    {
                        purshase.warranty.map((item) => (
                            <Card key={item.id} handleclick={() => handleWarranty(item)} active={item.id === warranty.id || false}>
                                <h5 className="text-sm w-full">{item.title}</h5>
                                <p className="text-sm text-gray-500 ">{item.description}</p>
                                {
                                    item.price > 0 &&
                                    <div>
                                        <h5 className="text-sm w-full">+{item.price}</h5>
                                    </div>
                                }
                            </Card>
                        ))
                    }
                </div>
                <h5 className="text-black text-lg font-normal pb-2">Features.</h5>
                <div className="flex flex-wrap space-y-4 pb-10">
                    {
                        purshase.features.map((item) => (
                            <Card key={item.id} {...item} handleclick={() => handleFeature(item)} active={item.id === feature.id || false}>
                                <h5 className="text-sm">{item.description}</h5>
                                {   item.price > 0 &&
                                    <p className="text-sm">+{item.price}</p>
                                }
                            </Card>
                        ))
                    }
                </div>
                <h5 className="text-black text-lg font-normal pb-3 border-b-2 border-gray-100">Specifications..</h5>
                <div className="divide-y-2 divide-y-gray-100 pb-20">
                    <div className="w-full flex flex-wrap justify-between py-3">
                        <p className="w-full md:w-auto">Dimensions</p>
                        <p className="w-full md:w-auto">76.8 x 43.8 x 34.7 mm (earbuds and charging case)</p>
                    </div>
                    <div className="w-full flex flex-wrap justify-between py-3">
                        <p className="w-full md:w-auto">USB Standard</p>
                        <p className="w-full md:w-auto">USB-C</p>
                    </div>
                    <div className="w-full flex flex-wrap justify-between py-3">
                        <p className="w-full md:w-auto">Power supply</p>
                        <p className="w-full md:w-auto">Sennheiser 7mm dynamic driver</p>
                    </div>
                    <div className="w-full flex flex-wrap justify-between py-3">
                        <p className="w-full md:w-auto">Frequency response (Microphone)</p>
                        <p className="w-full md:w-auto">100 Hz to 10 kHz</p>
                    </div>
                    <div className="w-full flex flex-wrap justify-between py-3">
                        <p className="w-full md:w-auto">Frequency response</p>
                        <p className="w-full md:w-auto">5 - 21,000 Hz</p>
                    </div>
                    <div className="w-full flex flex-wrap justify-between py-3">
                        <p className="w-full md:w-auto">Noise cancellation</p>
                        <p className="w-full md:w-auto">Single-Mic ANC per earbud side</p>
                    </div>
                </div>
            </div>

        </div>
    );
}