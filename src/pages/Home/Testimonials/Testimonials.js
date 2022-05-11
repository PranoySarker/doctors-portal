import React from 'react';
import quote from '../../../assets/icons/quote.svg';

const Testimonials = () => {
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-primary text-2xl font-bold'>Testimonials</h3>
                    <h2 className='text-4xl'>What our patients says</h2>
                </div>
                <div>
                    <img src={quote} alt="" className='w-24 lg:w-48' />
                </div>
            </div>
            <div>

            </div>
        </section>
    );
};

export default Testimonials;