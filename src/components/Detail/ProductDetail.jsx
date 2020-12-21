const ProductDetail = ({item}) => {
    return (
        <article>
            <h1>{item.nombre}</h1>
            <img src={item.foto} alt=""/>
            <p>{item.descripcion}</p>
            <p>{item.precio}</p>
            <button>Agregar al carrito</button>
        </article>
    )
}

export default ProductDetail;