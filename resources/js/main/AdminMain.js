import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

class AdminMain extends Component {
  render () {
    return (
      <>
        <div>Hello</div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/' />
            </Switch>
          </div>
        </BrowserRouter>
      </>
    )
  }
}

export default AdminMain

if (document.getElementById('admin-root') !== null) {
  ReactDOM.render(<AdminMain />, document.getElementById('admin-root'))
}
