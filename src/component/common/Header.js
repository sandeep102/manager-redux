// import libraries
import React, { Component } from 'react'
import { Text,View, StyleSheet } from 'react-native'

// create component and make them available to other part of app

const Header = (props) => {
    return (
        <View style={styles.taskBar}>
            <View style={styles.header}>
                <Text style={styles.textStyle}>{props.headerText}</Text>
            </View>
        </View>
    );

}



const styles = StyleSheet.create({
    taskBar:{
        backgroundColor: '#e67300',
    },
    header:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        backgroundColor: '#ff8000',
        marginTop: 20,

    },
    textStyle:{
        color: '#ffffff',
        fontWeight: 'bold'
    }

})

export {Header}
