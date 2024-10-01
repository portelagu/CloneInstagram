import React from 'react';
import { Link } from 'react-router-dom';
import SabrinaIcon from '../../../../assets/navlogo/Sabrina.png';

const ProfileNav = () => {
    return (
        <>
            <div className="w-full h-auto flex items-center justify-between">
                <Link to="/profile" className='w-auto flex items-center gap-x-2'>
                    <img src={SabrinaIcon} alt="profile image" className="w-12 h-12 rounded-full" />
                    <div className="flex items-start gap-y-0 flex-col">
                        <p className="text-[0.9rem] text-white font-medium mb-0">
                            sabrinaspellman
                        </p>
                        <h6 className="text-[0.935rem] text-gray-500 font-normal">
                            The Dark Lord Sword
                        </h6>
                    </div>
                </Link>
                <Link to="/" className='text-[0.855rem] text-blue-500 hover:text-gray-200 font-medium'>
                    Switch
                </Link>
            </div>
        </>
    )
}

export default ProfileNav;
