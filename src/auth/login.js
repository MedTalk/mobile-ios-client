import React, {
  Component,
  TouchableHighlight,
  View,
  Text,
  PropTypes } from 'react-native'

class Login extends Component {
  render() {
    const { styles } = this.props
    return(
      <View style={styles.container}>
        <Text>Login</Text>
        <TouchableHighlight onPress={this.props.toSignup}>
          <Text>To Signup</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

Login.propTypes = {
  styles: PropTypes.object,
  toSignup: PropTypes.func.isRequired
}

export default Login
