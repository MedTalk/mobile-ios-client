import React, {
  Component,
  TouchableHighlight,
  View,
  Text,
  TextInput,
  PropTypes } from 'react-native'

class Login extends Component {
  render() {
    const { styles } = this.props
    return(
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="email" />
        <TextInput style={styles.input} placeholder="password" />
        <View style={{flexDirection: 'row'}}>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </View>
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
