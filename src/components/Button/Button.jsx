import './button.css'

//Bouton de utlisé pour la filtration par catégorie
const Button = ({content, setFiltre, filtre}) => {
    return(
        <button onClick={() => setFiltre(filtre)}>{content.charAt(0).toUpperCase() + content.slice(1)}</button>
    )
}

export default Button