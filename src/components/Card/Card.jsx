import './card.css'

const Card = ({prod, setCartContent, cartContent}) => {
    const addToCart = () => {
        const existingItemIndex = cartContent.findIndex(
          (item) => item.product.nom === prod.nom
        );
      
        if (existingItemIndex !== -1) {
          const updatedCart = [...cartContent];
          updatedCart[existingItemIndex].qte += 1;
          setCartContent(updatedCart);
        } else {
          setCartContent([...cartContent, { product: prod, qte: 1 }]);
        }
      };

    return (
        <>
            <div className="card" onClick={addToCart}>
                <p className='category'>-- {prod.categorie.nom} --</p>
                <div className="imageField">
                    <h3 className="title">{prod.nom}</h3>
                    <img className="image" src={prod.image} alt={prod.nom} />
                </div>
                <div className="totalProd">
                    <h3 className='price'>{prod.prix} €</h3>
                    {cartContent.some((item) => item.product.nom === prod.nom) && (
                    <div>x {cartContent.find((item) => item.product.nom === prod.nom).qte}</div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Card