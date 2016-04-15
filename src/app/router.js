import React, { Component, PropTypes, StyleSheet } from 'react-native'
import routes from './routes'
import styles from '../assets/styles'
import Login from '../auth/login'
import Signup from '../auth/signup'

class Router extends Component {
  render() {
    const { route, navigator } = this.props
    switch(route.index) {
      case 0:
        return <Login styles={styles}
                      toSignup={() => navigator.replace(routes[1])} />
      case 1:
        return <Signup styles={styles}
                       toLogin={() => navigator.replace(routes[0])} />
      default:
        return null
    }
  }
}

Router.propTypes = {
  route: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired
}

export default Router
