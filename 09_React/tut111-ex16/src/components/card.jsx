function card({ userId, title, body }) {
    
    return (

        <div className='card'>

            <h3>{userId}</h3>
            <h3>{title}</h3>
            <p>{body}</p>   
        </div>
    );
}

    

export default card