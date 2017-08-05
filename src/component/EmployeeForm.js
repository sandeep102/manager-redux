import React from 'react'
import {View,Text,Picker} from 'react-native'
import {connect} from 'react-redux'
import {employeeUpdate} from "../action"
import {Card,CardSection,Input} from './common'


class EmployeeForm extends React.Component{

    render(){
        debugger
        console.log(this.props.name)
        return(
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Robert Brenson"
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({prop: 'name',value: text})}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="987-654-3210"
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({prop: 'phone',value: text})}
                    />
                </CardSection>

                <CardSection style={{flexDirection: 'column'}}>
                    <Text style={{fontSize:18,paddingLeft:10}}>Shift</Text>
                    <Picker
                        selectedValue={(this.props.shift) || 'Monday'}

                        onValueChange={value => this.props.employeeUpdate({prop: 'shift', value: value })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                    </Picker>
                </CardSection>
            </View>
        )
    }
}

const mapStateToProps = (state) =>{
    const {name, phone, shift} = state.employeeForm
    return{ name, phone, shift }
}
export default connect(mapStateToProps,{employeeUpdate} )(EmployeeForm)