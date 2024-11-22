import './alt.css'

export const Alt = ({mini}) => {
    return(
        <div className='alt'>
            <img className="logo" src="epicerie.png" alt="logo" />
            {!mini && <h3>Mon épicerie en ligne</h3>}
        </div>
    )
}