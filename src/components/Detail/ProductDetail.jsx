const ProductDetail = ({item}) => {
    const handleClickAdd = (e) => {
        alert('Producto agregado al carrito');
    }

    return (
        <article>
            <h1>{item.nombre} - {item.id}</h1>
            <img src={item.foto} alt=""/>
            <p>{item.descripcion}</p>
            <p>{item.precio}</p>
            <button onClick={handleClickAdd}>Agregar al carrito</button>
        </article>
    )
}

export default ProductDetail;