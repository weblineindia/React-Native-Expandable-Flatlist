// @flow
import { StyleSheet } from 'react-native';
// import { ScreenWidth, Black } from '../../../Utils/Common';
// import * as Colors from '../../../Utils/Common/Colors';

export default StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: 'white'
    },
    fullTextWrapper: {
        opacity: 0,
        position: 'absolute',
        left: 0,
        top: 0,
    },
    viewMoreText: {
        fontSize: 12, 
        fontWeight: '300', 
        color: 'rgba(1, 1, 1, 0.8)',
        right: 0,
        textAlign: "right",
        marginTop: 5,
    },
    dateView: {
        flex: 1,
        alignItems: "flex-end"
    },
});
