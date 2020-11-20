import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'




class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        ip: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }
    render() {
        const { authError } = this.props;
        return (
            <div className="log">
            <div id="from" className="container">
                <form onSubmit={this.handleSubmit}>
                    <h1>Registrarse</h1>
                    <h5>Si no se muestra ningún aviso te registraste correctamente, luego de esto dirijase a la pagina de logeo.</h5>
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
                            <input type="text" id="firstName" className="form-control" placeholder="Nombre" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group"> 
                        <div className="input-field">
                            <input type="text" id="lastName" className="form-control" placeholder="Apellido" onChange={this.handleChange} />
                        </div>
                    </div>    
                    <div className="form-group">
                        <div className="input-field">
                            <input type="text" id="ip" className="form-control" placeholder="IP" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group"> 
                        <div className="input-field">
                            <button className="boton" type="submit">Registrarse</button>
                            <div className="red-text center">
                                {authError ? <p>{ authError }</p>: null}
                            </div>
                            <div className="signup_link">
                                ¿Ya tenes una cuenta? <a href="/signin">Iniciá Sesión</a>
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
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)