import { useEffect, useState } from 'react'
import './App.css'
import { List } from './components/List/List';
import { Cart } from './components/Cart/Cart';


function App() {

  const [products, setProducts] = useState([]);
  const [cartContent, setCartContent] = useState([]);
  const categories = [];

  useEffect(() => {
    fetch('https://api.npoint.io/68bf5db20a3c236f68ed')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
  }, [])

  products.map((prod)=>{
    if(!categories.includes(prod.categorie.nom)){(categories.push(prod.categorie.nom))}
  })


  return (
    <>
    <h1>Mon épicerie en ligne</h1>
    <div className="main">
      <List products={products} categories={categories} setCartContent={setCartContent} cartContent={cartContent}/>
      <Cart cartContent={cartContent} setCartContent={setCartContent}/>
    </div>
    </> 
  )
}

export default App
