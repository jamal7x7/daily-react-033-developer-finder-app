import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Developer Finder App</h1>
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
  componentDidMount () {
    fetch('https://api.github.com/users.json')
    .then(res => res.json())
    .then(json => console.log('parsed json', json))
    .catch(err => console.log('parsing failed', err))
  }

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
