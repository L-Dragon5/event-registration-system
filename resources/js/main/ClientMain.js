import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ClientMain extends Component {
  render () {
    return (
      <div>
        <span>Hello</span>
      </div>
    )
  }
}

export default ClientMain

if (document.getElementById('client-root') !== null) {
  ReactDOM.render(<ClientMain />, document.getElementById('client-root'))
}
