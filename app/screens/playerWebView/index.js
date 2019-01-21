import React, {Component} from 'react';
import {Text, View, WebView, Dimensions} from 'react-native';
import globalStyles from '../../styles/styles';

export default class PlayerWebView extends Component {
    constructor() {
        super();
        this.state = {
            videoLink: null
        }
    }

    componentWillMount() {
        const film = this.props.navigation.getParam('film')
        const videoPlayerLink = `https://www.imdb.com/_json/video/${film.idIMDB}`;
        fetch(videoPlayerLink)
        .then((response) => (response.json()))
        .then((parsed) => {
            this.setState({videoLink: `https://www.imdb.com/title/${film.idIMDB}/videoplayer/${parsed.playlists[Object.keys(parsed.playlists)[0]].listItems[0].videoId}`})
        })
    }

    static navigationOptions = {
        title: 'WATCH TRAILER'
    }

    render() {
        return (
            <View style={globalStyles.container}>
                <WebView
                source={{uri: this.state.videoLink}}/>
            </View>
        )
    }
}