import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    flex: 1,
    padding: 8,
    margin: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#2c45ec',
    backgroundColor: '#2c45ec'
  },
  buttonText: {
    color: '#ffffff'
  },
  input: {
    height: 36,
    padding: 4,
    margin: 5,
    textAlign: 'center',
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  }
});

export default styles
