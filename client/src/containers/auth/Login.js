import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/actions/index';
import { Container, Row, Col, Button } from 'mdbreact';
import { Alert } from 'reactstrap';
import Spinner from '../../components/UI/Spinner'

class Login extends Component {

      state = {
        email: '',
        password: '',
      }


      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      submitHandler = ( event ) => {
        event.preventDefault();
        event.target.className += ' was-validated';
        this.props.onLogin( this.state.email, this.state.password);
      }


    render(){

      let spinner = null;
      if ( this.props.loading ) {spinner = <Spinner />}

      let errorMessage = null;
      if ( this.props.errors === "Not Found") {
          errorMessage = (
            <div>
              <Alert color="danger">User not found, please enter a valid password-email combination</Alert>
            </div>
          );
      }

      let authRedirect = null;
      if ( this.props.isAuthenticated ) {
          authRedirect = <Redirect to="/recipes/index" />
      }

      return(
        <Container className="mt-5 mx-auto">
          {authRedirect}
        <Row >
          <Col md="3" />
          <Col md="6">
            {spinner}
            <form className='needs-validation p-3' onSubmit={this.submitHandler} noValidate>
              <p className="h4 text-center mb-4 mt-2">Log In</p>
              {errorMessage}
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">Your email</label>
              <input type="email" name="email" value={this.state.email} id="defaultFormLoginEmailEx" onChange={this.handleChange} className="form-control" required/>
              <div className="invalid-feedback">Email is Required</div>
              <br/>
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">Your password</label>
              <input type="password" id="defaultFormLoginPasswordEx" className="form-control" value={this.state.password} name="password" onChange={this.handleChange} required/>
              <div className="invalid-feedback">Password is Required</div>
              <div className="text-center mt-4">
              <Button className="btn btn-indigo" type="submit">Login</Button>
              </div>
          </form>
          </Col>
        </Row>
      </Container>
      )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        errors: state.auth.loginError,
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: ( email, password ) => dispatch( actions.login( email, password) ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Login );
