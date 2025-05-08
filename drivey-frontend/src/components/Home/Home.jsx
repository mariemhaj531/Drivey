import React from 'react';

const Home = () => {
  return (
    <div className="hero-wrap ftco-degree-bg" style={{ backgroundImage: "url('')" }} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text justify-content-center align-items-center">
          <div className="col-lg-8 ftco-animate">
            <div className="text w-100 text-center mb-md-5 pb-md-5">
              <h1 className="mb-4">Fast &amp; Easy Way To Rent A Car</h1>
              <p style={{ fontSize: '18px' }}>A small river named Duden flows by their place and supplies it with the necessary regelialia...</p>
              <a href="/" className="icon-wrap popup-vimeo d-flex align-items-center mt-4 justify-content-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="ion-ios-play"></span>
                </div>
                <div className="heading-title ml-5">
                  <span>Easy steps for renting a car</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
