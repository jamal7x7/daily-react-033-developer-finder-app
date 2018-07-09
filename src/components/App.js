import React, { Component } from 'react'
import '../styles/App.css'

const Header = () => (
  <header className='App-header'>
    <h1 className='App-title'>Developer Finder App</h1>
  </header>
)

const Main = (props) => (
  <div className=' artboard ' >

    repos={props.repos}

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

  state = {
    repos: 0
  }

  componentDidMount () {
    fetch('https://api.github.com/users/jamal7x7')
    .then(res => res.json())
    .then(json => this.addData(json))
    .catch(err => console.log('parsing failed', err))
  }

  addData = json => {
    this.setState( () => ({ 
      repos: json.public_repos
    }))
  }

  render () {
    return (
      <div
        className='App-container'>

        <Menu

        />
        <Main
          repos={this.state.repos}
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
