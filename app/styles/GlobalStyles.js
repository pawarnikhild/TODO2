import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16
    },
    scrollViewContentContainer: {
        flex: 1,
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    scrollViewContentContainerAlt: {
        flexGrow: 1,
        justifyContent: 'space-between',

    },
});