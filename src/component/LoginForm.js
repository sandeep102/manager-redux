import React from 'react';
import {Text,View} from 'react-native';
import firebase from 'firebase'
import { emailChanged,passwordChanged,loginUser } from '../action'
import {connect} from 'react-redux'

import { Header,Button,Card,CardSection,Input, Spinner } from './common'


class LoginForm extends React.Component{

    onEmailChanged(text){
        this.props.emailChanged(text)
    }
    onPasswordChanged(text){
        this.props.passwordChanged(text)
    }
    onButtonPress(){
        const {email,password} = this.props

        this.props.loginUser({email,password})
    }

    renderSpineer(){
        if(this.props.loading){
            return <Spinner></Spinner>
        }
    }

    render(){
        return(
            <View>

                <Card>

                    <CardSection>
                        <Input
                            label= "Email"
                            placeholder="user@gmail.com"
                            secureTextEntry={false}
                            onChangeText={this.onEmailChanged.bind(this)}
                            value={this.props.email}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label= "Password"
                            placeholder="******"
                            secureTextEntry={true}
                            onChangeText={this.onPasswordChanged.bind(this)}
                            value={this.props.password}
                        />
                    </CardSection>
                    <Text style={{textAlign: 'center'}}>{this.props.error}</Text>
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
                    </CardSection>

                </Card>
                   {this.renderSpineer()}
            </View>

        )
    }
}

const mapStateToProps = ({ auth }) =>{
    const { email,password,error,loading} = auth

    return{ email, password,error,loading }
    }


export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginForm)