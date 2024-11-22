import { useEffect } from 'react';
import './cart.css';
import { CartItem } from '../CartItem/CartItem';

export const Cart = ({ cartContent, addToCart, removeFromCart, hideCart, hide }) => {
    let total = 0;
    cartContent.forEach((elem) => {
    total += elem.product.prix * elem.qte;
    });
    total = total.toFixed(2);

  // Centrage du panier
    useEffect(() => {
    const cart = document.querySelector('.cart');

    if (cart) {
        const updateCartPosition = () => {
        const cartWidth = cart.offsetWidth;
        const windowWidth = window.innerWidth;
        const offsetRight = (windowWidth - cartWidth) / 2;
        cart.style.right = `${offsetRight}px`;
        };
        updateCartPosition();
        window.addEventListener('resize', updateCartPosition);
        return () => {
        window.removeEventListener('resize', updateCartPosition);
        };
    }
    }, [hide]);

    return (
    <div className={`cart ${hide ? 'hidden' : ''}`}>
        <div className="head">
        <h3>Votre Panier</h3>
        <div className="close" onClick={hideCart}>
            X
        </div>
        </div>
        {cartContent.length > 0 ? (
        cartContent.map((article, index) => (
            <CartItem
            key={index}
            article={article}
            index={index}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            />
        ))
        ) : (
        <p>Votre panier est vide.</p>
        )}
        {cartContent.length > 0 && (
        <div className="totalBox">
            <h4 className="totalTitle">Total</h4>
            <h4 className="total">{total} €</h4>
        </div>
        )}
    </div>
    );
};