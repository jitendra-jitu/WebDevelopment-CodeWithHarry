import React from 'react';

function Card({ id,userId, title, body }) {
    return (
        <div className='card'>

            <h2>Id:{id}</h2>
            <h3>UserId:{userId}</h3>
            <h3>{title}</h3>
            <p>{body}</p>

        </div>
    );
}

export default Card;