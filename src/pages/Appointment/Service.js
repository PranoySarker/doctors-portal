import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body mx-auto">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>No Slots Available</span>
                    }
                </p>

                <div class="card-actions ">
                    <button class=""></button>
                    <label for="booking-modal" class="btn modal-button btn-secondary text-white" onClick={() => setTreatment(service)} disabled={slots.length === 0} >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;