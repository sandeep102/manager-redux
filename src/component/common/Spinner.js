import React from  'react'
import {View,ActivityIndicator,Dimensions} from 'react-native'

const Spinner = ({ size}) => {
    return(
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    )
}

const styles ={
    spinnerStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width:Dimensions.get('screen').width,
        height:Dimensions.get('screen').height-120,
    }
}
export { Spinner }