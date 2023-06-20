import React from 'react';

const About = () => {
    return (
        <div className='w-9/12 mx-auto'>
            <div className='m-8 p-8'>
                <h1 className='sm:text-xl md:text-2xl lg:text-3xl font-bold text-teal-700 text-center'>Lube Oil Analysis</h1>
            </div>

            <div className='grid grid-cols-2 justify-center items-center'>
                <div>
                    <h2 className='sm:text-xl md:text-2xl lg:text-3xl font-bold text-teal-700'>Why Oil Analysis?</h2>
                    <ol>
                        <li className='sm:text-sm md:text-xl  m-2 p-2'>
                            1.Through physical testing, the presence of
                            contaminants such as fuel or water in engine oil,
                            as well as cross-contamination of lubricants,
                            can be detected. Additionally, the cleanliness of
                            oils can be assessed according to standardized
                            measurements.
                        </li>
                        <li className='sm:text-sm md:text-xl  m-2 p-2'>
                            2.The condition of the oil can be assessed to
                            estimate its remaining service life accurately.
                            This assessment enables cost-effective
                            measures such as topping up the oil when
                            needed, instead of performing unnecessary oil
                            changes, thus optimizing maintenance costs.

                        </li>
                        <li className='sm:text-sm md:text-xl  m-2 p-2'>
                            3.Analyzing the oil allows for verification of the
                            correct type and grade being used, ensuring
                            that the oil meets the specific requirements of
                            the equipment. Furthermore, the analysis
                            confirms the presence of appropriate additives,
                            which are crucial for optimal performance and
                            protection of the equipment.
                        </li>
                    </ol>
                </div>
                <div className='w-5/6 mx-auto'>
                    <img className='border rounded-lg' src="https://img.freepik.com/free-photo/laboratory-glassware-arrangement-high-angle_23-2149481707.jpg?w=996&t=st=1687243745~exp=1687244345~hmac=9859f7811769935619a449dd70a49561b361e39aa5d5c0ca6852b8165954338f" alt="" />
                </div>
            </div>

            <div className=' justify-center items-center'>

                <div>
                    <div className='my-2 py-2'>
                        <h2 className='sm:text-xl md:text-2xl lg:text-3xl font-bold text-teal-700'>Benefits of Used Oil
                            Monitoring System</h2>
                    </div>
                    <div className='grid grid-cols-2 gap-4 mx-10 my-8'>
                        <div >
                            <img className='border rounded-lg' src="https://img.freepik.com/free-photo/pharmaceutical-factory-woman-worker-protective-clothing-operating-production-line-sterile-environment_645730-305.jpg?w=996&t=st=1687244340~exp=1687244940~hmac=e6a43616077b7eefbff2a05d2b33e54070bfde48248fdbd41323e3b49edc34ec" alt="" />
                        </div>
                        <ul>
                            <li className='sm:text-sm md:text-xl  m-2 p-2'>•Identify high-value abrasion</li>
                            <li className='sm:text-sm md:text-xl  m-2 p-2'>•Quantify and analyze fuel dilution levels</li>
                            <li className='sm:text-sm md:text-xl  m-2 p-2'>•Authenticate warranty-related concerns
                            </li>
                            <li className='sm:text-sm md:text-xl  m-2 p-2'>•Continuously monitor air filtration systems</li>
                            <li className='sm:text-sm md:text-xl  m-2 p-2'>•Optimize oil change intervals for your specific
                                needs
                            </li>
                            <li className='sm:text-sm md:text-xl  m-2 p-2'>•Enhance equipment's trade-in value
                            </li>
                            <li className='sm:text-sm md:text-xl  m-2 p-2'>•Prevent progressive damage and breakdowns</li>

                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;