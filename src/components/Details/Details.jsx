import { useState, forwardRef, useEffect } from 'react'
import './details.css'

export const Details = forwardRef(({prod, cartContent, addToCart, removeFromCart, setShowDetails, showDetails}, ref) => {
    const [imageError, setImageError] = useState(false);
    
    useEffect(() => {
        if (showDetails && ref.current) {
          const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
          const offset = -10;
          window.scrollTo({
            top: elementPosition + offset,
            behavior: "smooth",
          });
        }
      }, [showDetails]);
    
    return(
        <div className="container">
            <div className="details" ref={ref}>
                <div className="DetailsImageField">
                    {/* Remplacement image si erreur */}
                    {imageError ?
                    <div className='alt'>
                        <img className="logo" src="epicerie.png" alt="logo" />
                        <h3>Mon épicerie en ligne</h3>
                    </div>
                    :
                    <img className="image" src={prod.image} alt={prod.nom} onError={() => setImageError(true)}/>
                    }
                    <div className="closeDetails" onClick={()=>{setShowDetails(false)}}>x</div>
                </div>
                <div className="bottom">
                    <h3 className="title">{prod.nom}</h3>
                    <div className="description">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati consequuntur sequi error praesentium veritatis tempore et veniam nobis explicabo eius repudiandae neque aspernatur minus, soluta odit, illum nemo totam enim deleniti dolor.</p>
                    </div>
                    <div className="etiquette">
                        <div className="productDetails">
                            <p><strong>Poids net :</strong> 100 g</p>
                            <p><strong>Ingrédients :</strong> Pâte de cacao, sucre, beurre de cacao, émulsifiant (lécithine de soja), arôme naturel de vanille.</p>
                            <p><strong>Allergènes :</strong> Peut contenir des traces de lait, de fruits à coque et de gluten.</p>
                        </div>
                        <div className="nutrition">
                            <h4>Valeurs nutritionnelles (pour 100 g)</h4>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Énergie</th>
                                        <td>584 kcal</td>
                                    </tr>
                                    <tr>
                                        <th>Matières grasses</th>
                                        <td>43 g</td>
                                    </tr>
                                    <tr>
                                        <th>dont acides gras saturés</th>
                                        <td>27 g</td>
                                    </tr>
                                    <tr>
                                        <th>Glucides</th>
                                        <td>45 g</td>
                                    </tr>
                                    <tr>
                                        <th>dont sucres</th>
                                        <td>30 g</td>
                                    </tr>
                                    <tr>
                                        <th>Fibres</th>
                                        <td>8 g</td>
                                    </tr>
                                    <tr>
                                        <th>Protéines</th>
                                        <td>7 g</td>
                                    </tr>
                                    <tr>
                                        <th>Sel</th>
                                        <td>0.01 g</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
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
            </div>
        </div>
)
})