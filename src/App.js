import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'
import ConfigurationContext from './context/ConfigurationContext'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showRightNavbar: true,
    showLeftNavbar: true,
  }

  onToggleShowContent = text => {
    if (text) {
      this.setState({showContent: true})
    } else {
      this.setState({showContent: false})
    }
  }

  onToggleShowLeftNavbar = text => {
    if (text) {
      this.setState({showLeftNavbar: true})
    } else {
      this.setState({showLeftNavbar: false})
    }
  }

  onToggleShowRightNavbar = text => {
    if (text) {
      this.setState({showRightNavbar: true})
    } else {
      this.setState({showRightNavbar: false})
    }
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <div>
        <ConfigurationContext.Provider
          value={{
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent: this.onToggleShowContent,
            onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
            onToggleShowRightNavbar: this.onToggleShowRightNavbar,
          }}
        >
          <ConfigurationController />
          <Layout />
        </ConfigurationContext.Provider>
      </div>
    )
  }
}

export default App
