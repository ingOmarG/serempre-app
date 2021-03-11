import React, { useState } from 'react';
import CaseBuds from '../../assets/img/case-buds.png';
import BigCaseBuds from '../../assets/img/big-case-buds.png';
import Buds from '../../assets/img/buds.png';
import BigBud from '../../assets/img/big-buds.png';
import BudParts from '../../assets/img/bud.png';
import BigBudParts from '../../assets/img/big-bud-parts.png';
import { FooterSpecifications } from './FooterSpecifications';

import { StyledMediaWrapper } from '../media/StyledMedia';

const MediaProduct = () => {

    const [active, SetActive] = useState(1);

    const images = [
        {
            id: 1,
            imgBig: BigCaseBuds,
            imgSmall: CaseBuds
        },
        {
            id: 2,
            imgBig: BigBud,
            imgSmall: Buds
        },
        {
            id: 3,
            imgBig: BigBudParts,
            imgSmall: BudParts,
        },
    ]

    const handleActive = (e) => {
        SetActive(parseInt(e.currentTarget.id));
    }

    return (
        <StyledMediaWrapper>
            <div className="border-2 border-gray-100 rounded-lg">
                {
                    images.map((item) => (
                        active === item.id &&
                        <div key={item.id} className="w-full border-2 border-gray-100 h-72 flex items-center mx-auto">
                            <img className="mx-auto w-72" src={item.imgBig} alt="Buds" />
                        </div>
                    ))
                }
            </div>

            <div className="pt-4">
                <div className="flex justify-between space-x-4 ">
                    {
                        images.map((item) => (
                            <button key={item.id} id={item.id} onClick={handleActive} className={`cursor-pointer rounded-lg w-full border-2 border-gray-100 h-16 md:h-32 flex items-center hover:border-gray-300 focus:outline-none focus:border-gray-300 focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50 ${active === item.id ? 'border-blue-500 hover:border-blue-500 focus:border-blue-500 focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50' : ''}`}>
                                <img className="w-12 md:w-28 mx-auto" src={item.imgSmall} alt="imgBud" />
                            </button>
                        ))
                    }
                </div>
            </div>

            <div className="w-10/12 mx-auto pt-20 hidden sm:block">
                <FooterSpecifications />
            </div>
        </StyledMediaWrapper>
    );
}
export default MediaProduct;