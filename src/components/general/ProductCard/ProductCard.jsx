const ProductCard = ({titulo, precio}) => {
    return (
        <article>
            <img src="https://placehold.it/100x200" alt="Mi producto de prueba"/>
            <h3>{titulo}</h3>
            <p>${precio}</p>
        </article>
    )
}

export default ProductCard;