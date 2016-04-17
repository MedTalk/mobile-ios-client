import React, {
  Component,
  View,
  TouchableHighlight,
  Text,
  TextInput,
  PropTypes } from 'react-native'
import { POST } from '../networks/base'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  signup(roleID: number) {
    const { name, email, password } = this.state
    const signupObj = { name, email, password, roleID }
    const { toLogin } = this.props
    const success = toLogin
    const failure = () => console.warn("Sign Up Error")
    POST("signup", signupObj).then(response => response.ok ? success() : failure())
  }

  render() {
    const { styles } = this.props
    return(
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="name"
                                        autoCapitalize="words"
                                        value={this.state.name}
                                        onChangeText={name => this.setState({name})} />
        <TextInput style={styles.input} placeholder="email"
                                        keyboardType="email-address"
                                        value={this.state.email}
                                        onChangeText={email => this.setState({email})} />
        <TextInput style={styles.input} placeholder="password"
                                        secureTextEntry
                                        value={this.state.password}
                                        onChangeText={password => this.setState({password})} />
        <View style={{flexDirection: 'row'}}>
          <TouchableHighlight style={styles.button} onPress={this.signup.bind(this, 1)}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.signup.bind(this, 2)}>
            <Text style={styles.buttonText}>Signup as Doctor</Text>
          </TouchableHighlight>
        </View>

        <TouchableHighlight onPress={this.props.toLogin}>
          <Text>To Login</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

Signup.propTypes = {
  styles: PropTypes.object,
  toLogin: PropTypes.func.isRequired
}

export default Signup
