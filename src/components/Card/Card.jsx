import './card.css'

export const Card = ({name, price, image, category}) => {
    return (
        <>
            <div className="card">
                <p className='category'>-- {category} --</p>
                <div className="imageField">
                    <h3 className="title">{name}</h3>
                    <img className="image" src={image} alt={name} />
                </div>
                <h3 className='price'>{price} €</h3>
            </div>
        </>
    )
}