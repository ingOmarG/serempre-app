import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../common/Button';
import { StyledFooter, Wrapper } from './StyledFooter';


export const Footer = () => {

    const { FinalPrice } = useSelector(state => state.purchase);   


    return (
        <StyledFooter>
            <Wrapper>
                <div className="hidden w-1/2 md:flex flex-wrap py-2">
                    <div className="w-full lg:w-1/2">
                        <h4 className="text-sm pb-8 lg:pb-2 font-normal text-black">Free Shipping</h4>
                        <p className="text-sm text-gray-500 w-60 hidden lg:block">Get 2-day free shipping anywhere in North America.</p>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h4 className="text-sm pb-2 font-normal text-black">2 years warranty</h4>
                        <p className="text-sm text-gray-500 w-60 hidden lg:block">If anything goes wrong in the first two years, we'll replace it for free.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-end items-center py-2">
                    <div className="w-full flex flex-wrap justify-end items-center">
                        <div className="w-full md:w-1/2 pb-4 md:pb-0 md:pr-8">
                            <h1 className="text-right text-black text-3xl font-normal">${FinalPrice}</h1>
                            <p className="text-right text-sm block md:hidden lg:block text-gray-500">Need financing? Learn more </p>
                        </div>
                        <Button>Buy now</Button>
                    </div>
                </div>
            </Wrapper>
        </StyledFooter>
    );
}