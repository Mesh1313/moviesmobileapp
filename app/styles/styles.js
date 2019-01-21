import colors from './colors';

const globalStyles = {
    container: {
        flex: 1,
        backgroundColor: colors.mainBgColor,
        padding: 15
    },
    title: {
        color: colors.black,
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 15
    },
    blueButton: {
        alignItems: 'center',
        backgroundColor: colors.blue,
        padding: 10,
        borderRadius: 6
    },
    blueButtonText: {
        fontSize: 14,
        color: colors.white
    },
    greenButton: {
        alignItems: 'center',
        backgroundColor: colors.green,
        padding: 10,
        borderRadius: 6
    },
    greenButtonText: {
        fontSize: 14,
        color: colors.white
    },
    redButton: {
        alignItems: 'center',
        backgroundColor: colors.red,
        padding: 10,
        borderRadius: 6
    },
    redButtonText: {
        fontSize: 14,
        color: colors.white
    },
    card: {
        padding: 15,
        backgroundColor: colors.white,
        marginBottom: 15,
        borderRadius: 4
    },
    sectionText: {
        color: colors.black
    },
    posterImg: {
        width: 100,
        height: 100,
        borderRadius: 6,
        borderWidth: 1
    },
    filmInfoHolder: {
        flex: 1,
        paddingLeft: 10
    },
    filmCardTitle: {
        fontSize: 16,
        color: colors.black,
        marginBottom: 10
    },
    infoRow: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10
    },
    infoLabel: {
        color: colors.black,
        marginRight: 10
    },
    genresList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    genreLabel: {
        backgroundColor: colors.mainBgColor,
        color: colors.black,
        paddingVertical: 2,
        paddingHorizontal: 4,
        marginRight: 5,
        borderRadius: 2,
        marginBottom: 5
    },
    directorLabel: {
        color: colors.link,
        marginRight: 10,
        marginBottom: 10,
        textDecorationLine: 'underline'
    }
};

export default globalStyles;