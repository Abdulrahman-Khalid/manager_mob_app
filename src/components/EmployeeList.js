import React, { Component } from "react";
// import { ListView } from "react-native"; //deprecated
import { FlatList, Text } from "react-native";
// import { ListItem } from "./ListItem"; // 3'alat 5ales {} //error unable to resolve module
import ListItem from "./ListItem"; // de el sa7
import { connect } from "react-redux";
import { employeesFetch } from "../actions";
import _ from "lodash";

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();

    // this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    /* nextProps are the next set of props of this component 
    will be rerendered with, this.props still the old set of props */
    // this.createDataSource(nextProps);
  }

  // createDataSource({ employees }) {
  //   const ds = new ListView.DataSource({
  //     rowHasChanged: (r1, r2) => r1 !== r2
  //   });

  //   this.dataSource = ds.cloneWithRows(this.props.employees);
  // }

  _renderItem({ item }) {
    return <ListItem employee={item} />;
  }

  // _keyExtractor = (item, index) => item.uid;

  render() {
    console.log(this.props.employees);
    return (
      //Deprecated ListView
      // <ListView
      //   enableEmptySections
      //   dataSource={this.dataSource}
      //   renderRow={this._renderItem}  // take object contains objects and return array of this objects
      // { "213": {name:,phone:,shift},"233":{name:,phone:,shift}}
      // every diffrent key in the object state.employees is calling this call back function
      // where val is the employee object { name: , phone: , shift:  }
      // and the uid is the key of each employee object
      // { {name:,phone:,shift:, uid:"213"},"233":{name:,phone:,shift:, uid:"233"}}

      // />
      <FlatList
        data={this.props.employees}
        renderItem={this._renderItem}
        keyExtractor={employee => employee.uid}
      />
    );
  }
}

const mapStateToProps = state => {
  // convert from objects to array (npm i --save lodash) have helper methods
  // with working with objects and arrays
  // conversion from objects to array

  // take object contains objects and return array of this objects
  // { "213": {name:,phone:,shift},"233":{name:,phone:,shift}}
  // every diffrent key in the object state.employees is calling this call back function
  // where val is the employee object { name: , phone: , shift:  }
  // and the uid is the key of each employee object
  // { {name:,phone:,shift:, uid:"213"},"233":{name:,phone:,shift:, uid:"233"}}
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);
