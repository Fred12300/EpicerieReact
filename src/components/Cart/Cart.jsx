import './cart.css'

export const Cart = ({cartContent, addToCart, removeFromCart, hideCart, hide}) => {

    let total = 0;
    cartContent.map((elem)=>(total+=(elem.product.prix)*(elem.qte)));
    total = total.toFixed(2);

    return(
        <div className={`cart ${hide ? 'hidden' : ''}`}>
            <div className="head">
                <h3>Votre Panier</h3>
                <div className='close' onClick={hideCart}>X</div>
            </div>
            {cartContent.length > 0 ? (
                cartContent.map((article, index) => (
                <div className='cartItem' key={index}>
                    <div className="item">
                        {article.product.nom}
                        <p>x {article.qte}</p>
                    </div>
                    <button onClick={()=>{removeFromCart(index)}}>{article.qte >> 1 ? '-' : "x"}</button>
                    <button onClick={()=>{addToCart(article.product)}}>+</button>
                </div>

                ))
            ) : (
                <p>Votre panier est vide.</p>
            )}
            { cartContent.length > 0 && <h4 className='total'>Total {total} €</h4> }
        </div>
    )
}