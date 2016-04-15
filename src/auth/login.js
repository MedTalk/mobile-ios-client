import React, {
  Component,
  TouchableHighlight,
  View,
  Text,
  PropTypes } from 'react-native'

class Login extends Component {
  render() {
    return(
      <View style={this.props.style}>
        <Text>Login</Text>
        <TouchableHighlight onPress={this.props.toSignup}>
          <Text>To Signup</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

Login.propTypes = {
  style: View.propTypes.style,
  toSignup: PropTypes.func.isRequired
}

export default Login
