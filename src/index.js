import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import 'isomorphic-fetch'
import './css/onsen-css-components.css'
import './css/onsenui.css'

import './index.css';
import reducer from './reducers'
import Nav from './components/NavBar'
import Index from './containers/indexPage'
import A from './containers/a'

const store = createStore(reducer, applyMiddleware(
  thunk,
  routerMiddleware(browserHistory),
  createLogger(),
))


const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={({ children, location: { pathname } }) => {
        const key = pathname.split('/')[1] || 'root'
        return (
          <div style={{height: '100%'}}>
            <ReactCSSTransitionGroup
              transitionName="swap"
              transitionEnterTimeout={500} transitionLeaveTimeout={500}
            >
              {React.cloneElement(children || <div />, { key })}
            </ReactCSSTransitionGroup>
          </div>
        )
      }}>
        <IndexRoute component={Index}></IndexRoute>
        <Route path="/a/:id/:name" component={A}></Route>
        <Route path="/b" component={() => (<div style={{
          height: '100%',
          width: '100%',
          display: 'inline-block',
        }}><Nav>B</Nav></div>)}></Route>
      </Route>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
