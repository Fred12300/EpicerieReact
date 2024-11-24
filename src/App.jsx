import { useEffect, useState } from 'react'
import './App.css'
import { List } from './components/List/List';
import { Cart } from './components/Cart/Cart';
import { Brand } from './components/Brand/Brand';
import { SearchBar } from './components/SearchBar/SearchBar';


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

//FOnction de transfert d'info de la barre de recherche
  const [selection, setSelection] = useState([])
  const handleSelection = (searchSelection) => {
    setSelection([searchSelection])
    console.log(searchSelection);
  }
  useEffect(() => {
    console.log("Nouvelle valeur (après mise à jour) :", selection);
}, [selection]);

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
    <div className='mainHeader'>
      <Brand />
      <SearchBar products={products} handleSelection={handleSelection}/>
    </div>
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
        selection={selection}
      />
      
    </div>
    </> 
  )
}

export default App
