import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends Component {
    render() {
        const { navigation, loginName, logout } = this.props;
        return (
            <View style={{ height: '100%' }}>
                <View style={{ height: '25%', backgroundColor: '#FB6C6C' }}>
                    <Text>Home Screen</Text>
                </View>
                <View style={{ height: '25%', backgroundColor: '#79DE74' }}>
                    <Text>First Screen for User: {loginName}</Text>
                </View>
                <View style={{ height: '25%', backgroundColor: '#817FFF' }}>
                    <Text>1st</Text>
                </View>
                <View style={{ height: '25%', backgroundColor: '#D7D55F' }}>
                    <Button
                        onPress={() => navigation.navigate('Profile')}
                        title="View Profile"
                    />
                    <Button
                        onPress={() => logout()}
                        title="LOGOUT"
                    />
                </View>
            </View>
        );
    }
}

export default HomeScreen;
