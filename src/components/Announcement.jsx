import React from 'react';
import service_center from '../static/img/service_center.jpg';
import MyButton from './MyButton';
import Header1 from "../components/Header1";
import Paragraph from './Paragraph';

const Announcement = () => {
    const descrip =
        'Simply present your SM Bills Pay receipt within January 1 – February 28, 2023, and get P300 OFF, with a minimum spend of P3,000 on all items at #SMStore Butuan. Enjoy hassle-free transactions when you visit SM Bills Payment Centers at SM City Butuan: SM Store Customer Service, and SM Supermarket, Ground Level and Servicio, Level 3 (Besides SM Cinema) ';

    return (
        <div className='bg-light'>
            <div className='container'>
                <div className='row p-5'>
                    <div className='col-xl-4 col-lg-4 col-md-12 col-sm-11'>
                        <div className='container p-4'>
                            <Header1 header='LATEST NEWS' />
                            <h3 className='header2 py-3'>
                                Pay Your Bills at any SM Bills Payment Centers and save P300 from SM Store!
                            </h3>
                            <Paragraph descript={descrip} />
                        </div>
                    </div>
                    <div className='col-xl-4 col-lg-4 col-md-9 col-sm-11'>
                        <div className="container p-4">
                            <div className='row pt-4'>
                                <img className='myimage' src={service_center} alt='hey' />
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-4 col-lg-4 col-md-8 col-sm-11 px-4 py-4'>
                        <div className='row'>
                            <div className='container p-4'>
                                <Header1 header='ADVISORIES' />
                            </div>
                        </div>
                        <div className='row pt-1'>
                            <div className='col-4 '>
                                <MyButton name='Emergency' />
                            </div>
                            <div className='col-8'>
                                <Paragraph descript='Aug-29-Aug-30 Ampayon, Lamesa Pumping Station' />
                            </div>
                        </div>

                        <div className='row pt-1'>
                            <div className='col-4'>
                                <MyButton name='Scheduled' />
                            </div>
                            <div className='col-8'>
                                <Paragraph descript='Feb-28-Mar-01, Putatan Water Treatment Plant' />
                            </div>
                        </div>

                        <div className='row pt-1'>
                            <div className='col-4'>
                                <MyButton name='Rotational' />
                            </div>
                            <div className='col-8'>
                                <Paragraph descript='Mar-17-Apr-01 Tandag, Patindig Pumping Station' />
                            </div>
                        </div>

                        <div className='row pt-1'>
                            <div className='col-auto'>
                                <MyButton name='Septic Cleaning' />
                            </div>
                            <div className='col-6'>
                                <Paragraph descript='Mar-17-Apr-01 Tandag, Patindig Pumping Station' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Announcement;
