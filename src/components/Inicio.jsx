import { Link } from "react-router-dom"

const Inicio = () => {
    return (
        <section className="w-screen h-52 border-2 text-center">
            <h1>LA TARTA</h1>
            <Link to="/carta">Carta</Link>
        </section>
    )
}

export default Inicio