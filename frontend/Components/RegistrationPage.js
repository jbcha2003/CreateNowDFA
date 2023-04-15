import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { 
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Touchable,
} from 'react-native';


//notes -

const Stack = createStackNavigator();

function Question ({ navigation }) {
  return (
    <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('StudentRegistration')}>
          <Text>
            Organization
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>
            Student
          </Text>
        </TouchableOpacity>
    </View>
  )

}

function StudentRegistration () {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleRegisterPress = () => {
    //go to registration page
    alert('working')

  }

  const handleSignInPress = () => {
    //check if email and password valid
    if (!userEmail ) {
      alert('Please enter a valid email')
    }
    else if (!userPassword) {
      alert('Please enter a valid password')
    }
  }
  return (
  <View style={styles.container}>
    <KeyboardAvoidingView enabled>
      <Text style={styles.title}>
        Create Account
      </Text>
      <Text style={styles.subtitle}>
        Login below or create an account
      </Text>
      <Text style={styles.subTextStyle}>
        Email
      </Text>
      <TextInput style={styles.input} secureTextEntry={false}/>
      <Text style={styles.subTextStyle}>
        Password
      </Text>
      <TextInput style={styles.input} secureTextEntry={true}/>
      <TouchableOpacity style={styles.button} onPress={handleSignInPress}>
        <Text style={styles.buttonText}>
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.registerButton}>
        <Text style = {styles.registerTextStyle} onPress={handleRegisterPress}>
          Create new account
        </Text>
      </TouchableOpacity>
      
    </KeyboardAvoidingView>
  </View>
)}

function orgRegistration () {

}

export default function RegistrationPage() {
    // <Stack.Navigator>
    //   <Stack.Screen name='Question' component={Question}/>
    //   <Stack.Screen name='StudentRegistration' component={StudentRegistration}/>
    // </Stack.Navigator>
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleRegisterPress = () => {
    //go to registration page
    alert('working')

  }

  const handleSignInPress = () => {
    //check if email and password valid
    if (!userEmail ) {
      alert('Please enter a valid email')
    }
    else if (!userPassword) {
      alert('Please enter a valid password')
    }
  }
  return (
  <View style={styles.container}>
    <KeyboardAvoidingView enabled>
      <Text style={styles.title}>
        Create Account
      </Text>
      <Text style={styles.subtitle}>
        Login below or create an account
      </Text>
      <Text style={styles.subTextStyle}>
        Email
      </Text>
      <TextInput style={styles.input} secureTextEntry={false}/>
      <Text style={styles.subTextStyle}>
        Password
      </Text>
      <TextInput style={styles.input} secureTextEntry={true}/>
      <TouchableOpacity style={styles.button} onPress={handleSignInPress}>
        <Text style={styles.buttonText}>
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.registerButton}>
        <Text style = {styles.registerTextStyle} onPress={handleRegisterPress}>
          Create new account
        </Text>
      </TouchableOpacity>
      
    </KeyboardAvoidingView>
  </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize:40,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    marginTop: 20
  },
  subtitle: {
    marginBottom: 20,
  },
  subTextStyle: {
    marginTop: 20,
    marginBottom: 10
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    height: 40,
    width: 300,

  },
  buttonText: {
    color: 'white',
  },
  button: {
    borderWidth: 1,
    backgroundColor: '#6675de',
    borderColor: '#6675de',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    top: 20,
  },
  registerTextStyle: {
    marginTop: 30,
    textAlign: 'center',
    color: 'gray',
  },
  registerButton: {
    padding: 0,
    borderRadius: 0,
    borderWidth: 0,
    borderHeight: 0
  }
})