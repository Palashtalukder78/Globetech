import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Services.css'
const Services = () => {
    const {allServices} = useAuth();
    const {services} = allServices;
    return (
        <div className='container'>
            <div className='services-header text-center my-4'>
                <h3>Our Services</h3>
                <h1>We provides services to our clients</h1>
            </div>
            <div class="row my-4">
                {
                    services.map(service=>(
                        <div class="col-md-4">
                            <div className='bg-light service-item '>
                                <img className='img-fluid service-img' src={service.photo} alt="service_image" />
                                <div className='p-3'>
                                    <h5 style={{color:'#2397CD'}}>{service.name}</h5>
                                    <p style={{color:"#000633", textAlign:'justify'}}>{service.description}</p>
                                    <div className='text-center'>
                                        <button className='my-btn more-btn'>MORE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;