import React from 'react';
import './App.css'
import video from './img/video.mp4'

const Home = () => {
  return (
    <>
      <div className="header">
        <div className="container_fluid nav_bg">
          <div className="content">
            <video src={video} autoPlay loop muted ></video>
            <div className="home">
              <h1 className='h-primary'>welcome to our online meal</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nulla quae doloribus delectus.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card_block">
            <div className="card border-2 solid bg-black" style={{width:'18rem'}}>
              <img src="https://blog.ipleaders.in/wp-content/uploads/2019/11/foodmitho.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card border-2 border-dark" style={{width:'18rem'}}>
              <img src="https://blog.ipleaders.in/wp-content/uploads/2019/11/foodmitho.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card border-2 solid bg-black" style={{width:'18rem'}}>
              <img src="https://blog.ipleaders.in/wp-content/uploads/2019/11/foodmitho.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
