import React, { Component, View, Text } from 'react-native'

class Welcome extends Component {
  render() {
    const { styles } = this.props
    return(
      <View style={styles.container}>
        <Text>Welcome</Text>
      </View>
    )
  }
}

export default Welcome
