
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import photo from '../../assets/images/universe.png';
import Header from '../Shared/Header/Header';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    useEffect(() =>{
        AOS.init();
    },[]);
    return (
        <>
            <Header />
            <Container className='mt-4'>
                <div class="row home">
                    <div class="col-md-6" data-aos="zoom-in-up" data-aos-delay="500">
                        <h1>Welcome to</h1>
                        <h1 className='secondary-color'>Globetech</h1>
                        <p>We are committed to deliver <span className='secondary-color'>best IT services</span>. Our Consultants have experience in working with clients. We have extensive experience in the software application space and also offer a broad range and depth of technology.</p>
                        <button className='secondary-bg me-2 my-btn'>Support Us</button>
                        <button className='my-btn mission-btn'>Our Mission</button>
                    </div>
                    <div class="col-md-6 text-center text-md-end text-sm-center p-3" data-aos="zoom-in" data-aos-delay="600">
                        <img className="img-fluid universe-photo" src={photo} alt="" />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Home;