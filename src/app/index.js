import React, { Component, Navigator, StyleSheet } from 'react-native'
import routes from './routes'
import Login from '../auth/login'
import Signup from '../auth/signup'

class App extends Component {
  renderScene(route, navigator) {
    switch(route.index) {
      case 0:
        return <Login style={styles.container}
                      toSignup={() => navigator.replace(routes[1])} />
      case 1:
        return <Signup style={styles.container}
                       toLogin={() => navigator.replace(routes[0])} />
      default:
        return null
    }
  }

  render() {
    return(
      <Navigator
        initialRoute={routes[0]}
        renderScene={this.renderScene}
      />
    )
  }
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
});

export default App
