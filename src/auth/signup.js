import React, {
  Component,
  View,
  TouchableHighlight,
  Text,
  PropTypes } from 'react-native'

class Signup extends Component {
  render() {
    return(
      <View style={this.props.style}>
        <Text>Signup</Text>
        <TouchableHighlight onPress={this.props.toLogin}>
          <Text>To Login</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

Signup.propTypes = {
  style: View.propTypes.style,
  toLogin: PropTypes.func.isRequired
}

export default Signup
