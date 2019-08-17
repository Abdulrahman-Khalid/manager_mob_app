import React, { Component } from "react";
import { CustomCard, CardSection, Button } from "./common";
import { connect } from "react-redux";
import { employeeUpdate, employeeCreate } from "../actions";
import EmployeeForm from "./EmployeeForm";

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || "Monday" });
  }

  render() {
    return (
      <CustomCard>
        {/* pass this.props to employee form props */}
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
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
  { employeeUpdate, employeeCreate }
)(EmployeeCreate);
