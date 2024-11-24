import './list.css'
import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { Filter } from '../Filter/Filter';


export const List = ({showCart, products, categories, setCartContent, cartContent, addToCart, removeFromCart, selection}) => {

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
  
  useEffect(() => {
      setSorted(selection)
      console.log(selection)
  },[selection])

  return (
    <main className='main'>
    <Filter
      categories={categories}
      setFiltre={setFiltre}
      filtre={filtre}
      setSortBy={setSortBy}
      showCart={showCart}
      selection={selection}
    />
    <div className="productsList">
      {sorted.map((prod, index) =>
      <Card
        key={index}
        prod={prod}
        setCartContent={setCartContent}
        cartContent={cartContent}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      )
      }
    </div>
    </main> 
  )
}
