import React from 'react';
import { Text,View,TouchableOpacity } from 'react-native';

const Button = ({ onPress,children}) =>{
    return(

        <TouchableOpacity onPress={onPress} style={styles.ButtonStyle}
        >
            <Text style={{color:'#fff',fontWeight:'bold'}}>{children}</Text>
        </TouchableOpacity>
    )
}
const styles ={
    ButtonStyle:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center' ,
        backgroundColor:'#4dbeff',
        height: 40,
        flex:1,
        width:null,
        borderRadius:5
    }
}

export {Button}