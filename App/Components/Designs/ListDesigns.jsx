import React, { Component } from 'react';
import { View, Text, SafeAreaView, FlatList, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import saveClient from '../../actions/clients';

class ListDesigns extends Component {
  renderClients = (client) => {

  };

  render() {
    const { clientNames, saveClientName, saveClientNameOnInputChange } = this.props;
    // console.log('XXX ', this.props);
    return (
      <SafeAreaView>
        <View style={{ height: '100%' }}>
          <View style={{ height: '10%', borderBottomWidth: 3, borderBottomColor: '#2A9601', flexDirection: 'row' }}>
            <TextInput onChangeText={(text) => saveClientNameOnInputChange(text)} style={{ color: 'black', fontWeight: 'bold', fontSize: 15, width: '85%', paddingRight: 20 }} placeholder='Client name'></TextInput>
            <View style={{ width: '15%', justifyContent: 'center', right: 5 }}>
              <Button onPress={() => saveClientName()} title="ADD" color='#2A9601'/>
            </View>
          </View>
          {(clientNames && clientNames.length === 0) ?
            (
              <View style={{ height: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                <Text style={{ color: '#2A9601', fontWeight: 'bold', fontSize: 40 }}>No Clients!</Text>
              </View>
            ) :
            (
              <View style={{ height: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                <Text style={{ color: '#2A9601', fontWeight: 'bold', fontSize: 40 }}>Clients!</Text>
              </View>
            )
          }
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({ clients }) => clients;

const mapDispatchToProps = (dispatch) => ({
  saveClient: (client) => dispatch(saveClient(client)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListDesigns);;
