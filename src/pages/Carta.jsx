import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom"
import Products from "../components/Products";


const Carta = () => {
    const [product,setProduct] = useState([]);

    const getProduct = async () => {
        const response = await fetch("https://backendtartaproductosdiario.onrender.com/productos");
        const data = await response.json();

        setProduct(data);
    }

    useEffect(()=>{
        getProduct();
    }, [])

    const postProduct = product.map((product)=>{
        return(
            <li key={product.nombre}>
                <Products product={product} />
            </li>
        )
    })

  return (
    <div>
        <h2>carta</h2>
        <Link to="/">regresar</Link>
        <ul>{postProduct}</ul>
    </div>
  )
}

export default Carta