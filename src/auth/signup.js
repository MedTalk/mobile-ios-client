import React, {
  Component,
  View,
  TouchableHighlight,
  Text,
  TextInput,
  PropTypes } from 'react-native'

class Signup extends Component {
  render() {
    const { styles } = this.props
    return(
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="name" />
        <TextInput style={styles.input} placeholder="email" />
        <TextInput style={styles.input} placeholder="password" />
        <View style={{flexDirection: 'row'}}>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
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
