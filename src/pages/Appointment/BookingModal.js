import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP');


    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot: slot,
            patient: user.email,
            patientName: user.displayName,
            phoneNumber: event.target.phone.value,
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast(`Appointment is set on ${formattedDate} at ${slot}`);
                }
                else {
                    toast.error(`Already have appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                setTreatment(null);
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Booking For:{name}</h3>
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-4'>
                        <input type="text" value={format(date, 'PPP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots?.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="input input-bordered w-full max-w-xs btn btn-secondary text-lg text-white" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;