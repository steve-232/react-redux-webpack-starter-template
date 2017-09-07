import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { LayoutMain } from './components/layouts/LayoutMain'
import { LayoutDashboard } from './components/layouts/LayoutDashboard'
import { PageDashboard } from './components/pages/PageDashboard'
import { Page404 } from './components/pages/Page404'
import store from './store'
import './sass/main.scss'

render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/dashboard" component={LayoutDashboard}></Route>
        <Route path="/" component={LayoutMain}></Route>
      </Switch>
    </HashRouter>
  </Provider>
  ),
  document.getElementById('root')
);
