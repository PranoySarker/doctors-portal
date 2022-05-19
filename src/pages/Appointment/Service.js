import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body mx-auto">
                <h2 className="card-title text-secondary ml-3">{name}</h2>
                <h3 className='text-xl font-bold ml-3'>{slots.length} spaces avilable</h3>
                <p>
                    {
                        slots.length > 0
                            ? <span className='ml-3'>{slots[0]}</span>
                            : <span className='text-red-500 ml-3'>No Slots Available</span>
                    }
                </p>

                <div className="card-actions ">
                    <button className=""></button>
                    <label for="booking-modal" className="btn modal-button btn-secondary text-white" onClick={() => setTreatment(service)} disabled={slots.length === 0} >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;