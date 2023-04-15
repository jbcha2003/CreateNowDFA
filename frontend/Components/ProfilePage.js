import React, {useState} from 'react';
import { 
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Image
} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';


export default function ProfilePage() {
  function progressCard () {
    return (
    <CircularProgress 
      //placeholder for user hours
      value ={12}
      radius = {70}
      title = {'HOURS'}
      titleColor = {'white'}
      titleStyle = {{fontWeight: 'bold'}}
      duration = {10}
      //make maxValue based on individual goal maybe?
      maxValue = {24}
      progressValueColor = 'white'
      activeStrokeColor={'#52BE80'}
      inActiveStrokeColor={'#D4EFDF'}
      inActiveStrokeOpacity={0.7}
      //style={styles.circularProgress}
    />
  )}

  return (
    <View style={styles.pageContainer}>
      <View style={styles.container}>
        <Image
          style={styles.profileImage}
          source={require('./memoji.jpeg')}
        />
        <View style={styles.subContainer}>
          <Text style={styles.name}>
            Jimmy Cha
          </Text>
          <Text style={styles.pronouns}>
            He/Him
          </Text>
        </View>
      </View>
      <CircularProgress 
        //placeholder for user hours
        value ={12}
        radius = {70}
        title = {'HOURS'}
        titleColor = {'white'}
        titleStyle = {{fontWeight: 'bold'}}
        duration = {10}
        //make maxValue based on individual goal maybe?
        maxValue = {24}
        progressValueColor = 'white'
        activeStrokeColor={'#52BE80'}
        inActiveStrokeColor={'#D4EFDF'}
        inActiveStrokeOpacity={0.7}
        //style={styles.circularProgress}
      />
      
    </View>
)}

const styles = StyleSheet.create({
  pageContainer: {
    flexDirection: 'column',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 40,
  },
  subContainer: {
    flexDirection: 'column'
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    marginTop: 20,
  },
  pronouns: {
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 10,
    color: 'gray'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 150 / 2,
    overflow: "hidden",
    marginRight: 20,
  },
  circularProgress: {
    alignSelf: 'center',
    marginTop: 50,
  },
})

