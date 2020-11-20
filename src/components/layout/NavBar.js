import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import  { Navbar, Nav } from 'react-bootstrap'



const Navb = (props) => {
    const { auth } = props;
    console.log(auth);
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
        

    <div>
  <Navbar collapseOnSelect expand="lg"  variant="dark">
    <Navbar.Brand href="/">
      <img
        alt=""
        src="/img/cloudpetlogo6.png"
        width=""
        height="25"
        className="d-inline-block align-top"
      />{''}
      CloudPet
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      {links}
    </Nav>
    </Navbar.Collapse>
  </Navbar>

        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navb)