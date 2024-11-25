import Button from '../Button/Button'
import './filter.css'

export const Filter = ({categories, setFiltre, filtre, setSortBy, showCart, setSelection}) => {

    return(
    <>
        <div className='nav'>
            <Button content="Tous" setFiltre={setFiltre} filtre='' onClick={()=>setSelection()}/>
            {categories.map((cat, index)=><Button key={index} content={cat} setFiltre={setFiltre} filtre={cat}/>)}
            <img onClick={showCart} className='cartBtn' src="cart.png" alt=""/>

            <div className="filtre">
                <h3 className='filtreCat'>{filtre.charAt(0).toUpperCase() + filtre.slice(1) || 'Tous les produits'}</h3>
                <div className="filterBar">
                    <small>Trier par: </small>
                    <button onClick={() => setSortBy('priceUp')}>Prix +</button>
                    <button onClick={() => setSortBy('priceDown')}>Prix -</button>
                    <button onClick={() => setSortBy('productName')}>Nom</button>
                </div>
            </div>
        </div>
    </>
    )
}