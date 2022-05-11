import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <InfoCard cardTitle='Opening Hours' img={clock} bgColor='bg-gradient-to-r from-secondary to-primary'></InfoCard>
            <InfoCard cardTitle='Visit our location' img={marker} bgColor='bg-accent'></InfoCard>
            <InfoCard cardTitle='Contact us now' img={phone} bgColor='bg-gradient-to-r from-secondary to-primary'></InfoCard>
        </div>
    );
};

export default Info;