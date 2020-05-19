import React from 'react';

const Card = ({id,name,email}) => {
    return (
        <div className='tc bg-light-green dib br3 pad3 ma2 grow bw2 shadow-5'>
            <img alt='astro' src={`https://robohash.org/${id}?200x200`} />
            <div>{name}</div>
            <div>{email}</div>
        </div>
    )
}
export default Card;