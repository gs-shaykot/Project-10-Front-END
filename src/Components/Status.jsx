// use SlotCounter in the numbers
import React from 'react';
import { Fade, Roll } from 'react-awesome-reveal';
import SlotCounter from 'react-slot-counter';

const Status = () => {
    return (
        <div className='w-full h-auto md:h-48 bg-[url("https://i.ibb.co.com/YjhnWZg/D-min.jpg")] bg-cover bg-center'>
            <div className="w-full h-full bg-[rgba(0,0,0,0.80)]">
                <div className='container mx-auto flex flex-col md:flex-row justify-between items-center h-full text-white'>
                    <Fade>
                        <div className="stat place-items-center">
                            <div className="stat-title text-white">Total Raised</div>
                            <div className="stat-value text-secondary">
                                $
                                <SlotCounter
                                    value={10000}
                                />
                            </div>
                            <div className="stat-desc text-secondary">From January 1st to February 1st</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title text-white">Raised Today</div>
                            <div className="stat-value text-secondary">
                                $
                                <SlotCounter
                                    value={4380}
                                />
                            </div>
                            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                        </div>

                        <div className="stat place-items-center">
                            <div className="stat-title text-white">Today's Goal</div>
                            <div className="stat-value text-secondary">
                                $
                                <SlotCounter
                                    value={6000}
                                />
                            </div>
                            <div className="stat-desc text-secondary">90%</div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Status;