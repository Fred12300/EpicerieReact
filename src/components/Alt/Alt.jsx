import './alt.css'

export const Alt = ({mini, setShowDetails}) => {
    return(
        <div className='alt'>
            <img className="logo" src="epicerie.png" alt="logo" />
            {!mini && <h3>Mon épicerie en ligne</h3>}
            <div className='loupeContainer' onClick={()=>setShowDetails(true)}><img src="./search.png" alt="loupe" className='loupe'/></div>
        </div>
    )
}