import { useState } from 'react';
import { Alt } from '../Alt/alt'
import './card.css'

//Cartes d'affichage des produits
const Card = ({prod, cartContent, addToCart, removeFromCart}) => {
const [imageError, setImageError] = useState(false);
    return (
        <>
            <div className="card">
                <div className="imageField">
                    {/* Remplacement image si erreur */}
                    {imageError ?
                    <Alt nom={prod.nom}/>
                    :
                    <img className="image" src={prod.image} alt={prod.nom} onError={() => setImageError(true)}/>
                    }
                </div>
                <h3 className="title">{prod.nom}</h3>
                <div className="totalProd">
                    <h3 className='price'>{prod.prix} €</h3>
                    {/* Affichage conditionnel de la quantité dans le panier */}
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