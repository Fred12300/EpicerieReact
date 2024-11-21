import './card.css'

const Card = ({prod, cartContent, addToCart, removeFromCart}) => {

    return (
        <>
            <div className="card">
                <div className="imageField">
                    <img className="image" src={prod.image} alt={prod.nom} />
                </div>
                <h3 className="title">{prod.nom}</h3>
                <div className="totalProd">
                    <h3 className='price'>{prod.prix} €</h3>
                    {cartContent.some((item) => item.product.nom === prod.nom) && (
                    <div>x {cartContent.find((item) => item.product.nom === prod.nom).qte}</div>
                    )}
                    <div className="qtePanel">
                        <img className="icon" src="./plus.png" alt="ajouter" onClick={() => {addToCart(prod)}}/>
                        {cartContent.some((item) => item.product.nom === prod.nom) && (
                            <img className="icon" src="./minus.png" alt="retirer" onClick={() => {removeFromCart(cartContent.indexOf(cartContent.find((item) => item.product.nom === prod.nom)))}}/>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card