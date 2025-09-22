import Categorias from '../components/Categorias'
import Promos from '../components/Promos'
import '../css/style.css'
import Carta from './Carta'
import insta from '../assets/instagram-blanco-logo.png'
import { Link } from "react-router-dom"
import logo from '../assets/WEB LATARTA-04.png'


const Home = () => {


    return (
        <>
            <header className='w-full h-[60px] bg-amber-500 flex justify-between items-center pl-4 pr-4'>
                <img className='w-[100px]' src={logo} alt="logo" />
                <Link className='flex items-center' to="https://www.google.com/">
                    <p>Instagram</p>
                    <img className='w-[40px]' src={insta} alt="logo-instagram" />
                </Link>
            </header>
            <Promos />
            <Categorias />
            {/* <Carta /> */}
        </>
    )
}

export default Home