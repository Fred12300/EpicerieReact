import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import { Card } from './components/Card/Card';


function App() {

  const [filtre, setFiltre] = useState('');

  const [products, setProducts] = useState([]);

  const [filtered, setFiltered] = useState([]);

  const [sortBy, setSortBy] = useState('');

  const [sorted, setSorted] = useState([]);

  const categories = [];

  useEffect(() => {
    fetch('https://api.npoint.io/68bf5db20a3c236f68ed')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFiltered(data);
      })
  }, [])

  products.map((prod)=>{
    if(!categories.includes(prod.categorie.nom)){(categories.push(prod.categorie.nom))}
  })


  useEffect(() => {
    if (filtre == '') {
      setFiltered(products);
    } else {
      setFiltered(products.filter(prod => prod.categorie.nom == filtre))
    }
  }, [filtre, sortBy])


  useEffect(() => {
    const sortedList = [...filtered]; 

    switch (sortBy) {
      case "priceUp":
        setSorted(sortedList.sort((a, b) => a.prix - b.prix));
        break;
  
      case "priceDown":
        setSorted(sortedList.sort((a, b) => b.prix - a.prix));
        break;
  
      case "productName":
        setSorted(sortedList.sort((a, b) => a.nom.localeCompare(b.nom)));
        break;
  
      default:
        setSorted(filtered);
        break;
    }
  }, [sortBy, filtered]);
  

  return (
    <>
    <h1>Mon épicerie en ligne</h1>
    <Button content="Tous" setFiltre={setFiltre} filtre=''/>
    {categories.map((cat, index)=><Button key={index} content={cat} setFiltre={setFiltre} filtre={cat}/>)}
    <hr />
    <div className="filterBar">
      <h3>{filtre.charAt(0).toUpperCase() + filtre.slice(1) || 'Tous les produits'}</h3>
      <small>Trier par: </small>
      <button onClick={() => setSortBy('priceUp')}>Prix +</button>
      <button onClick={() => setSortBy('priceDown')}>Prix -</button>
      <button onClick={() => setSortBy('productName')}>Nom</button>
    </div>
    <hr />
    <div className="productsList">
      {sorted.map((prod, index) =>
      <Card key={index} name={prod.nom} price={prod.prix} image={prod.image} category={prod.categorie.nom} />
      )
      }
    </div>
    </> 
  )
}

export default App
