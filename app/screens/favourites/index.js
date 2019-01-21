import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import globalStyles from '../../styles/styles';
import {FilmCard} from '../../components';
import constants from '../../constants';
import {removeFilmFromStore} from '../../store/actions';

class Favourites extends Component {
    constructor() {
        super();
        this.onRemoveFromFavourites = this.onRemoveFromFavourites.bind(this);
    }

    static navigationOptions = {
        title: 'FAVOURITES'
    }

    onRemoveFromFavourites({film}) {
        return () => {
            this.props.removeFromFavourites({film});
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.favourites.favourites.length > 0 ?

                    <ScrollView style={{flex: 1}}>
                    {
                        this.props.favourites.favourites.map((film) => (
                            <FilmCard
                            key={film.idIMDB}
                            filmData={film}
                            onRemoveFromFavourites={this.onRemoveFromFavourites({film})}
                            isInFavourites={true}/>
                        ))
                    }
                    </ScrollView> :
                    <Text style={{textAlign: 'center'}}>CURRENTLY THERE ARE NO FAVOURITE FILMS</Text>
                }
            </View>
        );
    }
}
  
const styles = StyleSheet.create({
    container: globalStyles.container
});

export default connect(
    state => ({
        favourites: state.favourites
    }),
    dispatch => ({
        removeFromFavourites: ({film}) => {
            removeFilmFromStore({film}).then(() => {
                dispatch({type: constants.REMOVE_FROM_FAVS, payload: film});
            });
        }
    })
)(Favourites);