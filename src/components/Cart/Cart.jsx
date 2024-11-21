import './cart.css'

export const Cart = ({cartContent, setCartContent}) => {



    const removeFromCart = (index) =>{
        if(cartContent[index].qte <= 1) {
        const tempCart = [...cartContent];
        tempCart.splice(index,1);
        setCartContent(tempCart);
        } else {
            const updatedCart = [...cartContent];
            updatedCart[index].qte -= 1;
            setCartContent(updatedCart);
        }
    }

    return(
        <div className='cart'>
            <h3>Votre Panier</h3>
            {cartContent.length > 0 ? (
                cartContent.map((article, index) => (
                <div className='cartItem' key={index}>
                    <div className="item">
                        {article.product.nom}
                        <p>x {article.qte}</p>
                    </div>
                    <button onClick={()=>{removeFromCart(index)}}>{article.qte >> 1 ? '-' : "x"}</button>
                </div>

                ))
            ) : (
                <p>Votre panier est vide.</p>
            )}
        </div>
    )
}