import React, { Component, Navigator } from 'react-native'
import routes from './routes'
import Router from './router'

class App extends Component {
  renderScene(route, navigator) {
    return <Router route={route} navigator={navigator} />
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

export default App
