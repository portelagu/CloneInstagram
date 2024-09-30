import React from 'react';

const TextEllipse = ({username, maxLength = 8 }) => {
    const usernameEllipseStory = 
    username.length > maxLength 
    ? `${username.slice(0, maxLength)}...` 
    : username;
    return (
        <>
        <p className="text-white text-sm mt-1 truncate">
{usernameEllipseStory}
        </p>
        </>
    )
}

export default TextEllipse;