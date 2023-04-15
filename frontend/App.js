import * as React from 'react';
import { Text, View, Button, StyleSheet, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import AuthScreen from './Components/LoginPage';
import RegistrationPage from './Components/RegistrationPage';
import ProfilePage from './Components/ProfilePage';
import MapView from 'react-native-maps';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CircularProgress from 'react-native-circular-progress-indicator';




function VolunteerScreen() {
  return (
      <>
      <GreetingHeader />
      <TopTab.Navigator>
        <TopTab.Screen name="My Org" component={MyOrgScreen} />
        <TopTab.Screen name="My Events" component={MyEventsScreen} />
      </TopTab.Navigator>
      </>
  );
}

function GreetingHeader() {
  return (
    <View style={styles.greetingHeaderView}>
      <Text style={styles.greetingHeaderText}>
        Hey Sheila!
      </Text>
    </View>
  )
}

//uses mapview to show a map
//todo-add pinpoints that correspond to locations in the table and 
//show flashcard info when pressing on them/mylocation feature
function DiscoverScreen() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Map" component={MapScreen} />
      <TopTab.Screen name="List" component={ListScreen}/>
    </TopTab.Navigator>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <RegistrationPage/> */}
      {/* <AuthScreen /> */}
      {/* <ProfilePage /> */}
    </View>
  )
}

function MyOrgScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> My Org! </Text>
    </View>
  )
}

function MyEventsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> My Events! </Text>
    </View>
  )
}

function MapScreen() {
  return (
    <View>
      <MapView style={styles.map} />
    </View>
  )

}

function ListScreen() {
  return (
    <View style={{backgroundColor: 'white'}}>
      <Text style={styles.card}>
        <CardExample/>
      </Text>
      <Text style={styles.card}>
        <CardExample/>
      </Text>
      <Text style={styles.card}>
        <CardExample/>
      </Text>
    </View>
  )
}

//test just to check ui stuff
//add onclick stuff to the pressables /icons next to them
function CardExample() {
  return(
    <View>
      <Text name="EventName" style={styles.heading}>Sandwich Hangout</Text>
      <Text name="Time" style={styles.Subheading}>Timeframe</Text>
      <Text name="Location" style={styles.Subheading}>Location</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Pressable title="Volunteer" style={styles.volunteerPressable}>
          <Text style={styles.volunteerText}>
            Volunteer
          </Text>
        </Pressable>
        <Pressable title="Refer" style={styles.referPressable}>
          <Text style={styles.referText}>
            Refer
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

function Dashboard() {
  return (
  <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            //changing color of icon once pressed or just changing outline color to black like figma prototype
            if (route.name === 'Volunteer') {
              iconName = focused
                ? 'home'
                : 'home-outline';
                return <Ionicons name={iconName} size={size} color={color} />;
            } 
            else if (route.name === 'Discover') {
              iconName = "map-o"
              return <FontAwesome name={iconName} size={size} color={color} />;

            } 
            else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
              return <Ionicons name={iconName} size={size} color={color} />;

            }            
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
        >
        <Tab.Screen name="Volunteer" component={VolunteerScreen}/>
        <Tab.Screen name="Discover" component={DiscoverScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
)}

const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator()


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}>
        {/* <Stack.Screen name="LogoScreen" component={LogoScreen} /> */}
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        {/* <Stack.Screen name="DashboardScreen" component={Dashboard} /> */}

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  card: {
    backgroundColor: '#eef1f4',
    borderRadius: 4,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    alignContent: 'center',
  },
  heading: {
    color: '#657080',
    textAlign:'center',
    fontSize: 32,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    fontWeight: 'bold',

  },
  Subheading: {
    color: '#657080',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
  },
  volunteerPressable: {
    backgroundColor: '#677081',
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 5,
    marginTop: 15,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 4,
  },
  volunteerText: {
    color: '#fffffe',
    fontSize: 20,
    fontWeight: 'bold'
  },
  referPressable: {
    backgroundColor: '#ffffff',
    textAlign: 'center',
    marginRight: 10,
    marginLeft: 5,
    marginTop: 15,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 4,
  },
  referText: {
    color: '#677081',
    fontSize: 20,
    fontWeight: 'bold'
  },
  greetingHeaderView: {
    paddingVertical: 20,
    backgroundColor: "#ffffff",
  },
  greetingHeaderText: {
    color: '#677081',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 25,
  },

});

