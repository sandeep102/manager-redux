import React from 'react'
import {View,Text,StyleSheet,Button,Image,TouchableOpacity} from 'react-native'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducer from './reducer'
//import LoginForm  from './component/LoginForm'
//import { DrawerNavigator } from 'react-navigation';
import {Header} from './component/common'
import Router from './Router'
//
class MainApp extends React.Component{
    // static navigationOptions = {
    //     drawerLabel: 'Login',
    //

    // };

    componentWillMount(){
        var config = {
            apiKey: 'AIzaSyC2FTVDb1ByfbfVu9mbmC6FCzJlbZO61n0',
            authDomain: 'manager-2b494.firebaseapp.com',
            databaseURL: 'https://manager-2b494.firebaseio.com',
            projectId: 'manager-2b494',
            storageBucket: 'manager-2b494.appspot.com',
            messagingSenderId: '442233141912'
        };
        firebase.initializeApp(config);
    }
    render(){
        const store = createStore(reducer,{},applyMiddleware(ReduxThunk))

        return(
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}
//
// class MyHomeScreen extends React.Component {
//     static navigationOptions = {
//         drawerLabel: 'Home',
//
//     };
//
//
//     render() {
//         return (
//             <View>
//                 <View style={styles.taskBar}>
//
//                     <View style={styles.header}>
//                         <TouchableOpacity
//                             style={{justifyContent: 'flex-start'}}
//                         onPress={()=> this.openDrawer()}
//                         >
//                             <Image
//                                 style={{ width: 40, height: 40}}
//                                 source={require('./list.png')}
//                             />
//
//                         </TouchableOpacity>
//                             <View style={styles.headerTitle}><Text >Home</Text></View>
//                     </View>
//                     <Button
//                         onPress={() => this.props.navigation.navigate('Notifications')}
//                         title="Go to notifications"
//                     />
//                 </View>
//
//             </View>
//         );
//     }
//     openDrawer(){
//         this.props.navigation.navigate('DrawerOpen');
//     }
// }
//
// class MyNotificationsScreen extends React.Component {
//     static navigationOptions = {
//         drawerLabel: 'Notifications',
//
//     };
//
//     render() {
//         return (
//         <View>
//
//             <Button
//                 onPress={() => this.props.navigation.goBack()}
//                 title="Go back home"
//             />
//         </View>
//
//         );
//     }
// }
// const App = DrawerNavigator({
//     Login:{
//         screen: MainApp,
//     },
//     Home: {
//         screen: MyHomeScreen,
//     },
//     Notifications: {
//         screen: MyNotificationsScreen,
//     },
// });
const styles = StyleSheet.create({
    taskBar:{
        backgroundColor: '#e67300',
    },
    header:{
        flexDirection: 'row',
        height: 45,
        backgroundColor: '#ff8000',
        marginTop: 20,
        alignItems: 'center'
    },
    headerTitle:{
        justifyContent: 'center',
        alignItems: 'center',

    },
    textStyle:{
        color: '#ffffff',
        fontWeight: 'bold',
        height: 45,
    }
})
export default MainApp