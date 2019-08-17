import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { Actions } from "react-native-router-flux";
import { CardSection } from "./common";

class ListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
    //Actions.employeeCreate({ employee: this.props.employee}) pass employee object to EmplyeeCreate Component's props
  }

  render() {
    const { name } = this.props.employee;

    return (
      // leh ba7ot .bind(this)? 3la4an a2dar access [this] in this function
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
