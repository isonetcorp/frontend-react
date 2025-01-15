import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
    const { initialValue} = useSelector((state) => state.product);
    return (
        <>
            <h1>Componente About</h1>
            <h2>{initialValue}</h2>
        </>
    );
}

export default About;