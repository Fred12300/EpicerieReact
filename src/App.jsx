import { useEffect, useState } from 'react'
import './App.css'
import { List } from './components/List/List';
import { Cart } from './components/Cart/Cart';
import { Brand } from './components/Brand/Brand';


function App() {

//Déclarations
  const [products, setProducts] = useState([]);
  const [cartContent, setCartContent] = useState([]);
  const categories = [];
  const [hide, setHide] = useState(true);

//Fonction d'ajout au panier
  const addToCart = (prod) => {
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

//Fonction de retraît du panier
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

//Fonctions d'affichage ou non du panier
  const hideCart = () => {
    console.log('hide');
    setHide(true)
  }
  const showCart = () => {
    console.log('show');
    setHide(false)
  }

//Récupération des données de l'API
  useEffect(() => {
    fetch('https://api.npoint.io/68bf5db20a3c236f68ed')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
  }, [])

//Création de la liste des catégories
  products.map((prod)=>{
    if(!categories.includes(prod.categorie.nom)){(categories.push(prod.categorie.nom))}
  })


  return (
    <>
    <Brand />
    <div className="main">
      <Cart
        cartContent={cartContent}
        setCartContent={setCartContent}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        hideCart = {hideCart}
        showCart={showCart}
        hide={hide}
      />
      <List
        products={products}
        categories={categories}
        setCartContent={setCartContent}
        cartContent={cartContent} 
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        showCart={showCart}
      />
      
    </div>
    </> 
  )
}

export default App
