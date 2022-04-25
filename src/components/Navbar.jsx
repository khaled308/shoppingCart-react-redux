import { Link } from "react-router-dom"
import {useSelector} from 'react-redux' 

function Navbar() {
    const state = useSelector((state)=>state.cart)
    const count = state.reduce((a,b)=>a+ b.count , 0)
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
                <Link className="navbar-brand fw-bold fs-4" to="/">Shop</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='products'>Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='#'>About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='#'>Contact</Link>
                </li>
            </ul>
            <div className="buttons">
                <Link to='#' className="btn btn-outline-dark">
                    <i className="fa fa-sign-in me-1"></i>Login
                </Link>
                <Link to='#' className="btn btn-outline-dark mx-2">
                    <i className="fa fa-user-plus me-1"></i>Register
                </Link>
                <Link to='/cart' className="btn btn-outline-dark">
                    <i className="fa fa-shopping-cart me-1"></i>Cart({count})
                </Link>
            </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar