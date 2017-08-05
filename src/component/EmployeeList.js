import _ from 'lodash'
import React from 'react'
import {View,Text,ListView} from 'react-native'
import {connect} from 'react-redux'
import {employeeFetch } from '../action'
import ListItem from './ListItem'


class EmployeeList extends React.Component{
    componentWillMount(){
        this.props.employeeFetch();

       this.createDataSource(this.props)
    }
    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps)
    }

    createDataSource({ employees }){

        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        })

        this.dataSource = ds.cloneWithRows(employees)
    }
    renderRow(employee){
        return <ListItem employee={employee} />
    }
    render(){
        console.log(this.props)
        return(
            <View style={{flex:1}}>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                          renderRow={this.renderRow} />
            </View>
        )
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid)=>{

        return { ...val, uid}
    })

    return { employees }
}

export default connect(mapStateToProps,{ employeeFetch})(EmployeeList)