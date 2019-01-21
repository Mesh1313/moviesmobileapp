import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import globalStyles from '../../styles/styles';
import {Card} from '../../components';

class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={globalStyles.container}>
                <Text style={globalStyles.title}>{"My Films".toUpperCase()}</Text>
                <Card onPress={() => {this.props.navigation.navigate('TopFilms')}}>
                    <Text style={globalStyles.sectionText}>{"Top 20".toUpperCase()}</Text>
                </Card>
                <Card onPress={() => {this.props.navigation.navigate('Favourites')}}>
                    <Text style={globalStyles.sectionText}>{"Favourites".toUpperCase()}</Text>
                </Card>
                <Card onPress={() => {this.props.navigation.navigate('ByDecades')}}>
                    <Text style={globalStyles.sectionText}>{"By Decades".toUpperCase()}</Text>
                </Card>
            </View>
        );
    }
}

export default connect(state => (state))(HomeScreen);