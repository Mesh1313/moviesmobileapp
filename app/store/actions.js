import { AsyncStorage } from "react-native";

const storeKey = '@MySuperStore';
const favouritefilmsArrKey = 'favourites';

const filmIsAlreadyAdded = (film, collection) => {
    return collection.filter(f => (f.idIMDB === film.idIMDB)).length > 0;
};

export const saveToStore = async ({key, data}) => (AsyncStorage.setItem(`${storeKey}:${key}`, JSON.stringify(data)));

export const getFromStore = async ({key}) => (AsyncStorage.getItem(`${storeKey}:${key}`).then((data) => (JSON.parse(data))));

export const saveFilmToStore = async ({film}) => {
    let favouritesFromStore = await getFromStore({key: favouritefilmsArrKey});
    let favourites = favouritesFromStore || [];

    if(!filmIsAlreadyAdded(film, favourites)) {
        favourites.unshift(film);
        return saveToStore({key: favouritefilmsArrKey, data: favourites});
    }
};

export const removeFilmFromStore = async ({film}) => {
    let favouritesFromStore = await getFromStore({key: favouritefilmsArrKey});
    let newFavouritesArr = favouritesFromStore.filter(f => (film.idIMDB !== f.idIMDB));

    return saveToStore({key: favouritefilmsArrKey, data: newFavouritesArr});
}

export const getFavouriteMoviesFromStorage = async () => (getFromStore({key: favouritefilmsArrKey}));