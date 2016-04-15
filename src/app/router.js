import React, { Component, PropTypes, StyleSheet } from 'react-native'
import routes from './routes'
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    flex: 1,
    padding: 4,
    margin: 4,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#2c45ec',
    backgroundColor: '#2c45ec'
  },
  buttonText: {
    color: '#ffffff'
  },
  input: {
    height: 36,
    padding: 4,
    margin: 5,
    textAlign: 'center',
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  }
});

export default Router
