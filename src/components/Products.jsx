

const Products = (props) => {

  const {product} = props
  return (
    <div>
        <h3>{product.nombre}</h3>
        <p>{product.precio}</p>
    </div>
  )
}

export default Products