import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import { Nav } from 'react-bootstrap'


const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><Nav.Link id="abc" href="/">Encontrá a tu mascota</Nav.Link></li>
            <li><Nav.Link id="abc" onClick={props.signOut}>Cerrar Sesión</Nav.Link></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)