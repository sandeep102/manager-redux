import { EMPLOYEE_UPDATE,EMPLOYEES_FETCH_SUCCESS } from '../reducer/types'
import firebase from 'firebase'
import {Actions} from 'react-native-router-flux'

export const employeeUpdate = ({prop, value}) =>{
    return{
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    }
}

export const employeeCreate  = ({name, phone, shift}) =>{
    const { currentUser } = firebase.auth()
    return(dispatch)=>{
        firebase.database().ref(`Users/${currentUser.uid}/employees`)
            .push({name, phone, shift})
            .then(()=> Actions.employeeList({type: 'reset'}))
    }
}

export const employeeFetch = () => {
    const { currentUser} = firebase.auth()
    return(dispatch) => {

        firebase.database().ref(`Users/${currentUser.uid}/employees`)
            .on('value', snap => {
                dispatch({
                    type: EMPLOYEES_FETCH_SUCCESS,
                    payload: snap.val()
                })
            })

        // firebase.database().ref(`Users/${currentUser.uid}/employees`)
        //     .on('value', snapshot => {
        //         dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() })
        //     })
    }
}