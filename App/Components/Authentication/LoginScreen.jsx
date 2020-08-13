import React, { Component } from 'react';
import {
    View,
    Button,
    TextInput
} from 'react-native';

class LoginScreen extends Component {
    render() {
        const { saveLoginName, saveLoginPassword, loginName, loginPassword, setStatusAsRegistered } = this.props;
        return (
            <View style={{ height: '100%', backgroundColor: '#79DE74' }}>
                <TextInput
                    placeholder="Name"
                    onChangeText={(text) => {
                        saveLoginName(text);
                    }}
                />
                <TextInput
                    placeholder="Password"
                    onChangeText={(text) => {
                        saveLoginPassword(text);
                    }}
                />
                <Button
                    title="LOGIN"
                    onPress={() => {
                        if (loginName === 'hamza' && loginPassword === 'abc') {
                            setStatusAsRegistered();
                        } else {
                            alert('INVALID LOGIN');
                        }
                    }}
                />
            </View>
        );
    }
}

export default LoginScreen;
