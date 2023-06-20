import React from 'react';

const HomeBanner = () => {
    return (
        <div>
            <div className="carousel w-full h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/laboratory-glassware-with-liquids-different-color_1150-19441.jpg?w=996&t=st=1687245677~exp=1687246277~hmac=836c09ed7eb908e865deb8c98d1a2241d813520892f8cfc7254f160bd7e99a68" className="w-full opacity-80" alt="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/cold-whiskey-with-ice_144627-15200.jpg?w=996&t=st=1687245696~exp=1687246296~hmac=9d61906fd3ba90b9970812e79264699bfe599036d172b0ecd6323742c3858b28" className="w-full opacity-70" alt="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/transparent-plastic-bottles-filled-with-yellow-substance_273609-13382.jpg?w=996&t=st=1687245719~exp=1687246319~hmac=d8e3951edf03b0b6103a916dc36d8d042ba706c566af05df7245e088b98f731b" className="w-full opacity-70" alt="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/transparent-plastic-bottles-filled-with-yellow-substance_273609-13399.jpg?w=996&t=st=1687245737~exp=1687246337~hmac=51b230184fa97957cea8e0088d59624dc3ef976457e42b670c05ce5ed31dc056" className="w-full opacity-70" alt="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;