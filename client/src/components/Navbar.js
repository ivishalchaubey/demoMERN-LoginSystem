import { useState } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const [loginCheck, setLoginCheck] = useState(true);
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark sticky-top" data-bs-theme="dark">
            <div className="container">
                <NavLink to='/' className='navbar-brand'>Authentication</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {
                            loginCheck ? <li className="nav-item">
                                <NavLink to='/login' className="nav-link" onClick={() => setLoginCheck(!loginCheck)}>Login</NavLink>
                            </li> : <li className="nav-item">
                                <NavLink to='/signup' className="nav-link" onClick={() => setLoginCheck(!loginCheck)}>Signup</NavLink>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar