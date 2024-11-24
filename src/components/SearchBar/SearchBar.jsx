import { useState } from 'react'
import './searchBar.css'

export const SearchBar = ({products, handleSelection}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const searchItems = products.filter((item)=>item.nom.toLowerCase().includes(searchTerm.toLowerCase()));
    return(
        <div className="searchBox">
            <input
                type="text"
                className='searchBar'
                placeholder='Rechercher...'
                onChange={(e)=>setSearchTerm(e.target.value)}
            />
            {searchTerm && <ul className='searchResults'>
                {searchItems.map((item, index) => {
                    return (
                        <div
                            className="resultItem"
                            key={index}
                            onClick={() => {
                                handleSelection(item)
                                setSearchTerm('')
                                document.querySelector('.searchBar').value = ''
                            }}
                        >
                            {item.nom}
                        </div>
                    );
                })}
                {searchItems.length == 0 && <span>Aucun produit correspondant</span>}
            </ul>}
            
        </div>
    )
}