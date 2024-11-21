import { useState } from 'react'
import './square.css'

export function Square() {

    const [value, setValue] = useState(null);

    const [player, setPlayer] = useState(false);
    // player one is set at true; player two is set at false


    const handleClick = () => {
        setPlayer(!player);
        console.log(player);
        
        if (value === null) {
            setValue(player ? "O" : "X");
            
        }
    }

    return(
        <button
        className="square"
        onClick={handleClick}
        >
            { value }
        </button>
    )
  }