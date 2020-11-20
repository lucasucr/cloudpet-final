import React from 'react'
import { Nav } from 'react-bootstrap'

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><Nav.Link id="abc" href='/signup'>Registrarse</Nav.Link></li>
            <li><Nav.Link id="abc" href='/signin'>Iniciar Sesión</Nav.Link></li>
        </ul>
    )
}

export default SignedOutLinks