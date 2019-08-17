import React, { Component } from "react";
import { CustomCard, CardSection, Button } from "./common";
import { connect } from "react-redux";
import { employeeUpdate, employeeSave } from "../actions";
import EmployeeForm from "./EmployeeForm";
import _ from "lodash";
import Communications from "react-native-communications";

class EmployeeEdit extends Component {
  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      //prop is the key
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
  }

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcomming shift is on ${shift}`);
  }

  render() {
    return (
      <CustomCard>
        {/* pass this.props to employee form props */}
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Fire Employee</Button>
        </CardSection>
      </CustomCard>
    );
  }
}

const mapStateTopProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateTopProps,
  { employeeUpdate, employeeSave }
)(EmployeeEdit);
