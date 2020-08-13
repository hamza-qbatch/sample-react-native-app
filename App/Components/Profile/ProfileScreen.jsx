import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

class ProfileScreen extends Component {
    render() {
        const { navigation, loginName, logout } = this.props;
        return (
            <View style={{ height: '100%' }}>
                <View style={{ height: '100%', backgroundColor: '#FB6C6C' }}>
                    <Text>Profile Screen</Text>
                    <Button
                        title="View Homescreen"
                        onPress={() => (
                            <Button
                                onPress={navigation.navigate('Home')}
                                title="View Profile"
                            />
                        )}
                    />
                    <Text>{loginName}</Text>
                    <Button
                        onPress={() => logout()}
                        title="LOGOUT"
                    />
                </View>
            </View>
        );
    }
}

export default ProfileScreen;
