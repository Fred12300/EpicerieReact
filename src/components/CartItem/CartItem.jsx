import { useState } from 'react';
import { Alt } from '../Alt/alt';
import './cartItem.css'

export const CartItem = ({ article, index, addToCart, removeFromCart }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="cartItem">
            <div className="item">
            <div className="mini">
                {imageError ? (
                    <Alt mini/>
                ) : (
                    <img
                    className="mini"
                    src={article.product.image}
                    alt={article.product.nom}
                    onError={() => setImageError(true)}
                    />
                )}
            </div>
            {article.product.nom}
            <p>x {article.qte}</p>
            </div>
            <button onClick={() => removeFromCart(index)}>{article.qte > 1 ? '-' : 'x'}</button>
            <button onClick={() => addToCart(article.product)}>+</button>
        </div>
    );
};