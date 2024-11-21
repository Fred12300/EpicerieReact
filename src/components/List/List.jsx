import './list.css'
import { useEffect, useState } from 'react'
import Button from '../Button/Button';
import Card from '../Card/Card'


export const List = ({products, categories, setCartContent, cartContent}) => {

  const [filtre, setFiltre] = useState('');

  const [filtered, setFiltered] = useState([]);

  const [sortBy, setSortBy] = useState('');

  const [sorted, setSorted] = useState([]);



  useEffect(() => {
    if (filtre == '') {
      setFiltered(products);
    } else {
      setFiltered(products.filter(prod => prod.categorie.nom == filtre))
    }
  }, [filtre, sortBy, products])


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
    <main className='main'>
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
      <Card key={index} prod={prod} setCartContent={setCartContent} cartContent={cartContent}/>
      )
      }
    </div>
    </main> 
  )
}
