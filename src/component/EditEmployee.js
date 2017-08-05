import _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import EmployeeForm from './EmployeeForm'
import { employeeUpdate} from "../action"
import {Card,CardSection,Button} from "./common"

class EditEmployee extends React.Component{

    componentWillMount(){

        _.each(this.props.employee,(value,prop)=>{
            console.log(value)

            let val = "" + value

            console.log(val)

           // this.props.employeeUpdate({prop, value})
            this.props.employeeUpdate({prop, val})

        })
    }

    onButtonPress(){

    }
    render(){

        return(
            <Card>
                <EmployeeForm  />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Update</Button>
                </CardSection>
            </Card>
        )
    }
}


const mapStateToProps = (state) =>{

    const {name, phone, shift} = state.employeeForm

    return{ name, phone, shift }
}

export default connect(mapStateToProps,{employeeUpdate})(EditEmployee)