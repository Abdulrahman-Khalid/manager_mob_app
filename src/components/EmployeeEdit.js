import React, { Component } from "react";
import { CustomCard, CardSection, Button } from "./common";
import { connect } from "react-redux";
import { employeeUpdate, employeeSave } from "../actions";
import EmployeeForm from "./EmployeeForm";
import _ from "lodash";

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

  render() {
    return (
      <CustomCard>
        {/* pass this.props to employee form props */}
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
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
