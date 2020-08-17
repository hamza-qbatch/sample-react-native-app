import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import { increment, decrement } from '../../actions/counter';

class Counter extends Component {
    render() {
        const { counter } = this.props;
        return (
            <View style={{ height: '100%' }}>
                <View style={{ height: '25%', backgroundColor: '#FB6C6C' }}>
                    <Text>Counter App with counter value {counter}</Text>
                    <Button onPress={() => this.props.increment()} title='INCREASE'></Button>
                    <Button onPress={() => this.props.decrement()} title='DECREASE'></Button>
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ counter }) => counter;
const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
