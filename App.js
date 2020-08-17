import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  Button,
  FlatList,
} from 'react-native';

import Home from './App/Components/Home/HomeScreen.jsx';
import Profile from './App/Components/Profile/ProfileScreen.jsx';
import Login from './App/Components/Authentication/LoginScreen.jsx';
import SampleScreen from './App/Components/Designs/SampleScreen.jsx';
import ListDesigns from './App/Components/Designs/ListDesigns.jsx';
import Counter from './App/Components/Counter/Counter.jsx';

const Stack = createStackNavigator();

class HelloWorldApp extends Component {
  state = {
    status: '',
    loginName: '',
    loginPassword: '',
    usersName: '',
    userList: [],
    clientName: '',
  };

  renderUsersComponent = () => {
    const { userList, usersName } = this.state;
    return (
      <View>
        <ScrollView>
          <View>
            <Text style={styles.textStyle}>Hello, world!</Text>
          </View>
          <View>
            <Image
              source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
              }}
              style={styles.imageStyle}
            />
          </View>
          <View>
            <TextInput
              value={usersName}
              onChangeText={(text) => {
                this.setState({ usersName: text });
              }}
              style={styles.inputStyle}
            />
            <Button
              onPress={this.saveUserName}
              style={styles.buttonStyle}
              title="SAVE"
            />
          </View>
        </ScrollView>
        <View>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={userList}
            renderItem={({ item }) => (
              <View style={styles.singleItemStyle}>
                <Text style={styles.textStyle}>{item}</Text>
              </View>
            )}
          />
        </View>
      </View>
    );
  };

  renderOtherComponents = () => {
    return (
      <View style={{ height: '100%' }}>
        <View style={{ height: '25%', backgroundColor: '#FB6C6C' }} />
        <View style={{ height: '25%', backgroundColor: '#79DE74' }} />
        <View style={{ height: '25%', backgroundColor: '#817FFF' }} />
        <View style={{ height: '25%', backgroundColor: '#D7D55F' }} />
      </View>
    );
  };

  renderSimpleListComponent = () => {
    return (
      <View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={[
            'HAMZA',
            'SAAD',
            'AYUB',
            'DADA',
            'BABA',
            'BABA',
            'BABA',
            'BABA',
            'BABA',
            'BABA',
            'BABA',
            'BABA',
            'BABA',
            'BABA',
            'BABA',
            'BABA',
            'BABA',
            'BABA',
            'BABA',
            'BABA',
            'BABA',
          ]}
          renderItem={({ item }) => (
            <View style={styles.singleItemStyle}>
              <Text style={styles.textStyle}>{item}</Text>
            </View>
          )}
        />
      </View>
    );
  };

  saveClientNameOnInputChange = (text) => {
    this.setState({
      clientName: text,
    });
  };

  saveUserName = () => {
    const { usersName, userList } = this.state;
    userList.push(usersName);
    this.setState({
      usersName: '',
      userList,
    });
  };

  setStatusAsRegistered = () => {
    this.setState({
      status: 'Registered',
    });
  };

  saveLoginName = (loginName) => {
    this.setState({
      loginName,
    });
  };

  saveLoginPassword = (loginPassword) => {
    this.setState({
      loginPassword,
    });
  };

  logOut = () => {
    this.setState({
      loginName: '',
      loginPassword: '',
      status: '',
    });
  };

  saveClientName = () => {
    const { clientName } = this.state;
    const { saveClient } = this.props;
    saveClient(clientName);
  };

  render() {
    const { status, loginName, loginPassword } = this.state;
    const { clientNames } = this.props;
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {status === 'Registered' ? (
            <>
              <Stack.Screen name="ListDesigns" component={ListDesigns} />
              <Stack.Screen name="counter" component={Counter} />
              <Stack.Screen name="sampleDesign" component={SampleScreen} />
              <Stack.Screen options={{ title: 'Clients' }} name="ClientsList">
                {(props) => (
                  <ListDesigns
                    {...props}
                    saveClientNameOnInputChange={
                      this.saveClientNameOnInputChange
                    }
                    clientNames={clientNames}
                    saveClientName={this.saveClientName}
                    loginName={loginName}
                    logout={this.logOut}
                  />
                )}
              </Stack.Screen>
              <Stack.Screen options={{ title: 'Profile' }} name="Profile">
                {(props) => (
                  <Profile
                    {...props}
                    loginName={loginName}
                    logout={this.logOut}
                  />
                )}
              </Stack.Screen>
              <Stack.Screen options={{ title: 'Welcome' }} name="Home">
                {(props) => (
                  <Home {...props} loginName={loginName} logout={this.logOut} />
                )}
              </Stack.Screen>
            </>
          ) : (
            <Stack.Screen options={{ title: 'Login to Continue' }} name="Login">
              {(props) => (
                <Login
                  {...props}
                  saveLoginName={this.saveLoginName}
                  saveLoginPassword={this.saveLoginPassword}
                  setStatusAsRegistered={this.setStatusAsRegistered}
                  loginName={loginName}
                  loginPassword={loginPassword}
                />
              )}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 30,
  },
  singleItemStyle: {
    alignSelf: 'center',
    marginTop: 10,
  },
  textSecondStyle: {
    marginTop: 20,
    alignSelf: 'center',
  },
  textStyle: {
    alignSelf: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  inputStyle: {
    paddingLeft: 20,
    borderRadius: 15,
    alignSelf: 'center',
    width: '60%',
    height: 45,
    borderColor: 'gray',
    borderWidth: 2,
  },
  imageStyle: {
    alignSelf: 'center',
    marginTop: 20,
    width: 200,
    height: 200,
  },
});

export default HelloWorldApp;
