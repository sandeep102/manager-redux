import React from 'react'
import {Scene,Router,Actions} from 'react-native-router-flux'
import LoginForm from './component/LoginForm'
import EmployeeList from './component/EmployeeList'
import CreateEmployee from './component/CreateEmployee'
import EditEmployee from './component/EditEmployee'

const RouterComponent = () =>{
    return(
        <Router>
        <Scene key="root"  hideNavBar>
            <Scene key="auth" initial  title="Login" >
                <Scene key="login" component={LoginForm} />
            </Scene>
            <Scene key="main">
                <Scene
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                    rightTitle="Add"
                    onRight={() => Actions.employeeCreate()}
                    initial
                />
                <Scene
                    key="employeeCreate"
                    component={CreateEmployee}
                    title="Create Employee"

                />
                <Scene
                    key="employeeEdit"
                    component={EditEmployee}
                    title="Update Employee"

                />
            </Scene>
        </Scene>
        </Router>
    )
}

export default RouterComponent