import { useEffect, useState } from 'react';
import './brand.css'

export const Brand = () => {

    const [position, setPosition] = useState(-250);
    const [opacity, setOpacity] = useState(100)

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition((prevPosition) => {
                if (prevPosition >= 450) {
                    setOpacity(0);
                    setTimeout(() => {
                        setOpacity(100);
                    }, 1000);
                    return -250;
                } else {
                    return prevPosition + 10;
                }
            });
        }, 300);
    
        return () => {
            clearInterval(interval)}; // Nettoyage à la désactivation du composant
    }, []);
    

    return(
        <div className='brand'>
            <div className="header">
                <h1>Mon épicerie en ligne</h1>
                <img className="logo" src="epicerie.png" alt="logo" />
                    <div style={{ left: `${position}px`, opacity: `${opacity}%` }} className='line one'></div>
            </div>
        </div>
    )
}