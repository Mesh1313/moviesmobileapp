import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import globalStyles from '../../styles/styles';
import {FilmCard} from '../../components';
import constants from '../../constants';
import {saveFilmToStore, removeFilmFromStore} from '../../store/actions';

class TopFilms extends Component {
    constructor() {
        super();
        this.onAddToFavourites = this.onAddToFavourites.bind(this);
        this.checkIsInFavourites = this.checkIsInFavourites.bind(this);
        this.onRemoveFromFavourites = this.onRemoveFromFavourites.bind(this);
    }

    static navigationOptions = {
        title: 'TOP FILMS'
    }

    onAddToFavourites({film}) {
        return () => {
            this.props.addToFavourites({film});
        }
    }

    onRemoveFromFavourites({film}) {
        return () => {
            this.props.removeFromFavourites({film});
        }
    }

    onWatchTrailer({film}) {
        return () => {
            this.props.navigation.navigate('PlayerWebView', {film});
        }
    }

    checkIsInFavourites({film}) {
        const favourite = this.props.favourites.favourites.filter((favFilm) => (film.idIMDB === favFilm.idIMDB));
        return favourite.length > 0;
    }
    
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{flex: 1}}>
                    {
                        this.props.movies.movies.map((film) => (
                            <FilmCard
                            key={film.idIMDB}
                            filmData={film}
                            onAddToFavourites={this.onAddToFavourites({film})}
                            onRemoveFromFavourites={this.onRemoveFromFavourites({film})}
                            isInFavourites={this.checkIsInFavourites({film})}
                            onWatchTrailer={this.onWatchTrailer({film})}/>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}
  
const styles = StyleSheet.create({
    container: globalStyles.container
});

export default connect(
    state => ({
        movies: state.movies,
        favourites: state.favourites
    }),
    dispatch => {
        return {
            addToFavourites: ({film}) => {
                saveFilmToStore({film}).then(() => {
                    dispatch({type: constants.ADD_TO_FAVS, payload: film});
                })
            },
            removeFromFavourites: ({film}) => {
                removeFilmFromStore({film}).then(() => {
                    dispatch({type: constants.REMOVE_FROM_FAVS, payload: film});
                });
            }
        }
    }
)(TopFilms);