import React from 'react';
import HomeBanner from './HomeSection.js/HomeBanner';
import HomeAbout from './HomeSection.js/HomeAbout';
import HomeStat from './HomeSection.js/HomeStat';
import HomePhotGallery from './HomeSection.js/HomePhotGallery';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div className='w-3/5 mx-auto'>
                <HomeAbout></HomeAbout>
                <HomeStat></HomeStat>
                <HomePhotGallery></HomePhotGallery>
            </div>
        </div>
    );
};

export default Home;