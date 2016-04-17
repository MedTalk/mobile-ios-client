import React, {
  Component,
  TouchableHighlight,
  View,
  Text,
  TextInput,
  PropTypes } from 'react-native'
import { POST } from '../networks/base'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  login() {
    const { email, password } = this.state
    const credential = { email, password }
    const success = response => {
      const AUTHORIZATION = response.headers.map.authorization[0]
      console.log(AUTHORIZATION)
    }
    const failure = () => console.warn("Login Error")
    POST("login", credential).then(response => response.ok ? success(response) : failure())
  }

  render() {
    const { styles } = this.props
    return(
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="email"
                                        keyboardType="email-address"
                                        value={this.state.email}
                                        onChangeText={email => this.setState({email})} />
        <TextInput style={styles.input} placeholder="password"
                                        secureTextEntry
                                        value={this.state.password}
                                        onChangeText={password => this.setState({password})} />
        <View style={{flexDirection: 'row'}}>
          <TouchableHighlight style={styles.button} onPress={this.login.bind(this)}>
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
  toSignup: PropTypes.func.isRequired,
  toWelcome: PropTypes.func.isRequired
}

export default Login
