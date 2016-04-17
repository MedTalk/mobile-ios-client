import React, { Component, PropTypes, StyleSheet } from 'react-native'
import routes from './routes'
import styles from '../assets/styles'
import Login from '../auth/login'
import Signup from '../auth/signup'
import Welcome from '../main/welcome'

class Router extends Component {
  getChildContext () {
    const { route, navigator } = this.props
    return { route, navigator }
  }

  render() {
    const { route, navigator } = this.props
    switch(route.index) {
      case 1:
        return <Login styles={styles}
                      toSignup={() => navigator.replace(routes[1])}
                      toWelcome={() => navigator.replace(routes[2])} />
      case 2:
        return <Signup styles={styles}
                       toLogin={() => navigator.replace(routes[0])} />
      case 3:
        return <Welcome styles={styles} />
      default:
        // TODO: return a splash screen, which can redirect to login, or main app
        return null
    }
  }
}

Router.childContextTypes = {
  route: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired
}

Router.propTypes = {
  route: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired
}

export default Router
