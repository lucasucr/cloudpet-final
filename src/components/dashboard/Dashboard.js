import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ledOn, ledOff, alarmOn, alarmOff} from '../../store/actions/findActions'

class Dashboard extends Component {
    render(){
        const { auth } = this.props;
        return(
            <div data-spy="scroll" data-target="#epico" data-offset="0">
                <div id="home">
                    <div id="abc" className="landing-text">
                    <h1 className="flow-text">Bienvenido a CloudPet</h1>
                    <h3>Encontrá a tu mascota, vayas donde vayas</h3>
                    <a href="/signup"><button type="button" className="btn btn-outline-light btn-lg" data-toggle="modal" data-target="#registerModal">Comenzar</button></a>
                    </div>
                </div> 

                    <div className="col-12 narrow text-center">
                    <h1 id="find">Encontrá a tu mascota</h1>
                    <p className="lead text-justify">El dispositivo de tu mascota tiene integrado una pequeña luz led y una alarma para poder encontrarlos, apreta el boton de abajo para activarlos.</p>
                    <p className="lead text-justify">Ademas, cada vez que tu mascota se aleje de tu casa, te va a llegar un mail, asi podes ir a buscarla lo antes posible.</p>
                    <div className="container">
                        <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 py-3">
                            <button onClick={this.props.alarmOn} type="button" className="btn btn-primary btn-md">Activar alarma</button>
                                </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 py-3">
                            <button onClick={this.props.ledOn} type="button" className="btn btn-primary btn-md">Activar luz led</button>  
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 py-3">
                        <button onClick={this.props.alarmOff} type="button" className="btn btn-primary btn-md">Apagar alarma</button>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 py-3">
                        <button onClick={this.props.ledOff} type="button" className="btn btn-primary btn-md">Apagar luz led</button>  
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ledOn: () => dispatch(ledOn()),
        ledOff: () => dispatch(ledOff()),
        alarmOn: () => dispatch(alarmOn()),
        alarmOff: () => dispatch(alarmOff())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)