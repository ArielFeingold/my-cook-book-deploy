import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import Header from './components/Navigation/Header'
import Main from './components/Navigation/Main'
import BodyBackgroundColor from 'react-body-backgroundcolor'

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoLogin()
  }

  render() {
    return (
      <BodyBackgroundColor backgroundColor='#f2f5fc'>
        <div>
          <Header isAuth={this.props.isAuthenticated}/>
          <Main isAuth={this.props.isAuthenticated}/>
        </div>
      </BodyBackgroundColor>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoLogin: () => dispatch( actions.authCheckState() )
  };
};



export default withRouter( connect( mapStateToProps, mapDispatchToProps)( App ) );
