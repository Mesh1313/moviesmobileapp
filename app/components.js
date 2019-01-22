import React from 'react';
import {Text, View, TouchableOpacity, Image, Linking} from 'react-native';
import globalStyles from './styles/styles';

export const BlueButton = ({text, onPress, btnStyles}) => {
    return (
        <TouchableOpacity
        style={{...globalStyles.blueButton, ...btnStyles}}
        onPress={onPress}>
            <Text style={globalStyles.blueButtonText}>
                {(text || ' ').toUpperCase()}
            </Text>
        </TouchableOpacity>
    );
}

export const GreenButton = ({text, onPress, btnStyles}) => {
    return (
        <TouchableOpacity
        style={{...globalStyles.greenButton, ...btnStyles}}
        onPress={onPress}>
            <Text style={globalStyles.greenButtonText}>
                {(text || ' ').toUpperCase()}
            </Text>
        </TouchableOpacity>
    );
}

export const RedButton = ({text, onPress, btnStyles}) => {
    return (
        <TouchableOpacity
        style={{...globalStyles.redButton, ...btnStyles}}
        onPress={onPress}>
            <Text style={globalStyles.redButtonText}>
                {(text || ' ').toUpperCase()}
            </Text>
        </TouchableOpacity>
    );
}

export const Card = ({children, onPress}) => {
    return onPress ?
    (
        <TouchableOpacity
        style={globalStyles.card}
        onPress={onPress}>
            {children}
        </TouchableOpacity>
    ) :
    (
        <View
        style={globalStyles.card}>
            {children}
        </View>
    );
};

export const FilmCard = ({filmData, isInFavourites, onAddToFavourites, onRemoveFromFavourites, onWatchTrailer}) => {
    return (
        <Card>
            <View style={{flexDirection: 'row'}}>
                <View>
                    <Image
                    style={{...globalStyles.posterImg, marginBottom: 15}}
                    source={{uri: filmData.urlPoster}}
                    resizeMode={'cover'}/>
                </View>
                <View style={globalStyles.filmInfoHolder}>
                    <Text style={globalStyles.filmCardTitle}>{filmData.title.toUpperCase()}</Text>
                    <View style={{flex: 1}}>
                        <View style={globalStyles.infoRow}>
                            <Text style={{...globalStyles.infoLabel, flex: 0.5}}>Year:</Text>
                            <Text style={{flex: 1}}>{filmData.year}</Text>
                        </View>
                        <View style={globalStyles.infoRow}>
                            <Text style={{...globalStyles.infoLabel, flex: 0.5}}>Rating:</Text>
                            <Text style={{flex: 1}}>{filmData.rating}/10</Text>
                        </View>
                        <View style={globalStyles.infoRow}>
                            <Text style={{...globalStyles.infoLabel, flex: 0.5}}>Genres:</Text>
                            <View style={globalStyles.genresList}>
                                { filmData.genres.map((genre, index)=>(
                                    <Text
                                    key={`genre-${filmData.idIMDB}-${index}`}
                                    style={globalStyles.genreLabel}>{genre}</Text>
                                )) }
                            </View>
                        </View>
                        <View style={globalStyles.infoRow}>
                            <Text style={{...globalStyles.infoLabel, flex: 0.5}}>Directors:</Text>
                            <View style={globalStyles.genresList}>
                                { filmData.directors.map((director, index)=>(
                                    <TouchableOpacity
                                    key={`director-${filmData.idIMDB}-${index}`}
                                    onPress={()=>{Linking.openURL(`https://www.imdb.com/name/${director.id}/`)}}>
                                        <Text style={globalStyles.directorLabel}>
                                            {director.name}
                                        </Text>
                                    </TouchableOpacity>
                                )) }
                            </View>
                        </View>
                        <View style={globalStyles.infoRow}>
                            <Text style={{...globalStyles.infoLabel, flex: 0.5}}>Genres:</Text>
                            <View style={globalStyles.genresList}>
                                { filmData.countries.map((country, index)=>(
                                    <Text
                                    key={`country-${filmData.idIMDB}-${index}`}
                                    style={globalStyles.genreLabel}>{country}</Text>
                                )) }
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {onWatchTrailer ?
                    <BlueButton
                        text={'Watch Trailer'}
                        onPress={onWatchTrailer}/> : null}
                {isInFavourites ? 
                    <RedButton
                        text={'Remove From Favourites'}
                        onPress={onRemoveFromFavourites}/> :
                    <GreenButton
                        text={'Add To Favourites'}
                        onPress={onAddToFavourites}/>
                }
            </View>
        </Card>
    );
}