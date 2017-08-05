import React from 'react'
import {Text,TouchableWithoutFeedback,View} from 'react-native'
import {CardSection} from './common'
import {Actions} from 'react-native-router-flux'

class ListItem extends React.Component{

    renderEditForm(){
        Actions.employeeEdit({employee: this.props.employee})
    }

    render(){
        const {name} = this.props.employee

        return(
            <TouchableWithoutFeedback onPress={this.renderEditForm.bind(this)}
            ><View>
                <CardSection>
                    <Text>{name}</Text>
                </CardSection>
            </View>

            </TouchableWithoutFeedback>

        )
    }
}
export default ListItem