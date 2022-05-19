import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState({});
    const formattedDate = format(date, 'pp');

    const { data: services, isLoading } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])
    return (
        <div>
            <h2 className='text-center text-xl font-bold text-secondary'>Available Appointment For Date:{format(date, 'PPP')} </h2>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5 px-10 py-10'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                treatment={treatment}
                setTreatment={setTreatment}
                date={date}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;