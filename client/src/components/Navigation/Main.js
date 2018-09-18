import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../../containers/auth/Login'
import Signup from '../../containers/auth/Signup'
import Logout from '../../containers/auth/Logout'
import CreateRecipeContainer from '../../containers/recipes/CreateRecipeContainer'
import RecipesIndexContainer from '../../containers/recipes/RecipesIndexContainer'
import UpdateRecipeContainer from '../../containers/recipes/UpdateRecipeContainer'
import PageNotFound from '../../components/UI/PageNotFound'


const Main = () => (
  <main>
    <Switch>
      <Route path='/users/login' exact component={Login}/>
      <Route path='/users/signup' exact component={Signup}/>
      <Route path="/users/logout" exact component={Logout} />
      <Route path="/recipes/new" exact component={CreateRecipeContainer} />
      <Route path="/recipes/index" exact component={RecipesIndexContainer} />
      <Route path='/' exact component={Login}/>
      <Route path='/recipes/update' component={UpdateRecipeContainer}/>
      <Route path='/page-not-found' exact component={PageNotFound}/>
      <Redirect to="/" />
    </Switch>
  </main>
)

export default Main
