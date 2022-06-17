import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 16,
        paddingHorizontal: 16
    },
    scrollViewContentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    scrollViewContentContainerAlt: {
        flexGrow: 1,
        justifyContent: 'space-between',

    },
});