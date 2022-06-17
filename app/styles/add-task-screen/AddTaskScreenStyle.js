import { StyleSheet } from 'react-native';
import { AppColor, FontSize } from '../../utils/StyleConstants';

export default StyleSheet.create({
    heading: {
        fontSize: FontSize.Header,
        textAlign: 'center',
        marginTop: 100,
        marginBottom: 16
    },
    textInput: {
        marginBottom: 16
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16
    },
    button: {
        backgroundColor: AppColor.primary,
        width: '45%',
        marginHorizontal: 10
    },
    
})