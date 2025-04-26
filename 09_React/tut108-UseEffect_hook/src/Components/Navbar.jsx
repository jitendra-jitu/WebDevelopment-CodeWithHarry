import React, { useEffect, useState } from 'react';

const Navbar = ({ count, setCount }) => {
    const [navId, setNavId] = useState(100);

   

    useEffect(() => {
        alert("OverAll UseEffect: This effect runs on every render...!!");
    });



    // useEffect(() => {
    //     alert("Welcome to React Application! This effect runs only once on component mount.");
    // }, []);



    // clean-up function
    useEffect(() => {

        alert("Welcome to React Application! This effect runs only once i.e, Navbar-component is mounted...!!");

        return () => {
            alert('Navbar-Component was unmounted...!!!');
        }
    }, [])



    useEffect(() => {
        alert(`count Updated: New value detected in count. Effect triggered due to change.`);
    }, [count]);


    useEffect(() => {
        alert(`This effect runs when navId changes. The alert will be shown when navId is updated. Current navId: ${navId}`);
        setCount((count) => count + 1)
        setCount((count) => count + 1)
    }, [navId, setCount]);





    return (
        <div>
            <h1>Navbar</h1>
            <p>This is a simple navigation bar with Nav-ID{/* : {navId} */}</p>
        </div>
    );
    
};

export default Navbar;
