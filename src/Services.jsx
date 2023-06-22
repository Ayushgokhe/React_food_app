import React from 'react';
import './App.css'
import Sdata from './Sdata';

const Services = () => {
    return (
        <>
            <div className="container_fluid nav_bg">
                <div className="service_content">
                    <img src="https://img.freepik.com/premium-vector/set-food_87621-647.jpg?w=1000" alt="" />
                </div>
                <div className="service_container">
                    <h1>Services</h1>
                    <div className="box">
                    {Sdata.map((val, ind) => {
                        return (<>
                           <div className='service_data'>
                           <img src={val.img} alt="error" />
                            <p>{val.name}</p>
                           </div>
                        </>)
                    })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;