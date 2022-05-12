import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body mx-auto">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>No Slots Available</span>
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