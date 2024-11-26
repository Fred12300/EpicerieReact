import './list.css'
import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { Filter } from '../Filter/Filter';


export const List = ({showCart, products, categories, setCartContent, cartContent, addToCart, removeFromCart, selection, setSelection}) => {

  const [filtre, setFiltre] = useState('');

  const [filtered, setFiltered] = useState([]);

  const [sortBy, setSortBy] = useState('');

  const [sorted, setSorted] = useState([]);

//Filtre par categorie
  useEffect(() => {
    if (filtre == '') {
      setFiltered(products);
    } else {
      setFiltered(products.filter(prod => prod.categorie.nom == filtre))
    }
  }, [filtre, products])

//Tri par prix ou nom
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
  
//Affichage résultat de recherche
  useEffect(() => {
    if (selection && selection.length > 0) {
        setSorted(selection);
    } else {
        setSorted(filtered);
    }
  }, [selection]);

  return (
    <main className='main'>
    <Filter
      categories={categories}
      setFiltre={setFiltre}
      filtre={filtre}
      setSortBy={setSortBy}
      showCart={showCart}
      selection={selection}
      setSelection={setSelection}
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
