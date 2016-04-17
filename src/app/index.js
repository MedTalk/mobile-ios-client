import React, { Component, Navigator } from 'react-native'
import { Provider } from 'react-redux'
import routes from './routes'
import Router from './router'
import store from '../store'

class App extends Component {
  renderScene(route, navigator) {
    return <Router route={route} navigator={navigator} />
  }

  render() {
    return(
      <Provider store={store}>
        <Navigator
          initialRoute={routes[0]}
          renderScene={this.renderScene}
        />
      </Provider>
    )
  }
}

export default App
