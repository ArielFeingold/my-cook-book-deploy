import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../store/actions/index';
import { Container, Row, Col, Button } from 'mdbreact';
import { Alert } from 'reactstrap';
import Spinner from '../../components/UI/Spinner'
import BodyBackgroundColor from 'react-body-backgroundcolor'

class Signup extends Component {

      state = {
        email: '',
        password: '',
        username: ''
      }

      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      submitHandler = ( event ) => {
        event.preventDefault();
        event.target.className += ' was-validated';
        this.props.onSignup( this.state.email, this.state.password, this.state.username);
      }

    render(){

      let spinner = null;
      if ( this.props.loading ) {spinner = <Spinner />}

      let usernameError =  '';
      let emailError = '';
      let passwordError = ''
      let takenWarning = '';
      if ( this.props.errors ) {
        if(this.props.errors.username){usernameError = `Username ${this.props.errors.username[0]}`};
        if(this.props.errors.password){passwordError = `Password ${this.props.errors.password[0]}`};
        if(this.props.errors.email){
          emailError = `Email ${this.props.errors.email[0]}`;
          if(this.props.errors.email[0] === "has already been taken" ){
            takenWarning = <Alert color="danger">Email is already in use</Alert>
          }
        }
      }

      let authRedirect = null;
      if ( this.props.isNewSignup ) {
          authRedirect = <Redirect to="/users/login" />
      }


      return(
        <Container className="mt-5 mx-auto">
          {authRedirect}
          <Row>
            <Col md="3"/>
            <Col md="6">
              {spinner}
              <BodyBackgroundColor backgroundColor='#e8ecf4'>
                <form  className='needs-validation p-3' onSubmit={this.submitHandler} noValidate>
                  <p className="h4 text-center mb-4 mt-2">Sign up</p>
                  {takenWarning}
                  <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Choose Username</label>
                  <input onChange={this.handleChange} type="text" name="username" value={this.state.username} className="form-control" required/>
                  <div className="invalid-feedback">{usernameError}</div>
                  <br/>
                  <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">Your Email</label>
                  <input onChange={this.handleChange} type="email" name="email" value={this.state.email} className="form-control" required/>
                  <div className="invalid-feedback">{emailError}</div>
                  <br/>
                  <label htmlFor="defaultFormRegisterNameEx" className="grey-text">Choose Password</label>
                  <input onChange={this.handleChange} type="password" name="password" value={this.state.password} className="form-control" required/>
                  <small className="form-text text-muted">Password should be at least 8 characters</small>
                  <div className="invalid-feedback">{passwordError}</div>
                  <br/>
                  <div className="text-center mt-4">
                    <Button className="btn btn-indigo" type="submit">Register</Button>
                  </div>
                </form>
              </BodyBackgroundColor>
            </Col>
          </Row>
        </Container>
      )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        errors: state.auth.signupError,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath,
        isNewSignup: state.auth.isNewSignup
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignup: ( email, password, username ) => dispatch( actions.signup( email, password, username) )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Signup );
