import React, { Component } from "react";
import { CustomCard, CardSection, Input, Button } from "./common";
import { connect } from "react-redux";
import { employeeUpdate } from "../actions";
import { Picker, Text } from "react-native";

class EmployeeCreate extends Component {
  render() {
    return (
      <CustomCard>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "name", value })
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "phone", value })
            }
          />
        </CardSection>

        <CardSection>
          {/* style={{ flexDirection: "column" }} */}
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1, marginLeft: 80, paddingTop: 0, marginTop: 0 }}
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdate({ prop: "shift", value })
            }
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button>Save</Button>
        </CardSection>
      </CustomCard>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
    paddingTop: 10,
    margin: 0
  }
};
const mapStateTopProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateTopProps,
  { employeeUpdate }
)(EmployeeCreate);
