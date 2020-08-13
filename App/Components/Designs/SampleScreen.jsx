import React, { Component } from 'react';
import { View, Text, Button, FlatList, StyleSheet, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694fa0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0df-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694fda0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0fdf-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '5869jfd4a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58gfg694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

class SampleScreen extends Component {
    renderItem = ({ item }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
    render() {
        return (
          <View style={{ backgroundColor: 'grey', height: '100%'}}>
            <View style={{ height: '50%', padding: 15, borderStyle: 'solid', borderColor: 'red' }}>
              <FlatList
                style={{ height: '100%' }}
                data={data}
                renderItem={this.renderItem}
                keyExtractor={({ id }) => id}
              />
            </View>

            <ScrollView style={{ height: 100 }}>
              <View style={{ height: 120, marginBottom: 20, backgroundColor: 'brown', flexDirection: 'row' }}>
                  <View style={{ backgroundColor: 'green', flex: 11 }}>
                  </View>
                  <View style={{ backgroundColor: 'red', flex: 1 }}>
                  </View>
                  <View style={{ backgroundColor: 'blue', flex: 1 }}>
                  </View>
                  <View style={{ backgroundColor: 'yellow', flex: 1 }}>
                  </View>
              </View>

              <View style={{height: 100, flexDirection: 'row'}}>
                <View style={{width: '50%', backgroundColor: 'red'}}>
                  <Text>1</Text>
                </View>
                <View style={{width: '50%', backgroundColor: 'blue'}}>
                  <Text>2</Text>
                </View>
              </View>

              <View style={{height: 100, flexDirection: 'row', marginTop: 15}}>
                <View style={{width: '50%', backgroundColor: 'yellow'}}>
                  <Text>1</Text>
                </View>
                <View style={{width: '50%', backgroundColor: 'green'}}>
                  <Text>2</Text>
                </View>
              </View>

              <View style={{height: 100, flexDirection: 'row', marginTop: 15}}>
                <View style={{width: '50%', backgroundColor: 'black'}}>
                  <Text>1</Text>
                </View>
                <View style={{width: '50%', backgroundColor: 'purple'}}>
                  <Text>2</Text>
                </View>
              </View>
            </ScrollView>
          </View>
        );
      }
}

export default SampleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});