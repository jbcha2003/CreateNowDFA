//MYCODESTART

// import React, {useState} from 'react';
// import { 
//   TouchableOpacity,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   KeyboardAvoidingView,
// } from 'react-native';


// //notes -
// // add handler for when user types input into texboxes
// // add handler for password too
// //add gradient background
// // use stacks for nav


// export default function LoginPage() {
//   const [userEmail, setUserEmail] = useState('');
//   const [userPassword, setUserPassword] = useState('');

//   const handleSignInPress = () => {
//     //check if email and password valid
//     if (!userEmail ) {
//       alert('Please enter a valid email')
//     }
//     else if (!userPassword) {
//       alert('Please enter a valid password')
//     }
//   }

//   const handleRegisterPress = () => {
//     //go to registration page
//     alert('working')

//   }

//   return (
//   <View style={styles.container}>
//     <KeyboardAvoidingView enabled>
//       <Text style={styles.title}>
//         Welcome!
//       </Text>
//       <Text style={styles.subtitle}>
//         Login below or create an account
//       </Text>
//       <Text style={styles.subTextStyle}>
//         Email
//       </Text>
//       <TextInput style={styles.input} secureTextEntry={false} />
//       <Text style={styles.subTextStyle}>
//         Password
//       </Text>
//       <TextInput style={styles.input} secureTextEntry={true}/>
//       <TouchableOpacity style={styles.button} onPress={handleSignInPress}>
//         <Text style={styles.buttonText}>
//           Sign In
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity style = {styles.registerButton}>
//         <Text style = {styles.registerTextStyle} onPress={handleRegisterPress}>
//           Create new account
//         </Text>
//       </TouchableOpacity>
      
//     </KeyboardAvoidingView>
//   </View>
// )}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   title: {
//     fontSize:40,
//     fontWeight: 'bold',
//     color: 'black',
//     textAlign: 'left',
//     marginTop: 20
//   },
//   subtitle: {
//     marginBottom: 20,
//   },
//   subTextStyle: {
//     marginTop: 20,
//     marginBottom: 10
//   },
//   input: {
//     backgroundColor: 'white',
//     color: 'black',
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderRadius: 5,
//     height: 40,
//     width: 300,

//   },
//   buttonText: {
//     color: 'white',
//   },
//   button: {
//     borderWidth: 1,
//     backgroundColor: '#6675de',
//     borderColor: '#6675de',
//     alignItems: 'center',
//     padding: 10,
//     borderRadius: 5,
//     top: 20,
//   },
//   registerTextStyle: {
//     marginTop: 30,
//     textAlign: 'center',
//     color: 'gray',
//   },
//   registerButton: {
//     padding: 0,
//     borderRadius: 0,
//     borderWidth: 0,
//     borderHeight: 0
//   }
// })

//MYCODEEND

//EXAMPLECODESTART
import React, { useState } from 'react';
import { ImageBackground, View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';

const API_URL='http://localhost:5000';

const AuthScreen = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const onChangeHandler = () => {
        setIsLogin(!isLogin);
        setMessage('');
    };

    const onLoggedIn = token => {
        fetch(`${API_URL}/private`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, 
            },
        })
        .then(async res => { 
            try {
                const jsonRes = await res.json();
                if (res.status === 200) {
                    setMessage(jsonRes.message);
                }
            } catch (err) {
                console.log(err);
            };
        })
        .catch(err => {
            console.log(err);
        });
    }

    const onSubmitHandler = () => {
        const payload = {
            email,
            name,
            password,
        };
        // fetch(`${API_URL}/${isLogin ? 'login' : 'signup'}`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     // body: JSON.stringify(payload),
        //     body: "{}",
        // })
        fetch("http://localhost:5000/public")
        .then(async res => { 
            try {
                console.log(res);
                const jsonRes = await res.json();
                if (res.status !== 200) {
                    setIsError(true);
                    setMessage(jsonRes.message);
                } else {
                    onLoggedIn(jsonRes.token);
                    setIsError(false);
                    setMessage(jsonRes.message);
                }
            } catch (err) {
                console.log(err);
            };
        })
        .catch(err => {
            console.log(err);
        });
    };

    const getMessage = () => {
        const status = isError ? `Error: ` : `Success: `;
        return status + message;
    }

    return (
        <ImageBackground style={styles.image}>
            <View style={styles.card}>
                <Text style={styles.heading}>{isLogin ? 'Login' : 'Sign Up'}</Text>
                <View style={styles.form}>
                    <View style={styles.inputs}>
                        <TextInput style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={setEmail}></TextInput>
                        {!isLogin && <TextInput style={styles.input} placeholder="Name" onChangeText={setName}></TextInput>}
                        <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" onChangeText={setPassword}></TextInput>
                        <Text style={[styles.message, {color: isError ? 'red' : 'green'}]}>{message ? getMessage() : null}</Text>
                        <TouchableOpacity style={styles.button} onPress={onSubmitHandler}>
                            <Text style={styles.buttonText}>{isLogin ? 'Log In' : 'Sign Up'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonAlt} onPress={onChangeHandler}>
                            <Text style={styles.buttonAltText}>{isLogin ? 'Sign Up' : 'Log In'}</Text>
                        </TouchableOpacity>
                    </View>    
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        color: 'orange'
    },  
    card: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: '80%',
        marginTop: '40%',
        borderRadius: 20,
        maxHeight: 380,
        paddingBottom: '30%',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginTop: '5%',
        marginBottom: '30%',
        color: 'black',
    },
    form: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: '5%',
    },
    inputs: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10%',
    },  
    input: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingTop: 10,
        fontSize: 16, 
        minHeight: 40,
    },
    button: {
        width: '80%',
        backgroundColor: 'black',
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '400'
    },
    buttonAlt: {
        width: '80%',
        borderWidth: 1,
        height: 40,
        borderRadius: 50,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonAltText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
    },
    message: {
        fontSize: 16,
        marginVertical: '5%',
    },
});

export default AuthScreen;

//EXAMPLECODEEND
