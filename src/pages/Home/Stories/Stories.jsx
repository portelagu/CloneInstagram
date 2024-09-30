import React from 'react';
import { Link } from 'react-router-dom';
import StoriesData from './StoriesData/StoriesData';
import TextEllipse from './TextEllipse/TextEllipse';

const Stories = () => {
    return (
        <>
            <div className="lg:max-w-[41vw] md:max-w-[70vw] sm:max-w-full max-w-full w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll">
                <Link to="/" key="1" className='flex items-center justify-center flex-col flex-shrink-0'>
                    <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-green-600">
                        <img src="https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2024/03/31102120/ambrose-spellman-snack-920x584-e1547097401202-620x517.jpg" alt="story image" className="rounded-full w-full h-full object-cover p-[2.5px] bg-black" />
                    </div>
                    <TextEllipse username="itsambrose" maxLength={8} />
                </Link>
                {StoriesData.map((story) => (
                    <Link to="/" key={story.id} className='flex items-center justify-center flex-col flex-shrink-0'>
                        <div className="w-16 h-16 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#f02aa6] to-[#ff6f48]">
                            <img src={story.imageUrl} alt="story image" className="rounded-full w-full h-full object-cover p-[2.5px] bg-black" />
                        </div>
                        <TextEllipse username={story.username} maxLength={8} />
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Stories;
