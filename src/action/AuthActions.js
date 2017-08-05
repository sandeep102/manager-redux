import { EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER } from '../reducer/types'
import firebase from 'firebase'
import {Actions} from 'react-native-router-flux'

export const emailChanged = (text) =>{
    return{
        type: EMAIL_CHANGED,
        payload: text
    }
}
export const passwordChanged = (text) =>{
    return{
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginUser = ({email,password}) =>{
    return(dispatch)=>{
        dispatch({type: LOGIN_USER})

        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(user => loginUserSuccess(dispatch,user))
            .catch((error)=>{

            firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(user => loginUserSuccess(dispatch,user))
                .catch(error=>loginUserFailed(dispatch,error.message))
            })


    }

}
const loginUserFailed = (dispatch,error) =>{
    dispatch({  type: LOGIN_USER_FAIL,payload: error })
}

const loginUserSuccess = (dispatch,user) =>{
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    })
    Actions.main()
}