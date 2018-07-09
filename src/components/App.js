import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Bezier Curve App</h1>
  </header>
)

const Main = (props) => (
  <div className=' artboard ' >

   Main

  </div>
)

const Menu = (props) => (
  <div className='side-bar'>
    <div className='menu-icones'>

      Menu

    </div>
  </div>
)

class DeveloperApp extends Component {
  render () {
    return (
      <div
        className='App-container'>

        <Menu

        />
        <Main

        />

      </div>
    )
  }
}

const App = (props) => (
  <div className='App'>
    <Header />
    <DeveloperApp />

  </div>
)

export default App
