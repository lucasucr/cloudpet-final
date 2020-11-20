import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'


class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render() {
        const { authError, auth } = this.props;
        return (
            <div>
                <div id="from" className="container">
                <form onSubmit={this.handleSubmit}>
                    <h1>Iniciar Sesión</h1>
                    <h5>Si no se muestra ningún aviso te logeaste correctamente.</h5>
                    <div className="form-group">
                        <div className="input-field">
                            <input type="email" id="email" className="form-control" placeholder="Email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-field">
                            <input type="password" id="password" className="form-control" placeholder="Contraseña" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group"> 
                        <div className="input-field">
                            <button className="boton" type="submit">Iniciar Sesión</button>
                            <div className="red-text center">
                                {authError ? <p>{ authError }</p>: null}
                            </div>
                            <div className="signup_link">
                                ¿No tenes una cuenta? <a href="/signup">Registrarse</a>
                            </div>
                        </div>
                    </div>    
                </form>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
