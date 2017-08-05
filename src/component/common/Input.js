import React from 'react'
import {TextInput,Text,View} from 'react-native'

const Input = ({ label, value, onChangeText,placeholder,secureTextEntry }) =>{
    return(
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
                <View style={styles.inStyle}>
                    <TextInput
                        style={styles.inputStyle}
                        secureTextEntry={secureTextEntry}
                        placeholder = {placeholder}
                        autoCorrect={false}
                        value={value}
                        onChangeText={onChangeText}
                    />
                </View>



        </View>
    )
}
const styles = {
    inputStyle:{
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,

    },
    labelStyle:{
        fontSize: 18,
        paddingLeft: 5,
        flex: 1
    },
    containerStyle:{
        height: 40,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    inStyle:{
        borderBottomColor: '#4dbeff',
        borderBottomWidth: 1,
        flex:2

    }
}
export {Input}